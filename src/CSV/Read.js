const file = require('../fileOps/File');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const options = {
    columns: true,
    delimiter: ',',
    trim: true,
    skip_empty_lines: true
};
class Read {
    static getRecords(name, model) {
        let absolutePath = file.getAbsolutePath(name);
        let content = fs.readFileSync(absolutePath);
        const records = parse(content, options)
        let list = Array();
        records.forEach(function (data) {
            list.push(model.create(data));
        })
        return list;
    }
}
module.exports = Read;