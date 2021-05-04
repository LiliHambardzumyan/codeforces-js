(function () {
    const line = readline();
    const items = line.split(' ');

    var i;
    var k = Number(items[1]);
    for (i = 0; i < k; i++) {
        var a = Number(items[0]) / 10;
        var b = a - Math.trunc(a);

        if (b === 0) {
            items[0] = a;
        }
        if (b > 0) {
            items[0] = Number(items[0]) - 1;
        }
    }
    const result = items[0];
    print(result);
})();