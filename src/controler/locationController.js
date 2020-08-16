// module.exports = function (app) {   
//     app.get('/', (req, res) => {
//         res.json([]);
//     })
// }

const locationModel = require('../models/location');

module.exports = app => {

    app.get('/locationsList', (req, res) => {
        locationModel.getLocation((err, data) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.status(200).json(data);
        });
    });

    app.post('/insertLocation', (req, res) => {
        var locationData = {
            id: null,
            nameLocation: req.body.nameLocation,
            area_m2: req.body.area_m2,
            idInternalLocation: req.body.idInternalLocation
        };
        locationModel.insertLocation(locationData, (err, data) => {
            if (data && data.insertId) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(200).json({
                    success: true,
                    msg: "Usuario insertado correctamente.",
                    data: data
                });
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(500).json({
                    success: false,
                    msg: "Usuario no insertado."
                });
            }
        });
    });

    app.put('/location/:id', (req, res) => {
        var locationData = {
            id: req.body.id,
            nameLocation: req.body.nameLocation,
            area_m2: req.body.area_m2,
            idInternalLocation: req.body.idInternalLocation
        };
        locationModel.updateLocation(locationData, function (err, data) {
            if (data && data.msg) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(200).json({ data });
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                });
            }
        });
    });

    app.delete('/location/:id', (req, res) => {
        var locationData = {
            id: req.body.id
        };
        locationModel.deleteLocation(locationData, function (err, data) {
            if (data && data.msg) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(200).json({ data });
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                response.setHeader('Content-Type', 'application/json');
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                });
            }
        });
    });
}