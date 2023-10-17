const sanphamController = require('../controllers/sanphamControllers');
const express = require('express');
const router = express.Router();

router.get('/sanpham', sanphamController.getsanphamAll);
router.get('/sanpham/:id', sanphamController.getsanphamById);
router.post('/sanpham', sanphamController.createsanpham);
router.post('/sanpham/update/:id', sanphamController.updatesanpham);
router.delete('/sanpham/delete/:id', sanphamController.deletesanpham);


module.exports = router;