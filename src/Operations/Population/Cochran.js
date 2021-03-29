const Zscore = require('../Stats/Zscore');
const MarginError = require('./MarginError');
function Cochran(c){
    var z = Math.pow(Zscore(c),2);
    var e = Math.pow(MarginError(c),2);;
    var p = c[1];
    var q = 1 - c[1];
    var nom = z*p*q;
    if(e == 0){
        console.log('Divide by zero error')
        return false;
    }
    return nom/e;
}
module.exports = Cochran;