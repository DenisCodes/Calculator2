const Median = require('./Median.js');
function Quartile3(a) {
    var numsLen = a.length;
    var end = a.length - 1;
    a.sort();
    if (numsLen % 2 === 0) {
        return Median(a.slice(numsLen/2 + 1,end))
    } else {
        return Median(a.slice(numsLen/2 + 1.5,end))
    }
}
module.exports = Quartile3;