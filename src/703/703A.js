(function () {
    const count = readline();
    const _n = Number(count);

    var i;
    var m = 0;
    var c = 0;
    for (i = 0; i < _n; i++) {
        var line = readline();
        var items = line.split(' ');
        if (items[0] > items[1]) {
            m++;
        }
        if (items[0] < items[1]) {
            c++;
        }
        if (items[0] === items[1]) {
            m++;
            c++;
        }
    }

    const result = m < c ? 'Chris' : m > c ? 'Mishka' : 'Friendship is magic!^^';

    print(result);
})();