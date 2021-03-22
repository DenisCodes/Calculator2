function Mode(a) {
    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < a.length; i += 1) {
        number = a[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

module.exports = Mode;