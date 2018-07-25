using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pmfbapi
{
    public class AppConfigStore
    {
        public static string DbConnectionString { get; set; }
        public static string ApiKey { get; set; }
        public static string VaultUri { get; set; }
    }
}
