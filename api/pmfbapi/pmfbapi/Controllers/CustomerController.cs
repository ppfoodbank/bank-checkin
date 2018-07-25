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
        [HttpPost("adduser")]
        [EnableCors("MyPolicy")]

        public IActionResult adduser([FromBody]CheckinInfo checkinInfo)
        {
            try
            {
                var apiKey = Request.Headers["apiKey"];
                var correlationId = Request.Headers["correlationId"];

                // Authenticate
                if (!string.Equals(AppConfigStore.ApiKey, apiKey))
                    return this.Unauthorized();

                //var requestBodyLength = checkinInfoString.Length;
                //checkinInfoString = checkinInfoString.Remove(0, 1).Remove(requestBodyLength - 1, 1);

                //checkinInfo = JsonConvert.DeserializeObject<List<CheckinInfo>>(checkinInfoString);

                // Validate request details
                //if (checkinInfo == null ||
                //    checkinInfo?.Count() < 1)
                //{
                //    return this.BadRequest("Empty request object");
                //}

                // Save to db
                //foreach (var item in checkinInfo)
                //{
                //    dbContext.Database.ExecuteSqlCommand(
                //    "dbo.uspAddUser @p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10",
                //     parameters: new object[] {
                //     item.ZipCode,
                //     item.AgeBracket,
                //     item.IsDuplicated,
                //     item.IsHoused,
                //     item.FamilySizeCategory1Count,
                //     item.FamilySizeCategory2Count,
                //     item.FamilySizeCategory3Count,
                //     item.FamilySizeCategory4Count,
                //     item.Race,
                //     item.Gender,
                //     item.SpokenLanguage
                //     });
                //}



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
