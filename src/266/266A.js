(function () {
    const count = readline();
    const n = Number(count);

    const line = readline();
    const items = line.split('');

    var i;
    var result = 0;
    for (i = 0; i < n; i++) {
        if (items[i] === items[i + 1]) {
            result++;
        }
    }

    print(result);
})();