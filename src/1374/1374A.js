(function () {
    const count = readline();
    const _n = Number(count);

    var i;
    for (i = 0; i < _n; i++) {
        var c = 0;
        var line = readline();
        var items = line.split(' ');
        c = Math.trunc((Number(items[2]) - Number(items[1])) / Number(items[0]));

        var result = c * Number(items[0]) + Number(items[1]);

        print(result);
    }
})();