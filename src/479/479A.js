(function () {
    var line1 = readline();
    var line2 = readline();
    var line3 = readline();
    var one = Number(line1);
    var two = Number(line2);
    var three = Number(line3);

    var a = one + two + three;
    var b = one * two * three;
    var c = one + two * three;
    var d = one * two + three;
    var e = (one + two) * three;
    var f = one * (two + three);

    const result = Math.max(a, b, c, d, e, f);

    print(result);
})();