const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Simple/Sum');
const Difference = require('../src/Operations/Simple/Difference');
const Product = require('../src/Operations/Simple/Product');
const Quotient = require('../src/Operations/Simple/Quotient');
const Square = require('../src/Operations/Simple/Square');
const Root = require('../src/Operations/Simple/Root');
const Correlation = require('../src/Operations/Stats/Correlation');
const Deviation = require('../src/Operations/Stats/Deviation');
const Mean = require('../src/Operations/Stats/Man');
const Median = require('../src/Operations/Stats/Median');
const Mode = require('../src/Operations/Stats/Mode');
const Population = require('../src/Operations/Stats/Population');
const Quartile1 = require('../src/Operations/Stats/Quartile1');
const Quartile3 = require('../src/Operations/Stats/Quartile3');
const Skewness = require('../src/Operations/Stats/Skewness');
const Standard = require('../src/Operations/Stats/Standard');
const Total = require('../src/Operations/Stats/Total');
const Variance = require('../src/Operations/Stats/Variance');
const Zscore = require('../src/Operations/Stats/Zscore');

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
test('Test Get results for Correlation function', () => {
    let op = Correlation;
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(1);
});
test('Test Get results for Deviation function', () => {
    let op = Deviation;
    let c = [1,2,3,4,5,6,7,8,9];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2.2222222222222223);
});
test('Test Get results for Mean function', () => {
    let op = Mean;
    let c = [1,2,3,4];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2.5);
});
test('Test Get results for Median function', () => {
    let op = Median;
    let c = [1,2,3];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Mode function', () => {
    let op = Mode;
    let c = [1,2,2,3];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()[0]).toBe(2);
});
test('Test Get results for Population function', () => {
    let op = Population;
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(1);
});
test('Test Get results for Quartile1 function', () => {
    let op = Quartile1;
    let c = [1,2,3,4,5,6];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quartile3 function', () => {
    let op = Quartile3;
    let c = [1,2,3,4,5,6,7];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(6);
});
test('Test Get results for Skewness function', () => {
    let op = Skewness;
    let c = [1,2,3,4,5,6,7,8,9];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(0);
});
test('Test Get results for Standard function', () => {
    let op = Standard;
    let c = [1,2,3,4,5,6,7,8,9];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(2.7386127875258306);
});
test('Test Get results for Total function', () => {
    let op = Total;
    let c = [1,2,3,4,5];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(15);
});
test('Test Get results for Variance function', () => {
    let op = Variance;
    let c = [1,2,3,4,5,6,7,8,9];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(7.5);
});
test('Test Get results for Zscore function', () => {
    let op = Zscore;
    let c = [[1,2,3,4,5,6,7,8,9],5];
    let calculation = new Calculation(c,op);
    expect(calculation.GetResults()).toBe(0);
});
