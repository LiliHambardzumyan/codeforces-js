(function () {
    const line = readline();
    const items = line.split('');

    var i;
    var l = 'NO';
    for (i = 0; i < items.length; i++) {
        if (Number(items[i]) === Number(items[i + 1]) && Number(items[i]) === Number(items[i + 2]) && +
            +Number(items[i]) === Number(items[i + 3]) && Number(items[i]) === Number(items[i + 4]) && Number(items[i]) === Number(items[i + 5]) && +
            +Number(items[i]) === Number(items[i + 6])) {
            l = 'YES';
        }

        var result = l;
    }
    print(result);
})();