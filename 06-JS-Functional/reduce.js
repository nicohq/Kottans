function countWords(inputWords) {
    return inputWords.reduce(function(result, item) {
        result[item] = result[item] ? ++result[item] : 1;
        return result;
    }, {});
}

module.exports = countWords
