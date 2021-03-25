const seedrandom = require("seedrandom");

function GetRandomNumInRange(min, max, seed) {
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);

    return sr() * (max - min) + min;
}
module.exports = GetRandomNumInRange;