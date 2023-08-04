using Allari.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Allari.API.Controllers;

[ApiController]
[Route("[controller]")]
public class AnimalsController : ControllerBase
{
    private readonly IAnimalService _animalService;

    public AnimalsController(IAnimalService animalService)
    {
        _animalService = animalService;
    }

    [HttpGet("")]
    public string[] Get()
    {
        var animals = this._animalService.GetAnimals();
        return Enumerable.Range(1, 5).Select(index=> animals[Random.Shared.Next(animals.Length)]).ToArray();
    }
}