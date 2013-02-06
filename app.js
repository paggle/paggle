(function () {
    "use strict";

    var application_root = __dirname,
        http = require('http'),
        express = require("express"),
        guide = require("./controllers/guide"),
        path = require("path"),
        mongoose = require('mongoose');

    var app = express();

// Database

    var Guide = new mongoose.Schema({
        river: { type: String, required: true },
        description: { type: String, required: true },
        grade: { type: Number, required: true, min: 1, max: 6 },
        modified: { type: Date, 'default': Date.now }
    });

    guide.GuideModel = mongoose.model('Guide', Guide);

// Config

    app.configure(function () {
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(path.join(application_root, "public")));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

// routes
    app.get('/ping', function (req, res) {
        res.send('pong');
    });

    app.get('/oyvind', function (req, res) {
        res.send('peter');
    });

    app.get('/guides', guide.index);
    app.post('/guides', guide.create);
    app.get('/guides/:river', guide.show);
    app.put('/guides/:river', guide.update);
    app.delete('/guides/:river', guide.destroy);


    module.exports = new function () {
        var server = http.createServer(app);
        this.port = 5000;
        this.dbName = 'guide';

        this.open = function (port) {
            this.port = process.env.PORT || port || this.port;
            mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/' + this.dbName);
            server.listen(this.port);
            console.log("Listening on port " + this.port);
        };

        this.close = function (callback) {
            mongoose.connection.close(function () {
                server.close(callback);
            });
        };

        this.emptyDb = function (callback) {
            mongoose.connection.collections.guides.drop(function (err) {
                if (err && err != 'MongoError: ns not found') {
                    console.log(err);
                }
                callback();
            });
        };
    }();
}());