(function () {
    const count = readline();
    const _count = Number(count);

    var i;
    for (i = 0; i < _count; i++) {
        var line = readline();

        var f = line[0];
        var l = line[line.length - 1];
        var result = line.length > 10 ? f + (line.length - 2) + l : line;

        print(result);
    }
})();