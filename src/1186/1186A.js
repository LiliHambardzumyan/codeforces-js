(function () {
    const line = readline();
    const items = line.split(' ');

    var a = Number(items[1]) / Number(items[0]);
    var b = Number(items[2]) / Number(items[0]);
    const result = a >= 1 && b >= 1 ? 'Yes' : 'No';

    print(result);
})();