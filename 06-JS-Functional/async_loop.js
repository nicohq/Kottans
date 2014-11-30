function loadUsers(userIds, load, done) {
    var users = [],
        max = userIds.length,
        count = 0;
    userIds.forEach(function(val, idx) {
        load(val, function(user) {
            users[idx] = user;
            if(++count === max) return done(users);
        });
    });
}

module.exports = loadUsers
