var server = require("../app");
process.env.NODE_ENV = 'production';
server.open(5000);