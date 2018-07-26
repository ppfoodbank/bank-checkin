namespace pmfbapi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Newtonsoft.Json;
    using pmfbapi.Models;

    [Produces("application/json")]
    [Route("api/customer")]
    [RequireHttps]
    public class CustomerController : Controller
    {
        private PmfbDbContext dbContext;

        public CustomerController(PmfbDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // POST: api/Customer
        [RequireHttps]
        [HttpPost("checkin")]
        [EnableCors("MyPolicy")]

        public IActionResult checkin([FromBody]CheckinInfo checkinInfo)
        {
            try
            {
                var apiKey = Request.Headers["apiKey"];
                var correlationId = Request.Headers["correlationId"];

                // Authenticate
                if (!string.Equals(AppConfigStore.ApiKey, apiKey))
                    return this.Unauthorized();
                
                // Validate request details
                if (checkinInfo == null)
                {
                    return this.BadRequest("Invalid request object");
                }

                // Save to db
                    dbContext.Database.ExecuteSqlCommand(
                    "dbo.uspAddUser @p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10",
                     parameters: new object[] {
                     checkinInfo.ZipCode,
                     checkinInfo.AgeBracket,
                     checkinInfo.IsDuplicated,
                     checkinInfo.IsHoused,
                     checkinInfo.FamilySizeCategory1Count,
                     checkinInfo.FamilySizeCategory2Count,
                     checkinInfo.FamilySizeCategory3Count,
                     checkinInfo.FamilySizeCategory4Count,
                     checkinInfo.Race,
                     checkinInfo.Gender,
                     checkinInfo.SpokenLanguage
                     });
                
                return this.NoContent();
            }
            catch (Exception ex)
            {
                return this.StatusCode(
                    (int)HttpStatusCode.InternalServerError,
                    ex.Message);
            }
        }
    }
}
