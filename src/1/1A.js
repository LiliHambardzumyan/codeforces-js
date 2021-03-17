(function () {
    const line = readline();
    const inputs = line.split(' ');

    const n = Number(inputs[0]);
    const m = Number(inputs[1]);
    const a = Number(inputs[2]);

    const countHeight = n % a === 0 ? n / a : ((n / a) | 0) + 1;
    const countWidth = m % a === 0 ? m / a : ((m / a) | 0) + 1;

    const result = countHeight * countWidth;

    print(result);
})();
