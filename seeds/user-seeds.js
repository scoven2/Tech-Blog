const { User } = require('../models');

const userData = [{
        username: 'Scott',
        password: 'these'
    },
    {
        username: 'Steve',
        password: 'are'
    },
    {
        username: 'Sarah',
        password: 'super'
    },
    {
        username: 'Jaime',
        password: 'secret'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;