using System.Collections.Generic;

namespace pmfbapi.Models
{
    public class CheckinInfo
    {
        public string ZipCode { get; set; }
        public string AgeBracket { get; set; }
        public string IsDuplicated { get; set; }
        public string IsHoused { get; set; }
        public int FamilySizeCategory1Count { get; set; }
        public int FamilySizeCategory2Count { get; set; }
        public int FamilySizeCategory3Count { get; set; }
        public int FamilySizeCategory4Count { get; set; }
        public string Race { get; set; }
        public string Gender { get; set; }
        public string SpokenLanguage { get; set; }
    }
}
