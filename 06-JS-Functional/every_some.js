function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return submittedUsers.every(function(userSub) {
            return goodUsers.some(function(user) {
                return user.id === userSub.id;
            });
        });
    };
}

module.exports = checkUsersValid
