function Spy(target, method) {
    var obj = {count: 0},
        originFn = target[method];

    target[method] = function() {
        obj.count++;
        return originFn.apply(target, arguments);
    };

    return obj;
}

module.exports = Spy
