const Mean = require('../Stats/Man');
const Standard = require('../Stats/Standard');
function ConfiInterval(c){
    var mean = Mean(c[0]);
    var standardDeviation = Standard(c[0]);
    var confidenceLevel = c[1];
    var temp = confidenceLevel * standardDeviation / Math.sqrt(c.length);
    return [mean - temp, mean + temp];
}
module.exports = ConfiInterval;