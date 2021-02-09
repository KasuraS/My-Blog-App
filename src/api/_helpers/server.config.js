let config;

try {
  config = require("./local.server.config");
} catch (err) {
  config = {};
}

function e(param) {
  return process.env[param] || config[param] || "";
}

module.exports = {
  dbUser: e("dbUser"),
  dbPassword: e("dbPassword"),
  dbName: e("dbName"),
};
