const { User } = require('../models');

// creating user data
const userData = [
    {
        username: "bootcamper",
        email: "bootcamper@bootcamp.com",
        password: "SuperSecret"
    },
    {
        username: "newbieBlogger",
        email: "newbie@noobland.com",
        password: "123456"
    },
    {
        username: "bookwormProf",
        email: "teacher@school.com",
        password: "P@55w0rd"
    },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;