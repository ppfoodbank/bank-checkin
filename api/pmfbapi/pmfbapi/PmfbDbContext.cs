using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pmfbapi
{
    public partial class PmfbDbContext : DbContext
    {
        public PmfbDbContext(DbContextOptions<PmfbDbContext> options)
            : base(options)
        {
           
        }
    }
}
