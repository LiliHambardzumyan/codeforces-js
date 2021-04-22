(function () {
    const count = readline();
    const _n = Number(count);
    const line = readline();
    const items = line.split(' ');

    var i;
    var result = 0;
    var p = 0;
    for (i = 0; i < _n; i++) {
        if (Number(items[i]) === -1 && p === 0) {
            result++;
        }
        if (Number(items[i]) !== -1) {
            p += Number(items[i]);
        }
        if (Number(items[i]) === -1 && p > 0) {
            p--;
        }
    }

    print(result);
})();
