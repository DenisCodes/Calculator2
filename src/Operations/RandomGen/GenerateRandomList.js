const seedrandom = require("seedrandom");

function GenerateRandomList(amount, min, max, seed) {
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