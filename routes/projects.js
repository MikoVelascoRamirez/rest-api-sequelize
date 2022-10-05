const express = require('express');

const router = express.Router();

router.get('/');
router.post('/');
router.put('/:id');
router.delete('/:id');
router.get('/:id');

module.exports = router;