(function () {
    const line = readline();
    var i;
    var j;
    var array = [];
    array.push(line[1]);
    if(line.length < 3 ){
        array.length = 0;
    }
    for (i = 4; i < line.length; i += 3) {
        var n = 0;
        for (j = 0; j < array.length; j++) {
            if (line[i] !== array[j]) {
                n++;
            }
        }
        if (n === array.length) {
            array += line[i];
        }
    }
    const result = array.length;

    print(result);
})();