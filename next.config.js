const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    SENTRY_DSN: "",
  },

});
