const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Population(a, b) {
    var sum = 0;

    for(var i = 0; i < a.length; i++){
        sum = sum + (a[i] - Mean(a)) * (b[i] - Mean(b));
        var covariance = sum / (a.length - 1);
    }
    return covariance/Standard(a)*Standard(b);
}
module.exports = Population;