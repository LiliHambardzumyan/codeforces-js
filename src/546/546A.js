(function () {
    const line = readline();
    const items = line.split(' ');


    var amount = ((Number(items[0]) + (Number(items[0]) * Number(items[2]))) / 2 * Number(items[2]));
    var result = amount - items[1];
    if (result <= 0) {
        result = 0;
    }

    print(result);
})();