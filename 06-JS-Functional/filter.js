function getShortMessages(messages) {
    return messages.filter(function(item) {
        return item.message.length < 50;
    }).map(function(res) {
        return res.message;
    });
}

module.exports = getShortMessages
