(function () {
    var i;
    var j;
    var a;
    for (i = 0; i < 5; i++) {
        var line = readline();
        var items = line.split(' ');
        for (j = 0; j < 5; j++) {
            if (Number(items[j]) === 1) {
                a = [i, j];
            }
        }
    }
    const result = Math.abs(2 - Number(a[0])) + Math.abs(2 - Number(a[1]));

    print(result);
})();