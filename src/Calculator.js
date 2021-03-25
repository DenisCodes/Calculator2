const Calculation = require('./models/Calculation');
const Sum = require('./Operations/Simple/Sum');
const Difference = require('./Operations/Simple/Difference');
const Product = require('./Operations/Simple/Product');
const Quotient = require('./Operations/Simple/Quotient');
const Square = require('./Operations/Simple/Square');
const Root = require('./Operations/Simple/Root');

class Calculator {
    static Calculations = []
    static Sum(c) {
        let calculation = new Calculation(c,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(c) {
        let calculation = new Calculation(c,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(c) {
        let calculation = new Calculation(c,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(c) {
        let calculation = new Calculation(c,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(c) {
        let calculation = new Calculation(c,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Root(c) {
        let calculation = new Calculation(c,Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;