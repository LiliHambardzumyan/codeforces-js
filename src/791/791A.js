(function () {
    const line = readline();
    const items = line.split(' ');

    var j = 0;
    while (Number(items[0]) <= Number(items[1])) {
        items[0] *= 3;
        items[1] *= 2;
        j++;
    }
    const result = j;

    print(result);
})();