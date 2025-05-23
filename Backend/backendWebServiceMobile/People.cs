using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backendWebServiceMobile
{
    public class People
    {

        public int id {  get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public Department department { get; set; }
        public string addressStreet { get; set; }
        public string addressCity { get; set; }
        public string addressState { get; set; }
        public string addressZIP { get; set; }
        public string addressCountry { get; set; }

    }
}