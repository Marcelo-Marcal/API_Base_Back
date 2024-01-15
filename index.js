const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const helmet = require('helmet');


const User = require('./src/modules/User');
const Snack = require('./src/modules/Snacks');

dotenv.config();

app.use(express.json());
const port = process.env.PORT || 5000
app.use(cors());

app.get("/", (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).send({ error: "Message is required" });

  res.send({ message });
});

// Altere a rota no backend para '/snacks'
app.get("/snacks", async (request, response) => {  
  const { snack } = request.query;

  if (!snack) return response.status(400).send({ error: "Snack is required" });

  try {
    const snacks = await Snack.findAll({
      where: {
        snack: snack.toString(),
      },
    });

    response.send(snacks);

  } catch (error) {
    console.error("Error in /snacks route:", error);
    response.status(500).send({ error: "Internal Server Error" });
  }
});

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

// app.post("/cadastrar", async (request, response, next) => {
//     // console.log(request.body);
//     await User.create(request.body)
//     .then(() => {
//         return response.json({
//             erro: false,
//             mensagem: "Usuario Cadastrado!"
//         })
//     }).catch(() => {
//         return response.status(400).json({
//             erro: true,
//             mensagem: "Erro: Usuario Não Cadastrado!"
//         })
//     })
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// app.listen(process.env.PORT, () => console.log('Server is running!'));
