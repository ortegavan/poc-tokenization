using BackEnd.Models;
using BackEnd.Tools;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {   
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Post([FromBody]Login login)
        {
            if (login.Email == "email@email.com" && login.Password == "12345")
            {
                login.Password = string.Empty;
                login.Token = Token.Get(login.Email);
                return Ok(login);
            }
            return Unauthorized();
        }
    }
}

