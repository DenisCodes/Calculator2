const Mean = require('./Man');
function Deviation(c){
    var nom = 0;
    for(var i = 0; i < c.length; i++) {
        var tem = c[i] - Mean(c);
        nom += Math.abs(tem);
    }
    return nom/c.length;
}
module.exports = Deviation;