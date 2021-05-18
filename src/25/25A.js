(function () {
    const count = readline();
    const n = Number(count);
    const line = readline();
    const items = line.split(' ');
    var odd = [];
    var even = [];
    var o = 0;
    var e = 0;
    var i;
    var result;
    for (i = 0; i < n; i++) {
        if (Number(items[i]) % 2 === 0) {
            even += items[i];
            e++;
        }
        if (Number(items[i]) % 2 === 1) {
            odd += items[i];
            o++;

        }
    }
    if (o === 1) {
        result = items.indexOf(odd) + 1;
    }
    if (e === 1) {
        result = items.indexOf(even) + 1;
    }

    print(result);
})();