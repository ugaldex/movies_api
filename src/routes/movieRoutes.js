const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const auth = require('../middleware/authMiddleware');

router.use(auth);
router.get('/', movieController.list);
router.get('/:uuid', movieController.getById);
router.post('/', movieController.create);
router.put('/:uuid', movieController.update);
router.delete('/:uuid', movieController.delete);
router.post('/bulk-delete', movieController.bulkDelete);

module.exports = router;