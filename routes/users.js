const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/',  async (req, res, next) => {
  try {
    const count = await db.countAll()
    // mostra contagem de todos os usuarios dentro do banco
    res.render('users', { count })
  } catch (err) {
    next(err)
  }
});


module.exports = router;
