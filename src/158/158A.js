(function () {
    const count = readline();
    const inputs = count.split(' ');
    const _n = Number(inputs[0]);
    const _k = Number(inputs[1]);

    const line = readline();
    const values = line.split(' ');

    var i;
    var result = 0;
    const value = Number(values[_k - 1]);
    for (i = 0; i < _n; i++) {
        if (Number(values[i]) >= value && Number(values[i]) > 0) {
            result++;
        }

    }

    print(result);
})();