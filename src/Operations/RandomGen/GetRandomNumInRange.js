const seedrandom = require("seedrandom");

function GetRandomNumInRange(c) {
    let min = c[0];
    let max = c[1];
    let seed = c[2];
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);

    return sr() * (max - min) + min;
}
module.exports = GetRandomNumInRange;