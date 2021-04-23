(function () {
    const count = readline();
    const _n = count.split(' ');

    var i;
    var j;
    var b = 0;
    var c = 0;
    for (i = 0; i < Number(_n[0]); i++) {
        var line = readline();
        var items = line.split(' ');
        for (j = 0; j < Number(_n[1]); j++) {
            if (items[j] === 'W' || items[j] === 'G' || items[j] === 'B') {
                b++;
            }
            if (items[j] === 'C' || items[j] === 'M' || items[j] === 'Y') {
                c++;
            }
        }
    }
    const result = c === 0 ? '#Black&White' : '#Color';

    print(result);
})();