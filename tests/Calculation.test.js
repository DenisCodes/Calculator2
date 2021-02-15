
const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');

test('Test of Calculation Instantiation', () => {
    let calculation = new Calculation(1,2,Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Sum);
});
test('Test Get results for Sum function', () => {
    let calculation = new Calculation(1,2,Sum);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference function', () => {
    let calculation = new Calculation(1,2,Difference);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    let calculation = new Calculation(1,2,Product);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    let calculation = new Calculation(1,2,Quotient);
    expect(calculation.GetResults()).toBe(.5);
});