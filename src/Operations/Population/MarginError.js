const Zscore = require('../Stats/Zscore');
const Standard = require('../Stats/Standard');
function MarginError(c){
    var z = Zscore(c);
    if (Array.isArray(c[0])){
        var s = Standard(c[0]);
    }
    else{
        var s = Standard(c[1]);
    }
    return z * s;
}
module.exports = MarginError;