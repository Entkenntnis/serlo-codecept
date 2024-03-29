const { setHeadlessWhen } = require("@codeceptjs/configure");
const secrets = require("./secrets");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://de.serlo-staging.dev",
      show: false,
      chromium: {
        args: ["--no-sandbox"],
      },
      basicAuth: { username: secrets.username, password: secrets.password },
    },
  },
  bootstrap: null,
  mocha: {},
  name: "serlo-codecept",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
