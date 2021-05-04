const Dal = require("../UserDal");

/**
 * SIGNUP CREA UN NUEVO USUARIO
 * 
 * 
 */
const signUp = async (req, res) => {
  let response = {};
  let status = 500;
  let { email, password } = req.body;

  try {
    const result = await Dal.query(
      "INSERT INTO usuarios (email, password) VALUES (?, ?)",
      [email, password]
    );
    console.log("Result: ", result);
    response = {
      message: "REGISTRO DE USUARIO REALIZADO CORRECTAMENTE",
    };
    status = 200;
  } catch (error) {
    response = {
      message: error.message,
    };

    status = 500;
  }

  res.status(status).json(response);
};

module.exports = signUp;
