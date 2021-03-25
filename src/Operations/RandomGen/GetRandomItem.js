const seedrandom = require("seedrandom");
const sr = seedrandom("seed");
function GetRandomItem(list) {
    return list[Math.floor(sr()*list.length)];
}
module.exports = GetRandomItem;