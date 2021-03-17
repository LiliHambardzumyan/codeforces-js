(function () {
    const weight = readline();
    const _weight = Number(weight)

    const result = _weight % 2 === 1 || _weight === 2 ? 'NO' : 'YES';

    print(result);
})();
