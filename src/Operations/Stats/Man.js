const Total = require('./Total');
function Mean(a){
    return Total(a) / a.length;
}
module.exports = Mean;