require("dotenv").config()

const express = require("express");
const cors = require("cors");
const app = express();

const User = require('./src/modules/User');
const Snack = require('./src/modules/Snacks');

app.use(express.json());
app.use(cors());

app.get("/users", async (request, response) => {
    try {
      const Users = await User.findAll();
      return response.json({
        erro: false,
        Users
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

app.get("/snacks", async (request, response) => {  
  const { snack } = request.query;

  if (!snack) return response.status(400).send({ error: "Snack is required" });

  // SELECT * FROM Snack WHERE snack = 'drink'
  try {
    const snacks = await Snack.findAll({
      where: {
        snack: snack,
      },
    });

    return response.json({
      erro: false,
      snacks,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      erro: true,
      mensagem: "Erro ao buscar lanches no banco de dados",
    });
  }
});

app.listen(process.env.PORT, () => console.log('Server is running!'));
