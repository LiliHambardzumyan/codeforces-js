(function () {
    const line = readline();
    var _count = Number(line);

    var i;
    var a = ' I hate ';
    var b = ' I love ';
    var result = '';
    for (i = 1; i <= _count; i++) {
        if (i % 2 !== 0 && i < _count) {
            result += a + 'that';
        }
        if (i % 2 === 0 && i < _count) {
            result += b + 'that';
        }
        if (i % 2 !== 0 && i === _count) {
            result += a + 'it';
        }
        if (i % 2 === 0 && i === _count) {
            result += b + 'it';
        }
    }

    print(result);
})();