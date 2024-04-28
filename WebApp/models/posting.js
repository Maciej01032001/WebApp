const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');


const Posting = sequelize.define('posting', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date_hour: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date_hour: {
        type: DataTypes.DATE,
        allowNull: false
    },
    max_value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    institution_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'past'),
        allowNull: false,
        defaultValue: 'active'
    }
}, {
    hooks: {
        beforeFind: async (options) => {
            const currentDate = new Date();
            await Posting.update({ status: 'past' }, {
                where: {
                    status: 'active',
                    end_date_hour: { [sequelize.Sequelize.Op.lt]: currentDate }
                },
                hooks: false
            });
        }
    }
});


module.exports = Posting;
