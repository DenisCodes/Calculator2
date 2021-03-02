const CSVRead = require('../src/CSV/Read');
const City = require('../src/models/City')
const expect = require('expect');
test('Can Read CSV File', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});
test('Count number of records', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});
test('Checks if values are correct', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    console.log(CSVRead.getRecords(filename, City));
    expect(records[0].id).toBe('1392685764');
});