'use strict';

function deepCopy(obj) {
    //If obj = Array
    if(obj instanceof Array) return obj.slice();

    // If obj = string, number, bool, regexp, date...
    if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;

    var keys = Object.keys(obj),
        result = {};
    keys.forEach(function(key) {
        result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    });
    return result;
}
