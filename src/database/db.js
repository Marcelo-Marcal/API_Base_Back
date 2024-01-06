const Sequelize = require ("sequelize");

const sequelize = new Sequelize(
  'food',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate()
.then(function() {
  console.log("Conexão!");
}).catch(function() {
  console.log("Erro: Conexão não realizada!");
});

module.exports = sequelize;