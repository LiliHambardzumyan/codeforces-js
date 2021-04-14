(function () {
    const line = readline();
    const inputs = line.split(' ');
    const _n = inputs[0];
    const _h = inputs[1];

    const line1 = readline();
    const items = line1.split(' ');
    var i;
    var c = 0;
    for (i = 0; i < _n; i++) {
        if (Number(items[i]) > _h) {
            c += 2;
        }

        if (Number(items[i]) <= _h) {
            c += 1;
        }
    }
    const result = c;

    print(result);
})();