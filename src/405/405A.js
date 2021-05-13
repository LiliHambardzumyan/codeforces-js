(function () {
    const count = readline();
    const n = Number(count);
    const line = readline();
    const items = line.split(' ');

    items.sort(function (a, b) {
        return a - b;
    });

    const result = items.join(' ');

    print(result);
})();