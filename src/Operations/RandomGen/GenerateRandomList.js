const seedrandom = require("seedrandom");

function GenerateRandomList(c) {
    let amount = c[0];
    let min = c[1];
    let max = c[2];
    let seed = c[3];
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);

    let result = [];
    for(let i = 0; i < amount; i++)
    {
        result.push(sr() * (max - min) + min);
    }

    return result;
}
module.exports = GenerateRandomList;