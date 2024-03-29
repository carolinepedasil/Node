import express from "express";
import livros from "../models/Livro.js";
import autores from "../models/Autor.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    });

    app.use(
        express.json(),
        livros,
        autores,
    );
}

export default routes;