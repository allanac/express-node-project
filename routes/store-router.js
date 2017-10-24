const express = require('express');

const router = express.Router();


router.get('/shoppingcart', (req, res, next) => {
  res.render('cart-page.ejs');
});


module.exports = router;
