const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        DdefaultValue: false
    }
},
{
    tableName: 'Tasks',
    timestamps: true
});

module.exports = Task;