(function () {
    const line = readline();
    const items = line.split('');
    const n = Number(line);

    var result = 'NO';
    var i;
    var c = 0;
    var k = 0;
    var array = [4, 7, 44, 47, 74, 77, 444, 447, , 474, 477, 744, 747, 774, 777];
    for (i = 0; i < items.length; i++) {
        if (Number(items[i]) === 4 || Number(items[i]) === 7) {
            c++;
        }
        if (c === items.length) {
            result = 'YES';
        }
        if (Number(items[i]) !== 4 || Number(items[i]) !== 7) {
            for (i = 0; i < array.length; i++) {
                if (n % array[i] === 0) {
                    result = 'YES';
                }
            }
        }
    }

    print(result);
})();
