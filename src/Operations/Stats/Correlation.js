function Correlation(c) {
    var a = c[0];
    var b = c[1];
    var ab = [];
    var a2 = [];
    var b2 = [];

    for (var i = 0; i < a.length; i++) {
        ab.push(a[i] * b[i]);
        a2.push(a[i] * a[i]);
        b2.push(b[i] * b[i]);
    }

    var sum_a = 0;
    var sum_b = 0;
    var sum_ab = 0;
    var sum_a2 = 0;
    var sum_b2 = 0;

    for (var i = 0; i < a.length; i++) {
        sum_a += a[i];
        sum_b += b[i];
        sum_ab += ab[i];
        sum_a2 += a2[i];
        sum_b2 += b2[i];
    }
    var step1 = (a.length * sum_ab) - (sum_a * sum_b);
    var step2 = (a.length * sum_a2) - (sum_a * sum_a);
    var step3 = (a.length * sum_b2) - (sum_b * sum_b);
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;
    return answer
}
module.exports = Correlation;