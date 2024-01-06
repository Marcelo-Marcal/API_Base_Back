const Sequelize = require ("sequelize");
const db = require('../database/db');

//Criar tabela
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Se não existir a tabela:
// User.sync();

//Verifica se ha alguma diferença na tabela, e realiza a alteração
//User.sync({ alter: true });

module.exports = User;