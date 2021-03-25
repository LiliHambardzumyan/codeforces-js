(function () {
    var i;
    var j = 0;
    var result = 'NO';
    var line1 = readline();
    var items1 = line1.split('');
    var line2 = readline();
    var items2 = line2.split('');

    for (i = 0; i < items1.length; i++) {
        if (items1[i] === items2[items2.length - i - 1]) {
            j++;
        }
    }
    if (j === items1.length) {
        result = 'YES';
    }

    print(result);
})();