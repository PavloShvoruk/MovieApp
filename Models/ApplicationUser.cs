using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName ="nvarchar(150)")]
        public string FirstName { get; set; }
        [Column(TypeName ="nvarchar(150)")]
        public string LastName { get; set; }

        public ICollection<FavoritiesModel> Favorities { get; set; }

    }
}
