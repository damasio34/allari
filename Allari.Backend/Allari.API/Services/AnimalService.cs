namespace Allari.API.Services;

public class AnimalService : IAnimalService
{
    private readonly string[] _animals = {
        "Lion",
        "Tiger",
        "Goat",
        "Horse",
        "Donkey",
        "Dog",
        "Cat",
        "Pig",
        "Panther",
        "Leopard",
        "Cheetah",
        "Cow",
        "Walrus",
        "Otter",
        "Giraffe",
        "Sheep",
        "Rabbit",
        "Monkey,",
        "Snake",
        "Crocodile",
        "Alligator",
        "Tortoise",
        "Turtle",
        "Lizard",
        "Chameleon",
        "Basilisk",
        "Water moccasin",
        "Gecko,",
        "Herring",
        "Crab",
        "Brill",
        "Haddock",
        "Eel",
        "Whale",
        "Blue whale",
        "Salmon",
        "Sardines",
        "Pike",
        "Carp",
        "Shark",
        "Tuna",
        "Pufferfish",
        "Blue tang",
    };


    public string[] GetAnimals() => _animals;
}