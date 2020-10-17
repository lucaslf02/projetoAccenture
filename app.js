/*importando modulos*/
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

/*importando rotas*/

import {decodeRouter} from "./routes/decodeRouter.js"

const app = express();


/*define o dominio de origem para consumo da API*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors()
);

/*Definindo rotas*/ 
app.use(decodeRouter);

/*Routa para validação da api*/
app.get('/', (req, res) => {
  res.send('API em execucao');
});

/*Iniciando Servidor*/ 
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor em execucao na porta ${process.env.PORT || 3000}`);
});
