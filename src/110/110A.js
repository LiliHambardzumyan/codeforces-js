(function () {
    const line = readline();
    const items = line.split('');

    var i;
    var c = 0;
    var result = 'NO';
    for (i = 0; i < items.length; i++) {
        if (Number(items[i]) === 4 || Number(items[i]) === 7) {
            c++;
        }
    }
    if (c === 4 || c === 7) {
        result = 'YES';
    }

    print(result);
})();