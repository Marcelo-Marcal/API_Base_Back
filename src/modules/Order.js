const Sequelize = require("sequelize");
const db = require('../database/db');
// const Customer = require('./Customer');
// const OrderItem = require('./OrderItem');

const Order = db.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING, // Ou Sequelize.ENUM('PENDING', 'PAID', 'CANCELED') se preferir ENUM
        defaultValue: 'PENDING'
    },
    total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    transactionId: {
        type: Sequelize.STRING,
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
    customerId: {
        type: Sequelize.INTEGER,
        references: {
            model: Customer,
            key: 'id'
        }
    },
});

// Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'orderItems' });

// Se não existir a tabela:
// Order.sync();

// Verifica se há alguma diferença na tabela e realiza a alteração
// Order.sync({ alter: true });

module.exports = Order;