(function () {
    const number = readline();
    const n = Number(number);

    var i;
    for (i = 0; i < n; i++) {
        var result = 0;
        var line = readline();
        var items = line.split(' ');
        if (Number(items[0]) === 1 || Number(items[0] === 2)) {
            result += 1;
        }
        if ((Number(items[0]) - 2) % Number(items[1]) !== 0 && Number(items[0]) !== 1 && Number(items[0] !== 2)) {
            result += Math.trunc((Number(items[0]) - 2) / Number(items[1])) + 2;
        }
        if ((Number(items[0]) - 2) % Number(items[1]) === 0 && Number(items[0]) !== 1 && Number(items[0] !== 2)) {
            result += Math.trunc((Number(items[0]) - 2) / Number(items[1])) + 1;
        }

        print(result);
    }
})();