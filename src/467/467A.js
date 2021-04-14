(function () {
    const n = readline();
    const _n = Number(n);

    var i;
    var c = 0;
    for (i = 0; i < _n; i++) {
        var line = readline();
        var items = line.split(' ');

        if (Number(items[0]) < Number(items[1] -1)) {
            c++;
        }
    }
    const result = c;

    print(result);
})();