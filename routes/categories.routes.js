const { Router } = require('express');
const router = Router();

router.get('/categories/:ctgId/products/:prdId', (req, res) => {
  const {ctgId, prdId} = req.params;
  res.json({
    ctgId,
    prdId
  })
})

module.exports = router;