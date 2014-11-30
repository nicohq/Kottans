function repeat(operation, num) {
    if (num) {
        operation();
        return repeat(operation, --num);
    }
}

module.exports = repeat;
