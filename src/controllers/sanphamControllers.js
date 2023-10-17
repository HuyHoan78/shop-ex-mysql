// controllers/userController.js

const db = require('../connects'); // Import module kết nối cơ sở dữ liệu

// Hàm để lấy danh sách người dùng từ cơ sở dữ liệu
exports.getsanphamAll = (req, res) => {
    db.query('SELECT * FROM sanpham', (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else {
            res.status(200).json({ data: results });
        }
    });
};

exports.getsanphamById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM sanpham WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else if (results.length === 0) {
            res.status(404).send('Không tìm thấy sản phẩm');
        } else {
            res.json(results[0]);
        }
    });
};

// // Thêm một loại sản phẩm mới
exports.createsanpham = (req, res) => {
    const { MaLoai, TenSanPham, MoTaSanPham, AnhDaiDien, MaNSX, MaDonViTinh, GiaBan } = req.body;
    const createdAt = null;
    const updatedAt = null;

    db.query(
        'INSERT INTO sanpham (MaLoai, TenSanPham, MoTaSanPham, AnhDaiDien, MaNSX, MaDonViTinh, GiaBan, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)', [MaLoai, TenSanPham, MoTaSanPham, AnhDaiDien, MaNSX, MaDonViTinh, GiaBan, createdAt, updatedAt],
        (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
                res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
            } else {
                res.json({ id: results.insertId, message: ' Sản phẩm đã được thêm thành công' });
            }
        }
    );
};

// // Sửa thông tin một loại sản phẩm bằng ID
exports.updatesanpham = (req, res) => {
    const { id } = req.params;
    const { MaLoai, TenSanPham, MoTaSanPham, AnhDaiDien, MaNSX, MaDonViTinh, GiaBan } = req.body;
    const updatedAt = null;

    db.query(
        'UPDATE sanpham SET MaLoai = ?, TenSanPham = ?, MoTaSanPham = ?, AnhDaiDien = ?, MaNSX = ?, MaDonViTinh = ?, GiaBan = ? WHERE id = ?', [MaLoai, TenSanPham, MoTaSanPham, AnhDaiDien, MaNSX, MaDonViTinh, GiaBan, id],
        (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
                res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
            } else if (results.affectedRows === 0) {
                res.status(404).send('Không tìm thấy loại sản phẩm để cập nhật');
            } else {
                res.json({ message: ' Sản phẩm đã được cập nhật thành công' });
            }
        }
    );
};

// // Xóa một loại sản phẩm bằng ID
exports.deletesanpham = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM sanpham WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Không tìm thấy loại sản phẩm để xóa');
        } else {
            res.json({ message: ' sản phẩm đã được xóa thành công' });
        }
    });
};