(function () {
    const line = readline();
    const items = line.split(' ');

    var a;
    var i;
    var c = 0;
    var result = 0;
    a = 240 - Number(items[1]);
    for (i = 1; i <= Number(items[0]); i++) {
        if (c <= a) {
            c += i * 5;
            result++;
            if (c > a) {
                result--;
            }
        }
    }

    print(result);
})();
