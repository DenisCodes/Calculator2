const seedrandom = require("seedrandom");

function GetRandomItem(list, seed) {
    let sr;
    if(seed==undefined) sr = seedrandom();
    else sr = seedrandom(seed);
    return list[Math.floor(sr()*list.length)];
}
module.exports = GetRandomItem;