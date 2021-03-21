(function () {
    const line = readline();
    const items = line.split('');

    var i;
    var j;
    var t;
    for (i = 0; i < items.length; i += 2) {
        for (j = i + 2; j < items.length; j += 2) {
            if (Number(items[i] > Number(items[j]))) {

                t = items[i];
                items[i] = items[j];
                items[j] = t;
            }
        }
    }
    const result = items.join('');

    print(result);
})();