const SelectRandomly = require('../RandomGen/SelectRandomly.js');

function RandSample(c){
    let samplesize = c[0];
    let population = c[1].slice();
    return SelectRandomly(samplesize, population);
}
module.exports = RandSample;