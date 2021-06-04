let superHeros = [
    { name: "Robert Downey, Jr.",  hero: "Iron Man" },
    { name: "Chris Evans", hero: "Captain America" },
    { name: "Mark Ruffalo", hero: "Hulk"   },
    { name: "Tom Hiddleston", hero: "Loki" }
];

let newArray = superHeros.filter(function (element) {
    return (element.hero === "Captain America");
}).map(function(element) {
return element.name;
}).sort()

console.log(newArray);

// ["Chris Evans"]