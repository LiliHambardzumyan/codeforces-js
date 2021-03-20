(function () {
    const line = readline();
    const items = line.split('');

    items[0] = items[0].toUpperCase();

    print(items.join(''));
})();