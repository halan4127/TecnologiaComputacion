/**
 * Este archivo centraliza funciones a las que todos los componentes deben/pueden acceder.
 */

const bcrypt = require("bcrypt");


const utils = {
  /**
   * ESTA FUNCION DE ENCARGA DE ENCRIPTAR UN STRING
   * @param (String) password
   * @returns (String) contraseña encriptada
   */
  hashPassword: (password) =>
    bcrypt.hashSync(password, parseInt(process.env.COST_FACTOR)),
};

module.exports = utils;
