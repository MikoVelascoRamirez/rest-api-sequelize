const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    'root',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;