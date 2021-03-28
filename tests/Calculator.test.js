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
test('Calculator Cochran of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],5];
    let result = Calculator.Cochran(c);
    expect(result).toBe(false);
});
test('Calculator MarginError of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],5];
    let result = Calculator.MarginError(c);
    expect(result).toBe(0);
});
test('Calculator ConfiInterval of a list', () => {
    let c = [[1,2,3,4,5,6,7,8,9],5];
    let result = Calculator.ConfiInterval(c);
    expect(result[0]).toBe(-4.682458365518542);
    expect(result[1]).toBe(14.682458365518542);
});
test('Check Empty', () => {
    let c = [];
    let result = Calculator.Zscore(c);
    expect(result).toBe(false);
});
test('Check String', () => {
    let c = ['check'];
    let result = Calculator.Zscore(c);
    expect(result).toBe(false);
});

test('Calculator adding to calculations', () => {
    let c = [1,2];
    let result = Calculator.Quotient(c);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});

test('Calculator RandSample', () => {
    let samplesize = 3;
    let population = ["apple", "banana", "coconut", "strawberry", "pineapple"];
    console.log(Calculator.RandSample(samplesize, population));
    console.log(Calculator.RandSample(samplesize, population));
    console.log(Calculator.RandSample(samplesize, population));
});
test('Calculator Systematic Sample', () => {
    let samplesize = 8;
    let population = [];
    for(let i = 11; i <= 130; i++)
    {
        population.push(i);
    }
    expect(Calculator.SystSample(samplesize, population)).toStrictEqual([11, 26, 41, 56, 71, 86, 101, 116]);
});
test('Calculator Sample Size (unknown population std dev)', () => {
    let confidenceInterval = 0.95;
    let width = 0.06;
    let percentage = 0.41;
    expect(Math.round(Calculator.SampleSize(confidenceInterval, width, percentage))).toBe(1033);
});
test('Calculator Sample Size (known population std dev)', () => {
    let confidenceInterval = 0.99;
    let errorMargin = 0.5;
    let standardDeviation = 2.9;
    expect(Math.round(Calculator.SampleSizePop(confidenceInterval, errorMargin, standardDeviation))).toBe(224);
});