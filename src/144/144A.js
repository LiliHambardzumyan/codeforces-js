(function () {
    const count = readline();
    const n = Number(count);
    const line = readline();
    const items = line.split(' ');
    var max = items[0];
    var maxindex = 0;
    var minindex = 0;
    var min = items[0];
    var i;
    for (i = 0; i < n; i++) {
        if (Number(items[i]) > max) {
            max = items[i];
            maxindex = i;
        }
        if (Number(items[i]) <= min) {
            min = items[i];
            minindex = i;
        }
    }
    var result = maxindex + ((n - 1) - minindex)
    if (minindex < maxindex) {
        result--;
    }
    print(result);
})();