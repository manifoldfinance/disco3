'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./disco3-design-system.cjs.prod.js");
} else {
  module.exports = require("./disco3-design-system.cjs.dev.js");
}
