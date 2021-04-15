(function () {
    const number = readline();
    var _n = Number(number);

    var result = 0;
    if (_n / 100) {
        result += Math.trunc(_n / 100);
        _n = _n - (Math.trunc(_n / 100) * 100);
    }
    if (_n / 20) {
        result += Math.trunc(_n / 20);
        _n = _n - (Math.trunc(_n / 20) * 20);
    }
    if (_n / 10) {
        result += Math.trunc(_n / 10);
        _n = _n - (Math.trunc(_n / 10) * 10);
    }
    if (_n / 5) {
        result += Math.trunc(_n / 5);
        _n = _n - (Math.trunc(_n / 5) * 5);
    }
    if (_n / 1) {
        result += Math.trunc(_n / 1);
        _n = _n - (Math.trunc(_n / 1) * 1);
    }

    print(result);
})();