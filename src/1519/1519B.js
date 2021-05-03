(function () {
    const count = readline();
    const n = Number(count);

    var i;
    for (i = 0; i < n; i++) {
        var line = readline();
        var items = line.split(' ');
        var x = Number(items[0]) - 1;
        var y = Number(items[1]) - 1;
        var j;
        var k;
        var c = 0;
        var result = 'No';
        for (j = 1; j <= x; j++) {
            c += 1;
        }
        for (k = 1; k <= y; k++) {
            c += Number(items[0]);
        }
        if (c === Number(items[2])) {
            result = 'Yes';
        }

        print(result);
    }
})();