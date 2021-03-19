(function () {
    const line = readline();
    const items = line.split('');

    var i;
    var elements = {};
    for (i = 0; i < items.length; i++) {
        var value = items[i];
        elements[value] = true;
    }

    const count = Object.keys(elements).length;

    const result = (count % 2) === 0 ? 'CHAT WITH HER!' : 'IGNORE HIM!';

    print(result);
})();