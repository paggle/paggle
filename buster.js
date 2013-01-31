var config = module.exports;
var fs = require("fs");

config["Node tests"] = {

  //rootPath: "../",
  environment: "node", // browser or "node"
  libs: [],
  sources: [
    "app.js"
  ],
  tests: [
    "test/**/*.js"
  ]
};