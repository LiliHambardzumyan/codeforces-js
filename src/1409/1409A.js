(function () {
    const count = readline();
    const _n = Number(count);

    var i;
    var c;
    for (i = 0; i < _n; i++) {
        var result = 0;
        var line = readline();
        var items = line.split(' ');
        c = Math.abs(Number(items[0]) - Number(items[1]));
        while (c >= 10) {
            result = Math.trunc(c / 10);
            c = c - result * 10;
        }
        if (c < 10 && c > 0) {
            result += 1;
        }
        print(result);
    }
})();
