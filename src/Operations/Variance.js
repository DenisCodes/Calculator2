const Mean = require('./Man.js');
function Variance(a) {
    var b = 0;
    for (var i = 0; i < a.length ; i++){
        b += Math.pow(a[i],2);
    }
    var meanSqr = Math.pow(Mean(a),2);
    return Math.sqrt(b/a.length - meanSqr);
}
module.exports = Variance;