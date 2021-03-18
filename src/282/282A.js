(function () {
    const count = readline();
    const _count = Number(count);

    var i;
    var result = 0;
    for (i = 0; i < _count; i++) {
        var line = readline();
        var items = line.split('');

        if (items[1] === '+') {
            result++;
        }
        if (items[1] === '-') {
            result--;
        }
    }

    print(result);
})();