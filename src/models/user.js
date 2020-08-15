const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM Usuario ORDER BY Id',
            (err, rows) => {
                if (err) {
                    throw err
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};

userModel.insertUser = (userData, callback) => {
    if (connection) {
        connection.query('INSERT INTO users SET ?', userData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, { 'insertId': result.insertId })
                }
            }
        )
    }
};

userModel.updateUser = (userData, callback) => {
    if (connection) {
        const sql = `
        UPDATE users SET
        FirstName = ${connection.escape(userData.firstName)},
        SecondName = ${connection.escape(userData.secondName)},
        Address = ${connection.escape(userData.address)},
        phone = ${connection.escape(userData.phone)}
        WHERE IdUser = ${userData.idUser}`;

        connection.query(sql, function(err, result) {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "success"
                })
            }
        });
    }
};

module.exports = userModel;