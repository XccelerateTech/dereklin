var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

function getNames(n){
    return players.name;
}

const result = players.filter(players => players.club.includes("Barcelona"));
console.log(result);

var result2 = players.map(function(a) {return a.name;});
//var result2 = players.map(a => a.name); //sol 2
console.log(result2);
