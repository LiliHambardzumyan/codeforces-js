(function () {
    const count = readline();
    const n = Number(count);

    var j;
    for (j = 0; j < n; j++) {
        var sum = 0;
        var result = 0;
        var c = 0;
        var length = readline();
        var l = Number(length);
        var line = readline();
        var items = line.split(' ');
        var i;
        for (i = 0; i < l; i++) {
            sum += Number(items[i]);
        }
        c = sum / l;
        result = Math.round(c);

        if (10 * (c - Math.trunc(c)) < 5 && 10 * (c - Math.trunc(c)) > 0) {
            result = Math.round(c) + 1;
        }

        print(result);
    }
})();