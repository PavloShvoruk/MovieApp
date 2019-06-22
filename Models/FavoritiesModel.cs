using Microsoft.AspNetCore.Identity;
using MovieDb.Lib.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.Models
{
    public class FavoritiesModel
    {
        [Key]
        public int Id { get; set; }
        public int ShowID {get; set; }
        [Column(TypeName ="nvarchar(450)")]
        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public string Name { get; set; }
        public string PosterPath { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
    }
}
