const { hashPassword } = require("../../../libs/utils");
const Dal = require("../UserDal");

/**
 * SIGNUP CREA UN NUEVO USUARIO
 *
 *
 */
const signUp = async (req, res) => {
  let response = {};
  let status = 500;
  let { nombre_completo, email, password, edad } = req.body;

  //BUSCA USUARIOS DUPLICADOS
  let duplicateUsers = null;
  try {
    duplicateUsers = await Dal.query(
      "SELECT email FROM usuarios WHERE email = ?",
      [email]
    );
  } catch (error) {
    response = {
      message: "Ha ocurrido un error al registrar al usuario",
      data: null,
    };
    status = 500;
  }

  //INSERTAR USUARIOS SI NO EXISTE
  if (duplicateUsers) {
    try {
      const result = await Dal.query(
        "INSERT INTO usuarios (nombre_completo, email, password, edad) VALUES (?, ?, ?, ?)",
        [nombre_completo, email, hashPassword(password), edad]
      );
      console.log("Result: ", result);
      response = {
        message: "REGISTRO DE USUARIO REALIZADO CORRECTAMENTE",
        data: {
          id: result.insertId,
          nombre: nombre_completo,
          email: email,
          edad: edad,
          token: "Se supone que es u token",
        },
      };
      status = 200;
    } catch (error) {
      response = {
        message: error.message,
        data: null,
      };

      status = 500;
    }
  }

  res.status(status).json(response);
};

module.exports = signUp;
