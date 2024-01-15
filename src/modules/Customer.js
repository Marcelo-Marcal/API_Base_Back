const Sequelize = require("sequelize");
const db = require('../database/db');
const Order = require('./Order'); // Certifique-se de importar o modelo Order

const Customer = db.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complement: {
        type: Sequelize.STRING,
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
});

Customer.hasMany(Order, { foreignKey: 'customerId', as: 'orders' });

// Se não existir a tabela:
// Customer.sync();

// Verifica se há alguma diferença na tabela e realiza a alteração
// Customer.sync({ alter: true });

module.exports = Customer;