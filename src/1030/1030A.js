(function () {
    const n = readline();
    const _n = Number(n);

    var i;
    var result = 'EASY';
    const line = readline();
    const items = line.split(' ');
    for (i = 0; i <= _n; i++) {
        if (Number(items[i]) === 1) {
            result = 'HARD';
        }
    }
    print(result);
})();