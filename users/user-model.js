const db = require("../data/config")

function findPostByUserId (userId) {
    return db("posts as p")
		.innerJoin("users as u", "p.user_id", "u.id")
		.where("p.user_id", userId)
		.select ("p.id", "p.contents", "u.username")
}
module.exports = {
    findPostByUserId,
}