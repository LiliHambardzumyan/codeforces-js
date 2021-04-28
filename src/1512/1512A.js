(function () {
    const count = readline();
    const n = Number(count);

    var i;
    var j;
    for (i = 0; i < n; i++) {
        var result;
        var length = readline();
        var l = Number(length);
        var line = readline();
        var items = line.split(' ');
        for (j = 0; j < l - 2; j++) {
            if (Number(items[j]) !== Number(items[j + 1]) && Number(items[j]) !== Number(items[j + 2])) {
                result = j + 1;
            }
            if (Number(items[j]) === Number(items[j + 1]) && Number(items[j]) !== Number(items[j + 2])) {
                result = j + 3;
            }
            if (Number(items[j]) === Number(items[j + 2]) && Number(items[j]) !== Number(items[j + 1])) {
                result = j + 2;
            }
        }

        print(result);
    }
})();