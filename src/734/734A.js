(function () {
    const n = readline();
    const _n = Number(n);

    var i;
    var a = 0;
    var d = 0;
    var result;
    const line = readline();
    const items = line.split('');
    for (i = 0; i < _n; i++) {
        if (items[i] === 'A') {
            a++;
        }
        if (items[i] === 'D') {
            d++;
        }
    }
    if (a > d) {
        result = 'Anton';
    }

    if (d > a) {
        result = 'Danik';
    }
    if (a === d) {
        result = 'Friendship';
    }

    print(result);
})();