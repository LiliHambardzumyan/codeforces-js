(function () {
    const count = readline();
    const n = Number(count);

    var i;
    for (i = 0; i < n; i++) {
        var line = readline();
        var items = line.split(' ');
        var result = (((23 - Number(items[0])) * 60) + (60 - Number(items[1])));

        print(result);
    }
})();