(function () {
    const number = readline();
    const _n = number.split(' ');
    const line = readline();
    const items = line.split(' ');
    const n = Number(_n[0]);
    const l = Number(_n[1]);

    items.sort(function sorted(a, b) {
        return a - b;
    });
    var i;
    var min = Number(items[n - 1]) - Number(items[0]);
    for (i = 1; i < l; i++) {
        if (Number(items[i + n - 1]) - Number(items[i]) < min) {
            min = Number(items[i + n - 1]) - Number(items[i]);
        }
    }
    const result = min;

    print(result);
})();