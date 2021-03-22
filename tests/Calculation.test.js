const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Simple/Sum');
const Difference = require('../src/Operations/Simple/Difference');
const Product = require('../src/Operations/Simple/Product');
const Quotient = require('../src/Operations/Stats/Quotient');
const Square = require('../src/Operations/Simple/Square');
const Root = require('../src/Operations/Simple/Root');

test('Test of Calculation Instantiation', () => {
    let op = Sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference function', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});
test('Test Get results for Square function', () => {
    let op = Square;
    let calculation = new Calculation(3,3,op);
    expect(calculation.GetResults()).toBe(9);
});
test('Test Get results for Root function', () => {
    let op = Root;
    let calculation = new Calculation(9,9,op);
    expect(calculation.GetResults()).toBe(3);
});