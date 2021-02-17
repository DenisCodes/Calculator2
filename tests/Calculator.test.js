const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result).toBe(.5);
});
test('Calculator square of a number', () => {
    let result = Calculator.Square(3,3);
    expect(result).toBe(9);
});
test('Calculator root of a number', () => {
    let result = Calculator.Root(9,9);
    expect(result).toBe(3);
});
test('Calculator adding to calculations', () => {
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});