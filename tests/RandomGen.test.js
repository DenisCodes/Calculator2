const GetRandomItem = require('../src/Operations/RandomGen/GetRandomItem.js')
const SelectRandomly = require('../src/Operations/RandomGen/SelectRandomly.js')
const expect = require('expect');

test('GetRandomItem (unseeded) returns item from list', () => {
    let testList = ["bink", "bank", "bonk"];
    let result = GetRandomItem(testList);
    console.log(result);
    expect(testList.includes(result)).toBe(true);
});

test('GetRandomItem (seeded) returns same item', () => {
    let testList = ["bink", "bank", "bonk"];
    let result1 = GetRandomItem(testList, "testseed");
    let result2 = GetRandomItem(testList, "testseed");
    let result3 = GetRandomItem(testList, "testseed");
    expect(result1==result2 && result2==result3).toBe(true);
});

test('SelectRandomly returns N number of items', () => {
    let testList = [1, 2, 3, 4, 5, 6];
    let result = SelectRandomly(4, testList);
    expect(result.length).toBe(4);
});

test('SelectRandomly (unseeded) returns a list', () => {
    let testList = [1, 2, 3, 4, 5, 6];
    let result = SelectRandomly(3, testList);
    console.log(result)
    expect(result==undefined).toBe(false);
});

test('SelectRandomly (seeded) returns same lists', () => {
    let testList = [1, 2, 3, 4, 5, 6];
    let seed = "crumbcake";
    let result1 = SelectRandomly(3, testList, seed);
    let result2 = SelectRandomly(3, testList, seed);
    console.log("Result 1: " + result1);
    console.log("Result 2: " + result2);
    expect(result1[0]==result2[0] && result1[1]==result2[1] && result1[2]==result2[2]).toBe(true);
});