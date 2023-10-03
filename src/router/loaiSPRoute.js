const loaiSPController = require('../controllers/loaiSPControllers');
const express = require('express');
const router = express.Router();

router.get('/loaisp', loaiSPController.getLoaiSPAll);
router.get('/loaisp/:id', loaiSPController.getLoaispById);
router.post('/loaisp', loaiSPController.createLoaisp);
router.post('/loaisp/update/:id', loaiSPController.updateLoaisp);
router.delete('/loaisp/delete/:id', loaiSPController.deleteLoaisp);

module.exports = router;