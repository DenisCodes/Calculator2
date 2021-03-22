function Median(a) {
    var median = 0, numsLen = a.length;
    a.sort();
    if (numsLen % 2 === 0) {
        median = (a[numsLen / 2 - 1] + a[numsLen / 2]) / 2;
    } else {
        median = a[(numsLen - 1) / 2];
    }
    return median;
}
module.exports = Median;