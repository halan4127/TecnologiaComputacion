const express = require("express");
const cors = require("cors");
const Services = require("./Services/TaskServices");
const Database = require("../Database/Database");

const Task = express.Router();

Task.use(express.urlencoded({ extended: true }));
Task.use(express.json());
Task.use(cors());

Task.post("/agregar", (req, res) => {
  Services.agregar(req, res);
});

Task.post("/eliminar", (req, res) => {
  Services.eliminar(req, res);
});

Task.post("/actualizar", (req, res) => {
  Services.actualizar(req, res);
});

Task.post("/mostrar", async (req, res) => {
  try {
    const result = await Database.query(
      "SELECT id_tareas, titulo, descripcion, emocion, id_usuario FROM tareas"
    );
    res.status(200).json({
      message: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = Task;
