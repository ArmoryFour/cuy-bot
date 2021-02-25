const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index.ejs', { title: "Cuy", h1: "inicio crisvirgen"});
});

router.get('/comandos', (req, res) => {
	res.render('index', { title: "comandos", h1: "comandos crisvirgen"});
});

router.get('/contacto', (req, res) => {
	res.render('index', { title: "Contacto", h1: "contacto crisvirgen"});
});

module.exports = router;