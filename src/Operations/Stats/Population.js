const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Population(c) {
    var a = c[0];
    var b = c[1];
    var sum = 0;

    for(var i = 0; i < a.length; i++){
        sum = sum + (a[i] - Mean(a)) * (b[i] - Mean(b));
        var denom = a.length - 1;
        var covariance = sum / denom;
    }
    var denom2 = Standard(a)*Standard(b);
    return covariance/denom2;
}
module.exports = Population;