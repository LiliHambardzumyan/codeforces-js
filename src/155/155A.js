(function () {
    const count = readline();
    const _n = Number(count);
    const line = readline();
    const items = line.split(' ');

    var i;
    var b = Number(items[0]);
    var s = Number(items[0]);
    var result = 0;
    for (i = 0; i < _n; i++) {
        if (items[i] < s) {
            s = Number(items[i]);
            result++;
        }
        if (items[i] > b) {
            b = Number(items[i]);
            result++;
        }
    }

    print(result);
})();