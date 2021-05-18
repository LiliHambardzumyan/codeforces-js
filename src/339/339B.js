(function () {
    const number = readline();
    const _numbers = number.split(' ');
    const n = _numbers[0];
    const count = _numbers[1];
    const line = readline();
    const items = line.split(' ');
    var i;
    var c = 1;
    var result = 0;
    for (i = 0; i < count; i++) {
        result += Math.abs(Number(items[i]) - c);
        c = Number(items[i]);
        if (Number(items[i]) > Number(items[i + 1])) {
            result += n - (Number(items[i]) - 1);
            c = 1;
        }
    }

    print(result);
})();