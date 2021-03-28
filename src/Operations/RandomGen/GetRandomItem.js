const seedrandom = require("seedrandom");

function GetRandomItem(c) {
    let list = c[0];
    let seed = c[1];
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);
    return list[Math.floor(sr()*list.length)];
}
module.exports = GetRandomItem;