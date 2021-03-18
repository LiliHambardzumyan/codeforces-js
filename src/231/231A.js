(function () {
    const count = readline();
    const _count = Number(count);

    var i;
    var result = 0;
    for (i = 0; i < _count; i++) {
        var line = readline();
        var items = line.split(' ')

        var sum = Number(items[0]) + Number(items[1]) + Number(items[2]);

        if (sum >= 2) {
            result++
        }
    }

    print(result);
})();