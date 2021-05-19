(function () {
    const numbers = readline();
    const _numbers = numbers.split(' ');
    var n = Number(_numbers[0]);
    var m = Number(_numbers[1]);

    var i;
    var points = n * m;
    var min = Math.min(n, m);
    var result = 'Akshat';
    var akshat = 0;
    var malvika = 0;
    for (i = 1; i <= min; i++) {
        if (i % 2 === 1) {
            n--;
            m--;
            points = n * m;
            akshat++;

        }
        if (i % 2 === 0) {
            n--;
            m--;
            points = n * m;
            malvika++;
        }
    }
    if (malvika >= akshat) {
        result = 'Malvika';
    }

    print(result);
})();