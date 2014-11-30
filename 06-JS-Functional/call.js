function duckCount() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(result, src) {
        result = src.hasOwnProperty('quack') ? ++result : result;
        return result;
    }, 0);
}

module.exports = duckCount
