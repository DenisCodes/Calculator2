const GetRandomItem = require('../src/Operations/RandomGen/GetRandomItem.js')
const expect = require('expect');
test('GetRandomItem returns item from list', () => {
    let testList = ["bink", "bank", "bonk"];
    let result = GetRandomItem(testList);
    console.log(result);
    expect(testList.includes(result)).toBe(true);
});