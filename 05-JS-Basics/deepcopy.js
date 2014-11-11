function deepCopy(obj) {
    var keys = Object.keys(obj),
        result = {};
    // Error while obj == string, number, bool, regexp, array...
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new Error('It\'s type isn\'t supported');
    }

    keys.forEach(function (key) {
        result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    });

    return result;
}