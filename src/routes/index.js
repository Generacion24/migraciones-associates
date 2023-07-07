const express = require('express');
const routerMovie = require('./movie.router');
const routerStudio = require('./studio.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/movies',routerMovie)
router.use('/studios', routerStudio)

module.exports = router;
