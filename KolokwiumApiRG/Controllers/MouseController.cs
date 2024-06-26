using KolokwiumApiRG.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KolokwiumApiRG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MouseController : ControllerBase
    {
        private static List<Mouse> MouseList = new List<Mouse>();

        [HttpGet]
        public ActionResult<List<Mouse>> Get()
        {
            return Ok(MouseList);
        }

        [HttpPost]
        public IActionResult AddMouse(MouseRequestDto requestDto)
        {
            MouseList.Add(new Mouse
            {
                Model = requestDto.Model,
                DPI = requestDto.DPI
            });

            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteMouse(int id)
        {
            var mouse = MouseList.FirstOrDefault(x => x.ID == id);

            if (mouse != null) { MouseList.Remove(mouse); return Ok(); }

            return NoContent();
        }
    }
}
