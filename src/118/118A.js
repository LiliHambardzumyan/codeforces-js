(function () {
    const line = readline();

    var lineLowercase = line.toLowerCase();
    const lineWithoutVowel = lineLowercase.replace(/[aeiouy]/g, '');

    const items = lineWithoutVowel.split('');
    const result = `.${items.join('.')}`;

    print(result);
})();