using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pmfbapi.Models;

namespace pmfbapi.Controllers
{
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
        public IActionResult adduser([FromBody]List<CheckinInfo> CheckinInfo)
        {
            try
            {
                var apiKey = Request.Headers["apiKey"];
                var correlationId = Request.Headers["correlationId"];

                //Authenticate
                if (!string.Equals(AppConfigStore.ApiKey, apiKey))
                    return this.Unauthorized();

                // Validate request details
                if (CheckinInfo == null || 
                    CheckinInfo?.Count() < 1 ||
                    CheckinInfo.Any(i => string.IsNullOrEmpty(i.AgeBracket)) ||
                    CheckinInfo.Any(i => string.IsNullOrEmpty(i.ZipCode)))
                {
                    return this.BadRequest("Empty request object");
                }
                    
                // Save to db
                foreach (var item in CheckinInfo)
                {
                    dbContext.Database.ExecuteSqlCommand(
                    "dbo.uspAddUser @p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10",
                     parameters: new object[] {
                     item.ZipCode,
                     item.AgeBracket,
                     item.IsDuplicated,
                     item.IsHoused,
                     item.FamilySizeCategory1Count,
                     item.FamilySizeCategory2Count,
                     item.FamilySizeCategory3Count,
                     item.FamilySizeCategory4Count,
                     item.Race,
                     item.Gender,
                     item.SpokenLanguage
                     });
                }
                
                return this.NoContent();
            }
            catch(Exception ex)
            {
                return this.StatusCode(
                    (int)HttpStatusCode.InternalServerError,
                    ex.Message);
            }
        }
    }
}
