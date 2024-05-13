const express = require('express');
const router = express.Router();
const stripe = require('stripe')('pk_test_51NnLuCH3rI01iGYWcXufMwBsaB8bVZsEa3QtdfJoWHD48t6lc48V8JLS4fCISbupkZyOj9b1ppLuesq1eJMLuQ97007GhacRiq');

router.post('/', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});

module.exports = router;
