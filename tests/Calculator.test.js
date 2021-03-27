const Calculator = require('../src/Calculator');

test('Calculator adding a list', () => {
    let c = [1,2];
    let result = Calculator.Sum(c);
    expect(result).toBe(3);
});
test('Calculator difference a list', () => {
    let c = [1,2];
    let result = Calculator.Difference(c);
    expect(result).toBe(-1);
});
test('Calculator product of a list', () => {
    let c = [1,2];
    let result = Calculator.Product(c);
    expect(result).toBe(2);
});
test('Calculator quotient of a list', () => {
    let c = [1,2];
    let result = Calculator.Quotient(c);
    expect(result).toBe(.5);
});
test('Calculator square of a list', () => {
    let result = Calculator.Square(3);
    expect(result).toBe(9);
});
test('Calculator root of a list', () => {
    let result = Calculator.Root(9);
    expect(result).toBe(3);
});
test('Calculator Correlation of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let result = Calculator.Correlation(c);
    expect(result).toBe(1);
});
test('Calculator Deviation of a list', () => {
    let c = [1,2,3,4,5,6,7,8,9];
    let result = Calculator.Deviation(c);
    expect(result).toBe(2.2222222222222223);
});
test('Calculator Mean of list', () => {
    let c = [1,2,3,4];
    let result = Calculator.Mean(c);
    expect(result).toBe(2.5);
});
test('Calculator Median of an even list', () => {
    let c = [1,2,3,4];
    let result = Calculator.Median(c);
    expect(result).toBe(2.5);
});
test('Calculator Median of an odd list', () => {
    let c = [1,2,3];
    let result = Calculator.Median(c);
    expect(result).toBe(2);
});
test('Calculator Mode of a list', () => {
    let c = [1,2,2,3];
    let result = Calculator.Mode(c);
    expect(result[0]).toBe(2);
});
test('Calculator Population of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let result = Calculator.Population(c);
    expect(result).toBe(1);
});
test('Calculator Quartile1 of a list', () => {
    let c = [1,2,3,4,5,6];
    let result = Calculator.Quartile1(c);
    expect(result).toBe(2);
});
test('Calculator Quartile3 of a list', () => {
    let c = [1,2,3,4,5,6,7];
    let result = Calculator.Quartile3(c);
    expect(result).toBe(6);
});
test('Calculator Skewness of a list', () => {
    let c = [1,2,3,4,5,6,7,8,9];
    let result = Calculator.Skewness(c);
    expect(result).toBe(0);
});
test('Calculator Standard of a list', () => {
    let c = [1,2,3,4,5,6,7,8,9];
    let result = Calculator.Standard(c);
    expect(result).toBe(2.7386127875258306);
});
test('Calculator Total of a list', () => {
    let c = [1,2,3,4,5];
    let result = Calculator.Total(c);
    expect(result).toBe(15);
});
test('Calculator Variance of a list', () => {
    let c = [1,2,3,4,5,6,7,8,9];
    let result = Calculator.Variance(c);
    expect(result).toBe(7.5);
});
test('Calculator Zscore of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],5];
    let result = Calculator.Zscore(c);
    expect(result).toBe(0);
});
test('Calculator adding to calculations', () => {
    let c = [1,2];
    let result = Calculator.Quotient(c);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});