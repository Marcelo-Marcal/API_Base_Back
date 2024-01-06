require("dotenv").config()

const express = require("express");
const app = express();

const User = require('./src/modules/User');

app.use(express.json());

app.get("/users", async (request, response) => {
    try {
      const users = await User.findAll();
      return response.json({
        erro: false,
        users
      });
    } catch (error) {
      return response.status(500).json({
        erro: true,
        mensagem: "Erro ao buscar usuários no banco de dados"
      });
    }
  });

app.post("/cadastrar", async (request, response, next) => {
    // console.log(request.body);
    await User.create(request.body)
    .then(() => {
        return response.json({
            erro: false,
            mensagem: "Usuario Cadastrado!"
        })
    }).catch(() => {
        return response.status(400).json({
            erro: true,
            mensagem: "Erro: Usuario Não Cadastrado!"
        })
    })
})

app.listen(process.env.PORT, () => console.log('Server is running!'));