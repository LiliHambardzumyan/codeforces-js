(function () {
    const n = readline();
    const _n = Number(n);

    var i;
    var j;
    var sumx = 0;
    var sumy = 0;
    var sumz = 0;
    var result = 'NO';
    for (i = 0; i < _n; i++) {
        var line = readline();
        var items = line.split(' ');
        for (j = 0; j < 3; j++) {
            sumx += Number(items[0]);
            sumy += Number(items[1]);
            sumz += Number(items[2]);
        }
    }
    if (sumx === 0 && sumy === 0 && sumz === 0) {
        result = 'YES';
    }
    print(result);
})();