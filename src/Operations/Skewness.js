const Median = require('./Median.js');
const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Skewness(a) {
    var nom = Mean(a) - Median(a);
    return nom/Standard(a)
}
module.exports = Skewness;