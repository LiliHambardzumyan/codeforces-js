(function () {
    const line = readline();
    const items = line.split('');
    var upp = items.map(item => item.toUpperCase());
    var low = items.map(item => item.toLowerCase());

    var i;
    var result = items.join('');
    var c = 0;
    for (i = 0; i < items.length; i++) {
        if (items[i] === upp[i]) {
            c++;
        }
    }
    if (c === items.length) {
        result = low.join('');
    }
    if (items[0] !== upp[0] && c === items.length - 1) {
        low[0] = low[0].toUpperCase();
        result = low.join('');
    }

    print(result);
})();