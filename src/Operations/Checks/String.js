function String(c){
    if (isNaN(c)){
        if(isNaN(c[0])||isNaN(c[1])){
            if(Array.isArray(c[0])) {
                if(isNaN(c[0][0])){
                    console.log('Input is not a number')
                    return false;
                }
            }
            if(Array.isArray(c[1])) {
                if(isNaN(c[1][0])){
                    console.log('Input is not a number')
                    return false;
                }
            }
        }
        if(!Array.isArray(c)) {
            console.log('Input is not a number')
            return false;
        }
    }
    return true;
}
module.exports = String;