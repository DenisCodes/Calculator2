const Median = require('./Median.js');
function Quartile1(a) {
    var numsLen = a.length;
    a.sort();
    if (numsLen % 2 === 0) {
        return Median(a.slice(0,numsLen/2))
    } else {
        return Median(a.slice(0,numsLen/2 - 0.5))
    }
}
module.exports = Quartile1;