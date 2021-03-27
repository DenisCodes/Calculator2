const Mean = require('./Man.js');
function Variance(c) {
    var sqDiff = 0;
    var mean = Mean(c);
    for (var i = 0; i < c.length; i++) {
        sqDiff += (c[i] - mean) * (c[i] - mean);
    }
    var denom = c.length-1;
    return sqDiff / denom;
}
module.exports = Variance;