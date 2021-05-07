(function () {
    const count = readline();
    const n = Number(count);

    var i;
    var j;
    var k = 1;
    var line = readline();
    for (i = 2; i <= n; i++) {
        line += readline();
    }
    var items = line.split('');
    for (j = 0; j < items.length - 2; j += 2) {
        if (Number(items[j]) !== Number(items[j + 2])) {
            k += 1;
        }
    }
    const result = k;

    print(result);
})();