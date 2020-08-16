const mysql = require('mysql');

connection = mysql.createConnection({
    host: '192.168.99.100',
    port: '3306',
    user: 'mysql',
    password: 'root',
    database: 'Db_locations'
});

let locationModel = {};

locationModel.getLocation = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM locationTable ORDER BY Id',
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

locationModel.insertLocation = (locationData, callback) => {
    if (connection) {
        connection.query('INSERT INTO locationTable SET ?', locationData,
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

locationModel.updateLocation = (locationData, callback) => {
    if (connection) {
        const sql = `
        UPDATE locationTable SET
        nameLocation = ${connection.escape(locationData.nameLocation)},
        area_m2 = ${connection.escape(locationData.area_m2)},
        idInternalLocation = ${connection.escape(locationData.idInternalLocation)}
        WHERE id = ${locationData.id}`;

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
locationModel.deleteLocation = (locationData, callback) => {
    if (connection) {
        const sql = `
        DELETE FROM locationTable
        WHERE id = ${locationData.id}`;

        connection.query(sql, function(err, result) {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "Eliminado correctamente",
                    "code": 1
                })
            }
        });
    }
};

module.exports = locationModel;