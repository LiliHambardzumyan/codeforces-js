(function () {
    const line = readline();
    const inputs = line.split(' ');
    const _m = Number(inputs[0]);
    const _n = Number(inputs[1]);

    const result = Math.floor((_n * _m) / 2);

    print(result);
})();