(function () {
    const line = readline();
    const items = line.split('');

    var i;
    var word = line.toLowerCase();
    var l = 0;
    var u = 0;
    for (i = 0; i < items.length; i++) {
        if (items[i] === items[i].toLowerCase()) {
            l++;
        }
        if (items[i] === items[i].toUpperCase()) {
            u++;
        }
    }

    items.join('');
    if (l < u) {
        word = line.toUpperCase();
    }
    const result = word;

    print(result);
})();