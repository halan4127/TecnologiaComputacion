const Dal = require("../TaskDal");

const eliminar = async (req, res) => {
  let response = {};
  let status = 500;

  let { id_tareas } = req.body;

  try {
    const result = await Dal.query(
      "DELETE FROM tareas WHERE id_tareas = ?",
      [id_tareas]
    );

    console.log("Result: ", result);

    response = {
      message: "TAREA ELIMINADA CORRECTAMENTE",
     
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

module.exports = eliminar;
