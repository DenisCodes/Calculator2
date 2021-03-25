const GetRandomItem = require('../src/Operations/RandomGen/GetRandomItem.js')
const expect = require('expect');
test('GetRandomItem returns item from list', () => {
    let testList = ["bink", "bank", "bonk"];
    let result = GetRandomItem(testList);
    console.log(result);
    expect(testList.includes(result)).toBe(true);
});
test('GetRandomItem, seeded', () => {
    let testList = ["bink", "bank", "bonk"];
    let result1 = GetRandomItem(testList, "testseed");
    let result2 = GetRandomItem(testList, "testseed");
    let result3 = GetRandomItem(testList, "testseed");
    expect(result1==result2 && result2==result3).toBe(true);
});