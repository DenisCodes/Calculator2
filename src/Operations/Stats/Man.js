const Total = require('./Total');
function Mean(c){
    var a = c;
    return Total(a) / a.length;
}
module.exports = Mean;