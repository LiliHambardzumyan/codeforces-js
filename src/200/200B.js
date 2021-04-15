(function () {
    const count = readline();
    const _count = Number(count);

    const line = readline();
    const items = line.split(' ');

    var i;
    var sum = 0;
    for (i = 0; i < _count; i++) {
        sum += Number(items[i]);
    }
    const result = sum / _count;

    print(result);
})();