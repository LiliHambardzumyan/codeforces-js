(function () {
    const count = readline();
    const _n = Number(count);

    var i;
    var c = [];
    for (i = 0; i < _n; i++) {
        var result = 'NO';
        var line = readline();
        var items = line.split(' ');

        if (Number(items[0]) === Number(items[2]) && Number(items[1]) < Number(items[2])) {
            result = 'YES';
            c = [items[0], items[1], (Number(items[0]) / Number(items[2]))];
        }
        if (Number(items[1]) === Number(items[2]) && Number(items[0]) < Number(items[1])) {
            result = 'YES';
            c = [items[0], (Number(items[1]) / Number(items[2])), items[2]];
        }
        if (Number(items[0]) === Number(items[1]) && Number(items[0]) > Number(items[2])) {
            result = 'YES';
            c = [(Number(items[0]) / Number(items[1])), items[1], items[2]];
        }
        if (Number(items[0]) === Number(items[1]) && Number(items[1]) === Number(items[2])) {
            result = 'YES';
            c = [items[0], items[1], items[2]];
        }

        if (result === 'YES') {

            print(result);
            print(c.join(' '));
        }
        if (result !== 'YES') {

            print(result);
        }
    }
})();