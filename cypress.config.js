const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // -----config part-------
      // dynamic path to settings
      const settings = require(`./settings/${config.env.envName.toLowerCase()}.settings.json`);

      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }

      if (settings.specPattern) {
        config.specPattern = settings.specPattern;
      }

      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };

        config.env.login = process.env[`${settings.env.login}`];
        config.env.password = process.env[`${settings.env.password}`];
      }
      // -----config part-------

      return config;
    },
  },
});
