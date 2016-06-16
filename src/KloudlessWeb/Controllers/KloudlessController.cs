using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace KloudlessWeb.Controllers
{
    [Route("api/kloudless")]
    public class KloudlessController : Controller
    {
        [HttpGet("appid")]
        public string Get()
        {
            // Kloudless AppId goes here!
            return "";
        }

        [HttpPost("upload/{accountId:int}/{fileId:guid}")]
        public void Upload(int accountId, Guid fileId)
        {
            
        }
    }
}
