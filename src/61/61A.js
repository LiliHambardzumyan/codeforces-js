(function () {
    var first = readline();
    const items1 = first.split('');
    var second = readline();
    const items2 = second.split('');

    var i;
    var result = '';
    for (i = 0; i < 100; i++) {
        if (Number(items1[i]) === 0 && Number(items2[i]) === 0) {
            result += '0';
        }
        if (Number(items1[i]) === 1 && Number(items2[i]) === 1) {
            result += '0';
        }
        if (Number(items1[i]) === 0 && Number(items2[i]) === 1 || Number(items1[i]) === 1 && Number(items2[i]) === 0) {
            result += '1';
        }
    }

    print(result);
})();