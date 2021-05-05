/**
 * INSTANCIA DE EXPRESS PARA LOS SERVICIOS DE USUARIO
 */

const express = require("express");
const cors = require("cors");
const Services = require("./Services/UserServices");

const User = express.Router();

User.use(express.urlencoded({ extended: true }));
User.use(express.json());
User.use(cors());

User.post("/sign-up", async (req, res) => {
  let { nombre_completo, email, password, edad } = req.body;
  const { status, response } = await Services.signUp(
    nombre_completo,
    email,
    password,
    edad
  );
  res.status(status).json(response);
});

User.post("/login", (req, res) => {

	let { email, password } = req.body;
  

});

module.exports = User;
