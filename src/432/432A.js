(function () {
    const line1 = readline();
    const items1 = line1.split(' ');
    const line2 = readline();
    const items2 = line2.split(' ');

    var i;
    var n = 0;
    for (i = 0; i < Number(items1[0]); i++) {
        if (Number(items2[i]) + Number(items1[1]) <= 5) {
            n++;
        }
    }
    const result = Math.trunc(n / 3);

    print(result);
})();