(function () {
  "use strict";

  var buster = require("buster");
  var request = require("request");
  buster.spec.expose();

  buster.testCase("Guide", {
    setUp: function () {
      this.app = require("../app");
      this.app.dbName = 'bustertest';
      this.app.open(5050);
    },

    tearDown: function (done) {
      var self = this;
      this.app.emptyDb(function () {
        self.app.close(function () {
          done();
        });
      });
    },

    "Is website up?": function (done) {
      request.get("http://localhost:5050/ping", function (err, res, body) {
        assert.equals(body, "pong");
        done();
      });
    },

    "Should not contain any guides": function (done) {
      request.get("http://localhost:5050/guides", function (err, res, body) {
        var object = JSON.parse(body);
        assert.equals(object.length, 0);
        done();
      });
    },

    "create guide and fetch it": function (done) {
      request.post({
        uri: "http://localhost:5050/guides",
        json: {river: "bua", grade: 3, description: "Ei elv"}}, function (err, res, body) {
        request.get("http://localhost:5050/guides", function (err, res, body) {
          var object = JSON.parse(body);
          assert.equals(object.length, 1);
          assert.equals(object[0].river, "bua");
          assert.equals(object[0].grade, 3);
          assert.equals(object[0].description, "Ei elv");
          done();
        });
      });
    }
  });
}());