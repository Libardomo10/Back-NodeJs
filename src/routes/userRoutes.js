// module.exports = function (app) {   
//     app.get('/', (req, res) => {
//         res.json([]);
//     })
// }

const UserModel = require('../models/user');

module.exports = app => {

    app.get('/users', (req, res) => {
        UserModel.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/users', (req, res) => {
        var userData = {
            Id: null,
            FirstName: req.body.FirstName,
            LastName: req.body.SecondName,
            Age: req.body.SecondName,
            phone: req.body.phone,
            address: req.body.Address
        };
        UserModel.insertUser(userData, (err, data) => {
            if (data && data.insertId) {
                res.status(200).json({
                    success: true,
                    msg: "Usuario insertado correctamente.",
                    data: data
                });
                // res.redirect('/users/' + data.insertId);
            } else {
                res.status(500).json({
                    success: false,
                    msg: "Usuario no insertado."
                });
            }
        });
    });

    app.put('/users/:id', (req, res) => {
        const userData = {
            idUser: req.body.IdUser,
            firstName: req.body.FirstName,
            secondName: req.body.SecondName,
            address: req.body.Address,
            phone: req.body.phone,
        };
        UserModel.updateUser(userData, function(err, data) {
            if (data && data.msg) {
                res.status(200).json({ data });
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                });
            }
        });
    });
}