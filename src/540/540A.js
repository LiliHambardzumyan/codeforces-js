(function () {
    const count = readline();
    const n = Number(count);
    const line1 = readline();
    const items1 = line1.split('');
    const line2 = readline();
    const items2 = line2.split('');

    var i;
    var result = 0;
    for (i = 0; i < n; i++) {
        if (Math.abs(items1[i] - items2[i]) >= 6) {
            result += 10 - (Math.abs(items1[i] - items2[i]));
        }
        if (Math.abs(items1[i] - items2[i]) < 6) {
            result += Math.abs(items1[i] - items2[i]);
        }
    }

    print(result)
})();