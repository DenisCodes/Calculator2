const jstat = require('jstat');

function SampleSizePop(c){
    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    let confInt = c[0];
    let E = c[1]; // Margin of error
    let stdDev = c[2];

    let z = roundToTwo(-jstat.normal.inv((1-confInt)/2, 0, 1)); // SND z-score

    let samplesize = z * stdDev;
    samplesize /= E;
    samplesize = Math.pow(samplesize, 2);

    return samplesize;
}
module.exports = SampleSizePop;