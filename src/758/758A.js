(function () {
    const count = readline();
    const _n = Number(count);
    const line = readline();
    const items = line.split(' ');

    var i;
    var result = 0;
    items.sort(function (x, y) {
        return x - y;
    });
    for (i = 0; i < _n; i++) {
        result += Number(items[items.length - 1]) - Number(items[i]);
    }

    print(result);
})();