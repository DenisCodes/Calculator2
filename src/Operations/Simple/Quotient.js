function Quotient(c){
    if(c[1] == 0){
        console.log('Divide by zero error')
        return false;
    }
    var a = c[0];
    var b = c[1];
    return a/b;
}
module.exports = Quotient;