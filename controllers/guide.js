(function () {
    "use strict";

    exports.index = function (req, res) {
        return exports.GuideModel.find(function (err, guides) {
            if (!err) {
                return res.send(guides);
            } else {
                return err;
            }
        });
    };

    exports.create = function (request, response) {
        var guide;

        guide = new exports.GuideModel({
            river: request.body.river,
            grade: request.body.grade,
            description: request.body.description
        });
        guide.save(function (err) {
            if (!err) {
                return 'created!';
            } else {
                return console.log(err);
            }
        });
        return response.send(guide);
    };

    exports.show = function (request, res) {
        return exports.GuideModel.findOne({ river: request.params.river}, function (err, guide) {
            if (!err) {
                return res.send(guide);
            } else {
                return console.log(err);
            }
        });
    };

    exports.update = function (req, res) {
        return exports.GuideModel.findOne({ river: req.params.river}, function (err, guide) {
            guide.grade = req.body.grade;
            guide.description = req.body.description;
            return guide.save(function (err) {
                if (!err) {
                    console.log("updated!");
                } else {
                    console.log(err);
                }
                return res.send(guide);
            });
        });
    };

    exports.destroy = function (req, res) {
        return exports.GuideModel.findOne({ river: req.params.river}, function (err, guide) {
            return guide.remove(function (err) {
                if (!err) {
                    console.log("removed " + req.params.river);
                } else {
                    console.log(err);
                }
            });
        });
    };
}());
