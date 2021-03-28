// Calculation Model
const Calculation = require('./models/Calculation');

// Simple Ops
const Sum = require('./Operations/Simple/Sum');
const Difference = require('./Operations/Simple/Difference');
const Product = require('./Operations/Simple/Product');
const Quotient = require('./Operations/Simple/Quotient');
const Square = require('./Operations/Simple/Square');
const Root = require('./Operations/Simple/Root');

// Stats Ops
const Correlation = require('./Operations/Stats/Correlation');
const Deviation = require('./Operations/Stats/Deviation');
const Mean = require('./Operations/Stats/Man');
const Median = require('./Operations/Stats/Median');
const Mode = require('./Operations/Stats/Mode');
const Population = require('./Operations/Stats/Population');
const Quartile1 = require('./Operations/Stats/Quartile1');
const Quartile3 = require('./Operations/Stats/Quartile3');
const Skewness = require('./Operations/Stats/Skewness');
const Standard = require('./Operations/Stats/Standard');
const Total = require('./Operations/Stats/Total');
const Variance = require('./Operations/Stats/Variance');
const Zscore = require('./Operations/Stats/Zscore');
const Empty = require('./Operations/Checks/Empty');
const String = require('./Operations/Checks/String');

// RandomGen Ops
const SelectRandomly = require('./Operations/RandomGen/SelectRandomly');
const GetRandomItem = require('./Operations/RandomGen/GetRandomItem');
const GetRandomNumInRange = require('./Operations/RandomGen/GetRandomNumInRange');
const GenerateRandomList = require('./Operations/RandomGen/GenerateRandomList');

// Population Ops
const Cochran = require('./Operations/Population/Cochran');
const MarginError = require('./Operations/Population/MarginError');
const ConfiInterval = require('./Operations/Population/ConfiInterval');
const RandSample = require('./Operations/Population/RandSample');
const SampleSize = require('./Operations/Population/SampleSize');
const SampleSizePop = require('./Operations/Population/SampleSizePop');
const SystSample = require('./Operations/Population/SystSample');


class Calculator {
    static Calculations = []
    static Sum(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Root(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Correlation(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Correlation);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Deviation(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Deviation);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Mean(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Mean);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Median(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Median);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Mode(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Mode);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Population(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Population);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quartile1(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Quartile1);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quartile3(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Quartile3);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Skewness(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Skewness);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Standard(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Standard);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Total(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Total);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Variance(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Variance);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Cochran(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Cochran);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Zscore(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,Zscore);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static MarginError(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,MarginError);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static ConfiInterval(c) {
        if(!Empty(c)){
            return false;
        }
        if(!String(c)){
            return false;
        }
        let calculation = new Calculation(c,ConfiInterval);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static SelectRandomly(amount, list, seed){
        list = list.slice();
        let c = [amount, list, seed];
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c, SelectRandomly);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static GetRandomItem(list, seed){
        list = list.slice();
        let c = [list, seed];
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c, GetRandomItem);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static GetRandomNumInRange(min, max, seed){
        let c = [min, max, seed];
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c, GetRandomNumInRange);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static GenerateRandomList(amount, min, max, seed){
        let c = [amount, min, max, seed];
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c, GenerateRandomList);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static RandSample(samplesize, population){
        let c = [samplesize, population]
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c,RandSample);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SystSample(samplesize, population){
        let c = [samplesize, population]
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c,SystSample);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SampleSize(confidenceInterval, width, percentage){
        let c = [confidenceInterval, width, percentage];
        if(!Empty(c)){
            return false;
        }
        let calculation = new Calculation(c,SampleSize);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

}
module.exports = Calculator;