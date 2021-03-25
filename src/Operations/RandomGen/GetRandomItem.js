const sr = require("seedrandom");
function GetRandomItem(list) {
    var item = list[Math.floor(sr()*list.length)];
    return item;
}
module.exports = GetRandomItem;