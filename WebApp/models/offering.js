const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Offering = sequelize.define('offering', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    offering_user: {
        type: DataTypes.STRING,
        allowNull: false
    },

    offering_date_hour: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Offering;
