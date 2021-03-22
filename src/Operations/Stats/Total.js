function Total(a){
    var b=0;
    for (var i = 0; i < a.length ; i++){
        b += a[i];
    }
    return b
}
module.exports = Total;