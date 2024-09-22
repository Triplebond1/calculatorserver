const express = require('express');
const router = express.Router();
const {addition, 
      subtraction,
       multiplication,
      division} 
      = require('../controllers/v1/calculator_controller');


router.post('/api/calculator/addition', addition);

router.post('/api/calculator/subtraction', subtraction);

router.post('/api/calculator/multiplication', multiplication);

router.post('/api/calculator/division', division);

module.exports = router


