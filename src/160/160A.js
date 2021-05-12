(function () {
    const number = readline();
    const n = Number(number);
    const line = readline();
    const items = line.split(' ');
    items.sort(function (a, b) {
        return b - a;
    });
    var sum = 0;
    var result = 1;
    var i;
    var l = Number(items[0]);
    for (i = 1; i < n; i++) {
        sum += Number(items[i]);
    }
    if (l > sum) {
        result;
    }
    for (i = 1; i < n; i++) {
        if (l <= sum) {
            result += 1;
            l += Number(items[i]);
            sum -= Number(items[i]);
        }
        if (l > sum) {
            result;
        }
    }

    print(result);
})();