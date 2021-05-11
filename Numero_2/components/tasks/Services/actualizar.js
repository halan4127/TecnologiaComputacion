const Dal = require("../TaskDal");

const actualizar = async (req, res) => {
  let response = {};
  let status = 500;

  let { titulo, descripcion, emocion, id_tareas } = req.body;

  try {
    const result = await Dal.query(
      "UPDATE tareas SET titulo = ?, descripcion = ?, emocion = ? WHERE id_tareas = ?",
      [titulo, descripcion, emocion, id_tareas]
    );

    console.log("Result: ", result);

    response = {
      message: "TAREA ACTUALIZADA CORRECTAMENTE",
      
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

module.exports = actualizar;
