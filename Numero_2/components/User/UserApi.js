/**
 * INSTANCIA DE EXPRESS PARA LOS SERVICIOS DE USUARIO
 */


const express = require("express");
const cors = require("cors");
const Dal = require("./UserDal");

const User = express.Router();

User.use(express.urlencoded({ extended: true }));
User.use(express.json());
User.use(cors());

User.post("/sign-up", (req, res) => {

  Services.signUp(req, res);

});

module.exports = User;
