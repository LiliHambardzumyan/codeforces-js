(function () {
    const line = readline();
    const items = line.split(' ');

    var i;
    var result = 0;
    for (i = 0; i < items.length - 1; i++) {
        if (items[i] === items[i + 1] || items[i] === items[i + 2] || items[i] === items[i + 3] || items[i] === items[i + 5]) {
            result += 1;
        }
    }

    print(result);
})();