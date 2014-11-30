function reduce(arr, fn, initial) {
    if (arr.length) return reduce(arr.slice(1), fn, fn(initial, arr[0]));

    return initial;
}

module.exports = reduce;
