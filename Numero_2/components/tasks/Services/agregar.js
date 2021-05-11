const Dal = require("../TaskDal");

const agregar = async (req, res) => {
  let response = {};
  let status = 500;

  let { titulo, descripcion, emocion, id_usuario } = req.body;

  try {
    const result = await Dal.query(
      "INSERT INTO tareas (titulo, descripcion, emocion, id_usuario) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, emocion, id_usuario]
    );

    console.log("Result: ", result);

    response = {
      message: "TAREA AGREGADA CORRECTAMENTE",
      data: {
        id: result.insertId,
        titulo: titulo,
        descripcion: descripcion,
        emocion: emocion,
        id_usuario: id_usuario,
      },
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

module.exports = agregar;
