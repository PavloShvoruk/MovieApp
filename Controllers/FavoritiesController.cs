using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;

namespace MovieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritiesController : ControllerBase
    {
        private readonly ApplicationContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public FavoritiesController(ApplicationContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost]
        [Authorize]
        [Route("add")]
        //// POST: /api/Favorities/add
        public async Task<object> AddToFavoritiesAsync(FavoritiesModel model)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);

            var show = new FavoritiesModel()
            {
                ShowID = model.ShowID,
                UserId = user.Id,
                Name = model.Name,
                PosterPath = model.PosterPath
                
            };

            try
            {
                await _context.Favorities.AddAsync(show);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Show added to favorities" });

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}