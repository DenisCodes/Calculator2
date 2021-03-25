const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let c = [1,2];
    let result = Calculator.Sum(c);
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let c = [1,2];
    let result = Calculator.Difference(c);
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let c = [1,2];
    let result = Calculator.Product(c);
    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let c = [1,2];
    let result = Calculator.Quotient(c);
    expect(result).toBe(.5);
});
test('Calculator square of a number', () => {
    let result = Calculator.Square(3);
    expect(result).toBe(9);
});
test('Calculator root of a number', () => {
    let result = Calculator.Root(9);
    expect(result).toBe(3);
});
test('Calculator adding to calculations', () => {
    let c = [1,2];
    let result = Calculator.Quotient(c);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});