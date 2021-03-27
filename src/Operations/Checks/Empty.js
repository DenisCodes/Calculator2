function Empty(c){
    if (!c){
        console.log('Input is empty')
        return false;
    }
    if(Array.isArray(c)) {
        if (!c[0]) {
            console.log('Input is empty')
            return false;
        }
        if (!c[1]) {
            console.log('Input is empty')
            return false;
        }
    }
    return true;
}
module.exports = Empty;