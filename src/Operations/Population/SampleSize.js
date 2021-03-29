const jstat = require('jstat');

function SampleSize(c){
    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
    function roundToFour(num) {
        return +(Math.round(num + "e+4")  + "e-4");
    }

    let confInt = c[0];
    let width = c[1];
    let percentage = c[2];

    let z = roundToTwo(-jstat.normal.inv((1-confInt)/2, 0, 1)); // SND z-score
    let E = width / 2; // Margin of error
    let q = 0.5; // Given percentage, default 50% if not given
    if(percentage != undefined) q = percentage;
    let p = roundToTwo(1-q); // Subtract given percentage from 1
    let qp = roundToFour(q*p);

    let samplesize = z/E;
    samplesize = Math.pow(samplesize, 2);
    samplesize *= qp;

    return samplesize;
}
module.exports = SampleSize;