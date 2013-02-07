(function () {
    "use strict";

    var uuid = require('node-uuid');


    exports.index = function (req, res) {
        return exports.LogModel.find(function (err, logs) {
            if (!err) {
                return res.send(logs);
            } else {
                return err;
            }
        });
    };

    exports.create = function (req, res) {
        var log;

        log = new exports.LogModel({
            id: uuid.v4(),
            user: req.body.user,
            location: req.body.location,
            description: req.body.description
        });
        log.save(function (err) {
            if (!err) {
                return 'created!';
            } else {
                return console.log(err);
            }
        });
        return res.send(log);
    };

    exports.show = function (req, res) {
        return exports.LogModel.findOne({ id: req.params.id}, function (err, log) {
            if (!err) {
                return res.send(log);
            } else {
                return console.log(err);
            }
        });
    };

    exports.update = function (req, res) {
        return exports.LogModel.findOne({ id: req.params.id}, function (err, log) {
            log.description = req.body.description;
            return log.save(function (err) {
                if (!err) {
                    console.log("updated!");
                } else {
                    console.log(err);
                }
                return res.send(log);
            });
        });
    };

    exports.destroy = function (req, res) {
        return exports.LogModel.findOne({ id: req.params.id}, function (err, log) {
            return log.remove(function (err) {
                if (!err) {
                    console.log("removed " + req.params.id);
                } else {
                    console.log(err);
                }
            });
        });
    };
}());
