var asia = {
   countries: {
       India: {
           Mumbai: {
               population: 18.5
           }
       },
       China: {
           Beijing: {
               population: 21.5
           },
           "Hong Kong": {
               population: 7.3
           },
       }
   }
}
console.log("Mumbai’s population : "+ asia.countries.India.Mumbai.population);
console.log("Beijing’s population : "+ asia.countries.China.Beijing);
console.log("Hong Kong's population : "+ asia.countries.China["Hong Kong"].population);