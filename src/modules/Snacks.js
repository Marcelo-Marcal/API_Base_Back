const Sequelize = require("sequelize");
const db = require('../database/db');

const Snack = db.define('snacks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    snack: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING, // Assumi que 'image' é uma URL ou caminho para a imagem
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

// Se não existir a tabela:
// Snack.sync();

//Verifica se ha alguma diferença na tabela, e realiza a alteração
// Snack.sync({ alter: true });

module.exports = Snack;