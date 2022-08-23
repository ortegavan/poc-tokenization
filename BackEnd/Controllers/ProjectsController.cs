using BackEnd.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {        
        [HttpGet]
        [Authorize]
        public IList<Project> Get()
        {
            var projects = new List<Project>();
            var image = 11;
            string[] names = { "Form Builder", "Food App", "Landing Page Update", "Flowers App", "New Website", "Social Media Integration" };            

            foreach (var name in names)
            {
                projects.Add(new Project
                {
                    Name = name,
                    Image = string.Concat(image, ".png"),
                    Accessed = DateTime.Now                    
                });
                Thread.Sleep(250); // para gerar datas diferentes e acessar os mais recentes
                image++;                
            }

            return projects;
        }
    }
}

