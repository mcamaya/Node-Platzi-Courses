const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    return res.json({
      limit,
      offset
    });
  }
  res.send('no hay query parameters')
})

module.exports = router;