
const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');

class Calculator {
    static Calculations = []
    static Sum(a,b) {
        Calculator.Calculations.push(Calculation.Create(a,b,Sum));
        return calculation.GetResults();
    }
    static Difference(a,b) {
        Calculator.Calculations.push(Calculation.Create(a,b,Difference));
        return calculation.GetResults();
    }
    static Product(a,b) {
        Calculator.Calculations.push(Calculation.Create(a,b,Product));
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        Calculator.Calculations.push(Calculation.Create(a,b,Quotient));
        return calculation.GetResults();
    }
}
module.exports = Calculator;