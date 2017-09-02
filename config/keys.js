// keys.js - determine credentials

if (process.env.NODE_ENV === "production") {
  // return PROD keys
  module.exports = require("./prod");
} else {
  // return DEV keys
  module.exports = require("./dev");
}
