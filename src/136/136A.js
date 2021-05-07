(function () {
    const count = readline();
    const n = Number(count);
    const line = readline();
    const items = line.split(' ');

    var i;
    var j;
    var array = [];
    for (i = 1; i <= n; i++) {
        for (j = 0; j < n; j++) {
            if (Number(items[j]) === i) {
                array.push(j + 1);
            }
        }
    }
    const result = array.join(' ');

    print(result);
})();