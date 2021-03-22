const Mean = require('./Man.js');
const Standard = require('./Standard.js');
function Zscore(a,b) {
    if (Array.isArray(a)){
        return b - Mean(a)/Standard(a);
    }
    else{
        return a - Mean(b)/Standard(b);
    }
}
module.exports = Zscore;