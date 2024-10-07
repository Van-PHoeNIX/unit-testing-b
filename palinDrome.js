function palinDrome(x) {
   
    if (typeof x !== 'number') {
        return 'Invalid Input';
    }

    if (x < 0) {
        return false;
    }

    const str = x.toString();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

module.exports = palinDrome;