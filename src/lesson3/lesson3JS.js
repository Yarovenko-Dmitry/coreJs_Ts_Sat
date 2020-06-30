console.log('lesson3JS works')

const COUNTRIES_TYPE = {
    BY: 'Belarus',
    RU: 'Russian Federation',
    UA:  'Ukraine',
    PL: 'Poland',
    DE: 'Germany',
    LV: 'Latvia',
    LT: 'Lithuania',
    EE: 'Estonia'
};
const TRANSPORT_TYPE = {
    BUS: 'bus',
    MET: 'metro',
    FER: 'ferry',
    FUN: 'funicular',
    TRO: 'trolleybus',
    TRM: 'tramway',
    CTR: 'city ​​train',
    BYC: 'bicycle',
    TAX: 'taxi'
};
const cities = [
    {name: 'Minsk', id: 0, population: 1975000, country: COUNTRIES_TYPE.BY, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name: 'Brest', id: 1, population: 343000, country: COUNTRIES_TYPE.BY, airport: false, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO]},
    {name: 'Gomel', id: 2, population: 500000, country: COUNTRIES_TYPE.BY, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO]},
    {name: 'Moscow', id: 3, population: 12700000, country: COUNTRIES_TYPE.RU, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name: 'Saint Petersburg', id: 4, population: 4990000, country: COUNTRIES_TYPE.RU, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name: 'Sochi', id: 5, population: 364000, country: COUNTRIES_TYPE.RU, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.FUN]},
    {name: 'Vladivostok', id: 6, population: 600000, country: COUNTRIES_TYPE.RU, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM, TRANSPORT_TYPE.FUN]},
    {name: 'Kiev', id: 7, population: 2800000, country: COUNTRIES_TYPE.UA, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM, TRANSPORT_TYPE.FUN, TRANSPORT_TYPE.FER, TRANSPORT_TYPE.CTR]},
    {name: 'Lviv', id: 8, population: 721000, country: COUNTRIES_TYPE.UA, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name: 'Kharkov', id: 9, population: 1420000, country: COUNTRIES_TYPE.UA, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name:'Warsaw', id: 10, population: 1708000, country: COUNTRIES_TYPE.PL, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.CTR, TRANSPORT_TYPE.TRM]},
    {name:'Gdansk', id: 11, population: 582000, country: COUNTRIES_TYPE.PL, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name:'Krakow', id: 12, population: 780000, country: COUNTRIES_TYPE.PL, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRM]},
    {name:'Lodz', id: 13, population: 740000, country: COUNTRIES_TYPE.PL, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRM]},
    {name:'Berlin', id: 14, population: 3769000, country: COUNTRIES_TYPE.DE, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRM, TRANSPORT_TYPE.FUN, TRANSPORT_TYPE.FER, TRANSPORT_TYPE.CTR]},
    {name:'Dresden', id: 15, population: 544000, country: COUNTRIES_TYPE.DE, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.CTR, TRANSPORT_TYPE.TRM]},
    {name:'Munich', id: 16, population: 1472000, country: COUNTRIES_TYPE.DE, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRM, TRANSPORT_TYPE.CTR]},
    {name:'Hamburg', id: 18, population: 1822000, country: COUNTRIES_TYPE.DE, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.FER, TRANSPORT_TYPE.CTR]},
    {name:'Riga', id: 19, population: 632000, country: COUNTRIES_TYPE.LV, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM, TRANSPORT_TYPE.CTR]},
    {name:'Yurmola', id: 20, population: 49000, country: COUNTRIES_TYPE.LV, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS]},
    {name:'Vilnius', id: 21, population: 544000, country: COUNTRIES_TYPE.LT, airport: true, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.CTR, TRANSPORT_TYPE.FUN]},
    {name:'Klaipeda', id: 22, population: 152000, country: COUNTRIES_TYPE.LT, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.FER]},
    {name:'Talin', id: 23, population: 426000, country: COUNTRIES_TYPE.EE, airport: true, marinePort: true, publicTransport: [TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.TRM]},
    {name:'Narva', id: 24, population: 57000, country: COUNTRIES_TYPE.EE, airport: false, marinePort: false, publicTransport: [TRANSPORT_TYPE.BUS]},
];


//1.Function declaration, function expression, arrow function, different.
// function test(){};
// const sum = function(){};
// const multiply = () => {};

//2.Callbacks - once again.
//3. Destructuring of arrays, objects.
//4. Map, filter, find, findIndex, includes, some, every reduce and other methods of array.
//5. Ternary operator.
//6. useState - superficially.
