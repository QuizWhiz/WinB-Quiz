using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WINB_Quiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageController : ControllerBase
    {
        // GET: api/Page
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "It is working" };
        }

        // GET: api/Page/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Page
        [HttpPost]
        public bool Post([FromBody] string[] value)
        {
            var previousDataJson = System.IO.File.ReadAllText("response.json");
            var previousData= JsonConvert.DeserializeObject<List<Response>>(previousDataJson);
            var response = new Response()
            {
                Time = DateTime.Now.TimeOfDay,
                Answers = value
            };
            if(previousData ==null)
            {
                previousData = new List<Response>();
            }
            previousData.Add(response);
            string json = JsonConvert.SerializeObject(previousData);
            System.IO.File.WriteAllText("response.json", json);
            return true;
        }

        // PUT: api/Page/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
