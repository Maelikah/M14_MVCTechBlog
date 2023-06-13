const { User } = require('../models');

// creating user data
const userData = [
    {
        userName: "bootcamper",
        email: "bootcamper@bootcamp.com",
        password: "SuperSecret"
    },
    {
        userName: "newbieBlogger",
        email: "newbie@noobland.com",
        password: "123456"
    },
    {
        userName: "bookwormProf",
        email: "teacher@school.com",
        password: "P@55w0rd"
    },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;