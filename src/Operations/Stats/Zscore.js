const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Zscore(c) {
    var a = c[0];
    var b = c[1];
    if (Array.isArray(a)){
        var nom = b - Mean(a);
        return nom/Standard(a);
    }
    else{
        var nom = a - Mean(b);
        return nom/Standard(b);
    }
}
module.exports = Zscore;