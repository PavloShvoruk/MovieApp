using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieDb.Lib.Services;

namespace MovieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public ShowController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        // GET: api/Show/Search/searchQuery
        [HttpGet("Search/{searchQuery}", Name = "GetShow")]
        public async Task<IActionResult> GetShowAsync(string searchQuery)
        {
            var result = await _movieService.GetShowBasedOnSearchQuery(searchQuery);
            return Ok(result);
        }

        // GET: api/Show/Popular
        [HttpGet("Popular", Name = "GetPopularShows")]
        public async Task<IActionResult> GetPopularShowsAsync()
        {
            var result = await _movieService.GetPopularShows();
            return Ok(result);
        }

        // GET: api/Show/TopRated
        [HttpGet("TopRated", Name = "GetTopRatedShows")]
        public async Task<IActionResult> GetTopRatedShowsAsync()
        {
            var result = await _movieService.GetTopRatedShows();
            return Ok(result);
        }

        // GET: api/Show/Latest
        [HttpGet("Latest", Name = "GetLatestShows")]
        public async Task<IActionResult> GetLatestShowsAsync()
        {
            var result = await _movieService.GetLatestShows();
            return Ok(result);
        }

        // GET: api/Show/Seasons/id
        [HttpGet("Seasons/{id}", Name = "GetShowSeasons")]
        public async Task<IActionResult> GetShowSeasonsAsync(int id)
        {
            var result = await _movieService.GetSeasons(id);
            return Ok(result);
        }
    }
}