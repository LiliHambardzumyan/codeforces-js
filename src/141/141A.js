(function () {
    const line1 = readline();
    const line2 = readline();
    const line3 = readline();

    const line = line1 + line2;
    const items1 = line.split('').sort();
    const items2 = line3.split('').sort();
    var result = 'NO';
    var i;
    var c = 0;
    for (i = 0; i < items1.length; i++) {
        if (items1[i] === items2[i]) {
            c++;
        }
    }
    if (c === items2.length && c === items1.length) {
        result = 'YES';
    }

    print(result);
})();