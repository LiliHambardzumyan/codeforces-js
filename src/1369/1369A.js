(function () {
    const count = readline();
    const _n = Number(count);

    var i;
    for (i = 0; i < _n; i++) {
        var result = 'NO';
        var line = readline();
        var items = line.split(' ');
        if (Number(items[0]) % 4 === 0) {
            result = 'YES';
        }
        print(result);
    }
})();