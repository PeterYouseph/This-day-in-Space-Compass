// routes/HomePageRoutes.js

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

// Rota para a página inicial
router.get('/', homeController.pictureDay);

module.exports = router;
