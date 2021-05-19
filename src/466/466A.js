(function () {
    const line = readline();
    const items = line.split(' ');
    const n = Number(items[0]);
    const m = Number(items[1]);
    const b = Number(items[3]);
    const a = Number(items[2]);
    var result;
    if (n <= m && n !== a) {
        result = b;
    }
    if (n <= m && n === a) {
        result = a;
    }
    if (n > m) {
        if (m * a < b) {
            result = n * a;
        }
        if (m * a >= b) {
            var k = n - (m * Math.trunc(n / m));
            if (a > b) {
                if (k * a < b) {
                    result = Math.trunc(n / m) * b + k * b;
                }
                if (k * a >= b) {
                    result = Math.trunc(n / m) * b + b;
                }
            }
            if (a <= b) {
                if (k * a < b) {
                    result = Math.trunc(n / m) * b + k * a;
                }
                if (k * a >= b) {
                    result = Math.trunc(n / m) * b + a;
                }
            }
        }
    }

    print(result);
})();