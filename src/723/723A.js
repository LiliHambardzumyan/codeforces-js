(function () {
    const line = readline();
    const items = line.split(' ');

    var i;
    items.sort(function (x, y) {
        return x - y;
    });
    var middle = Number(items[1]);
    var result = 0;
    for (i = 0; i < 3; i++) {
        result += Math.abs(Number(items[i]) - middle);
    }

    print(result);
})();
