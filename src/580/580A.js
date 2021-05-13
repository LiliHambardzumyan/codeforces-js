(function () {
    const count = readline();
    const n = Number(count);
    const line = readline();
    const items = line.split(' ');

    var i;
    var c = 1;
    var max = c;
    for (i = 0; i < n; i++) {
        if (Number(items[i]) <= Number(items[i + 1])) {
            c++;
            if (c > max) {
                max = c;
            }
        }
        if (Number(items[i]) > Number(items[i + 1])) {
            c = 1;
        }
    }

    print(max);
})();