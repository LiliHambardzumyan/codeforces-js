(function () {
    const number = readline();
    const n = Number(number);

    var i;
    var m = 0;
    var e = 0;
    for (i = n; i >= 0; i -= 2) {
        if (i % 2 === 0) {
            m++;
        }
        if (i % 2 === 1) {
            e++;
        }
    }
    var result = m > e ? 'Mahmoud' : 'Ehab';
    if (n >= 1000000000) {
        result = NaN;
    }

    print(result);
})();