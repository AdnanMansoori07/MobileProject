using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Xml.Linq;


namespace backendWebServiceMobile
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
   [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public void AddPerson(string name, string phone, int department, string addressStreet, string addressCity, string addressState, string addressZIP, string addressCountry)
        {
            try
            {
                var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");

                var xdoc = XDocument.Load(file);

                int maxID = xdoc.Descendants("Person").Max(b => (int)b.Attribute("id"));
                int newID = maxID + 1;

                XElement newPerson = new XElement("Person");

                newPerson.Add(new XAttribute("id", newID));
                newPerson.Add(new XElement("name", name));
                newPerson.Add(new XElement("phone", phone));
                newPerson.Add(new XElement("department", department));
                newPerson.Add(new XElement("addressStreet", addressStreet));
                newPerson.Add(new XElement("addressCity", addressCity));
                newPerson.Add(new XElement("addressState", addressState));
                newPerson.Add(new XElement("addressZIP", addressZIP));
                newPerson.Add(new XElement("addressCountry", addressCountry));

                xdoc.Root.Add(newPerson);
                xdoc.Save(file);
            }
            catch (Exception ex)
            {
                Context.Response.StatusCode = 500;
                Context.Response.Write("Error: " + ex.ToString());
            }
            

        }

        [WebMethod]

        public void RemovePerson(int id)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
            var xdoc = XDocument.Load(file);

            var person = xdoc.Descendants("Person").Single(b => int.Parse(b.Attribute("id").Value) == id);

            person.Remove();
            xdoc.Save(file);
        }

        [WebMethod]

        public void UpdatePerson(int id, string name, string phone, int department, string addressStreet, string addressCity, string addressState, string addressZIP, string addressCountry)
        {

            try
            {
                var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
                var xdoc = XDocument.Load(file);

                var person = xdoc.Descendants("Person").Single(b => int.Parse(b.Attribute("id").Value) == id);

                person.SetElementValue("name", name);
                person.SetElementValue("phone", phone);
                person.SetElementValue("department", department);
                person.SetElementValue("addressStreet", addressStreet);
                person.SetElementValue("addressCity", addressCity);
                person.SetElementValue("addressState", addressState);
                person.SetElementValue("addressZIP", addressZIP);
                person.SetElementValue("addressCountry", addressCountry);

                xdoc.Save(file);
            }
            catch(Exception ex)
            {
                Context.Response.StatusCode = 500;
                Context.Response.Write("Error: " + ex.ToString());
            }
            
        }

        [WebMethod]
        public void GetPeople()
        {
            try
            {
                var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
                var doc = XDocument.Load(file);
                var elements = doc.Root.Elements();

                List<People> peopleList = new List<People>();

                foreach (XElement element in elements)
                {
                    People people = new People();
                    people.id = int.Parse(element.Attribute("id").Value);
                    people.name = element.Element("name").Value;
                    people.phone = element.Element("phone").Value;
                    string departmentValue = element.Element("department").Value;
                    people.department = Departments.FirstOrDefault(x => x.id == Int32.Parse(departmentValue));
                    peopleList.Add(people);
                }
                Context.Response.Write(new JavaScriptSerializer().Serialize(peopleList));
            }
            catch (Exception ex)
            {
                Context.Response.StatusCode = 500;
                Context.Response.Write("Error: " + ex.ToString());
            }
        }


        //helper method to return a list of departments
        private List<Department> Departments
        {
            get
            {
                var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Department.xml");
                var doc = XDocument.Load(file);
                var elements = doc.Root.Elements();

                List<Department> departmentList = new List<Department>();

                foreach ( XElement element in elements)
                {
                    Department department = new Department();
                    department.id = int.Parse(element.Attribute("id").Value);
                    department.name = element.Element("name").Value;
                    departmentList.Add( department );
                }
                return departmentList;
            }
        }
    }
}
