(function () {
    const count = readline();
    const n = Number(count);

    var i;
    var result = 0;
    var a = 0;
    for (i = 0; i < n; i++) {
        var line = readline();
        var items = line.split(' ')
        a -= Number(items[0]);
        a += Number(items[1]);
        if (a > result) {
            result = a;
        }
    }

    print(result);
})();