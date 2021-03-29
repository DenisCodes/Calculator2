const seedrandom = require("seedrandom");

function SelectRandomly(c) {
    let amount = c[0];
    let list = c[1].slice();
    let seed = c[2];
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);

    let result = [];

    for(let i = 0; i < amount; i++)
    {
        let index = Math.floor(sr()*list.length);
        result.push(list[index]);
        list.splice(index, 1)
    }

    return result;
}
module.exports = SelectRandomly;