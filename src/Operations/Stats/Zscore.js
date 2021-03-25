const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Zscore(c) {
    var a = c[0];
    var b = c[1];
    if (Array.isArray(a)){
        return b - Mean(a)/Standard(a);
    }
    else{
        return a - Mean(b)/Standard(b);
    }
}
module.exports = Zscore;