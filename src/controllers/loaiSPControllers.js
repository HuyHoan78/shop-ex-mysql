// controllers/userController.js

const db = require('../connects'); // Import module kết nối cơ sở dữ liệu

// Hàm để lấy danh sách người dùng từ cơ sở dữ liệu
exports.getLoaiSPAll = (req, res) => {
    db.query('SELECT * FROM loaisp', (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else {
            res.status(200).json({ data: results });
        }
    });
};

exports.getLoaispById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM loaisp WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else if (results.length === 0) {
            res.status(404).send('Không tìm thấy loại sản phẩm');
        } else {
            res.json(results[0]);
        }
    });
};

// Thêm một loại sản phẩm mới
exports.createLoaisp = (req, res) => {
    const { TenLoai, TrangThai } = req.body;
    const createdAt = null;
    const updatedAt = null;

    db.query(
        'INSERT INTO loaisp (TenLoai, TrangThai, created_at, updated_at) VALUES (?, ?, ?, ?)', [TenLoai, TrangThai, createdAt, updatedAt],
        (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
                res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
            } else {
                res.json({ id: results.insertId, message: 'Loại sản phẩm đã được thêm thành công' });
            }
        }
    );
};

// Sửa thông tin một loại sản phẩm bằng ID
exports.updateLoaisp = (req, res) => {
    const { id } = req.params;
    const { TenLoai, TrangThai } = req.body;
    // const updatedAt = null;

    db.query(
        'UPDATE loaisp SET TenLoai = ?, TrangThai = ? WHERE id = ?', [TenLoai, TrangThai, id],
        (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
                res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
            } else if (results.affectedRows === 0) {
                res.status(404).send('Không tìm thấy loại sản phẩm để cập nhật');
            } else {
                res.json({ message: 'Loại sản phẩm đã được cập nhật thành công' });
            }
        }
    );
};

// Xóa một loại sản phẩm bằng ID
exports.deleteLoaisp = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM loaisp WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Không tìm thấy loại sản phẩm để xóa');
        } else {
            res.json({ message: 'Loại sản phẩm đã được xóa thành công' });
        }
    });
};