using System;
namespace BackEnd.Models
{
	public class Project
	{
		public Project()
		{
		}

        public string Name { get; set; }

		public string Image { get; set; }

		public DateTime Accessed { get; set; }
    }
}

