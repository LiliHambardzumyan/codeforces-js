(function () {
    const line = readline();
    const items = line.split(' ');

    var sum1 = 2 * Number(items[0]) + 2 * Number(items[1]);
    var sum2 = Number(items[0]) + Number(items[1]) + Number(items[2]);
    var sum3 = 2 * Number(items[0]) + 2 * Number(items[2]);
    var sum4 = 2 * Number(items[1]) + 2 * Number(items[2]);
   var a = Math.min(sum1,sum2);
   var b = Math.min(sum3,sum4);

   const result = Math.min(a,b);
    print(result);
})();