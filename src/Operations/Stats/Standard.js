const Variance = require('./Variance.js');
function Standard(a) {
    return Math.sqrt(Variance(a));
}
module.exports = Standard;