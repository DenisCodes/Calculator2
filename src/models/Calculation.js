class Calculation {
    constructor(c, op) {
        this.c = c;
        this.op = op;
    }
    GetResults() {
        return this.op(this.c)
    }
}
module.exports = Calculation;