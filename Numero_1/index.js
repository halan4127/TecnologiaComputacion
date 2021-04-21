const express = require("express");
const cors = require("cors");
const { query } = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/suma', (req, res) => {


    let status = 200;

    let response = "";

    if (!req.query.number1 || !req.query.number2) {

        status = 400;

        response = "EXISTE UN ERROR EN LOS DATOS";

    } else {

        try {

            response = parseInt(req.query.number1) + parseInt(req.query.number2);

        } catch (error) {

        }

    }

    res.status(status).json({
        Result: response
    });


});

app.get('/resta', (req, res) => {


    let status = 200;

    let response = "";

    if (!req.query.number1 || !req.query.number2) {

        status = 400;

        response = "EXISTE UN ERROR EN LOS DATOS";

    } else {

        try {

            response = parseInt(req.query.number1) - parseInt(req.query.number2);

        } catch (error) {

        }

    }

    res.status(status).json({
        Result: response
    });


});

app.get('/multiplicacion', (req, res) => {


    let status = 200;

    let response = "";

    if (!req.query.number1 || !req.query.number2) {

        status = 400;

        response = "EXISTE UN ERROR EN LOS DATOS";

    } else {

        try {

            response = parseInt(req.query.number1) * parseInt(req.query.number2);

        } catch (error) {

        }



    }

    res.status(status).json({
        Result: response
    });


});

app.get('/division', (req, res) => {


    let status = 200;

    let response = "";

    if (!req.query.number1 || !req.query.number2) {

        status = 400;

        response = "EXISTE UN ERROR EN LOS DATOS";

    } else {

        try {

            response = parseInt(req.query.number1) / parseInt(req.query.number2);

        } catch (error) {

        }

    }

    res.status(status).json({
        Result: response
    });


});

app.listen(3000, () => {

    console.clear;
    console.log("SERVIDOR CORRIENDO EN EL PUERTO 3000")

});