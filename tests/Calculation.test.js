const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Simple/Sum');
const Difference = require('../src/Operations/Simple/Difference');
const Product = require('../src/Operations/Simple/Product');
const Quotient = require('../src/Operations/Simple/Quotient');
const Square = require('../src/Operations/Simple/Square');
const Root = require('../src/Operations/Simple/Root');

test('Test of Calculation Instantiation', () => {
    let op = Sum
    let c = [1,2];
    let calculation = new Calculation(c,op);
    expect(calculation.c[0]).toBe(1);
    expect(calculation.c[1]).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    let op = Sum;
    let c = [1,2];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference function', () => {
    let op = Difference;
    let c = [1,2];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    let op = Product;
    let c = [1,2];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    let op = Quotient;
    let c = [1,2];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(.5);
});
test('Test Get results for Square function', () => {
    let op = Square;
    let calculation = new Calculation(3,op);
    expect(calculation.GetResults()).toBe(9);
});
test('Test Get results for Root function', () => {
    let op = Root;
    let calculation = new Calculation(9,op);
    expect(calculation.GetResults()).toBe(3);
});