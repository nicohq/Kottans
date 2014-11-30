function curryN(fn, n) {
    if (typeof n !== 'number') n = fn.length;
    return function () {
        var args = Array.prototype.slice.call(arguments);
        if (n === 1) return fn.apply(null, args);
        return curryN(fn.bind(null, args[0]), --n);
    }
}

module.exports = curryN;
