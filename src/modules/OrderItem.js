const Sequelize = require("sequelize");
const db = require('../database/db');
const Order = require('./Order'); // Certifique-se de importar o modelo Order
const Snack = require('./Snack'); // Certifique-se de importar o modelo Snack

const OrderItem = db.define('orderItems', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    subTotal: {
        type: Sequelize.DECIMAL(10, 2),
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
    orderId: {
        type: Sequelize.INTEGER,
        references: {
            model: Order,
            key: 'id'
        }
    },
    snackId: {
        type: Sequelize.INTEGER,
        references: {
            model: Snack,
            key: 'id'
        }
    },
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
OrderItem.belongsTo(Snack, { foreignKey: 'snackId', as: 'snack' });

// Se não existir a tabela:
// OrderItem.sync();

// Verifica se há alguma diferença na tabela e realiza a alteração
// OrderItem.sync({ alter: true });

module.exports = OrderItem;


// Defina a relação de pertencimento a Order
// OrderItem.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

// Defina a relação de pertencimento a Snack
// OrderItem.belongsTo(Snack, { foreignKey: 'snackId', as: 'snack' });

// Defina a relação de um para muitos com Order
// Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'orderItems' });

// Defina a relação de um para muitos com Snack
// Snack.hasMany(OrderItem, { foreignKey: 'snackId', as: 'orderItems' });