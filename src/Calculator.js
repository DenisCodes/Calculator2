const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Simple/Sum');
const Difference = require('./Operations/Simple/Difference');
const Product = require('./Operations/Simple/Product');
const Quotient = require('./Operations/Simple/Quotient');
const Square = require('./Operations/Simple/Square');
const Root = require('./Operations/Simple/Root');

class Calculator {
    static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a,b) {
        let calculation = new Calculation(a,b,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Root(a,b) {
        let calculation = new Calculation(a,b,Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;