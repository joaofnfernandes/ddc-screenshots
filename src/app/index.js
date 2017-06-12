const nightwatch = require("nightwatch");

function validateEnvironment() {
  if (!process.env.SELENIUM_HOST) {
    throw new Error("Environment variable SELENIUM_HOST not defined");
  }
  // TODO: more validations
}

function runTests() {
  try {
    nightwatch.runner(
      {
        config: "./nightwatch.conf.js",
        verbose: process.env.SELENIUM_VERBOSE === "true",
        env: process.env.SELENIUM_BROWSERS,
        retries: process.env.SELENIUM_RETRIES,
      },
      success => {
        if(success) {
          console.log("Success!");
          process.exit(0);
        } else {
          console.error("Failure");
          process.exit("1");
        }
      }
    );
  } catch(err) {
    console.error(err);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await sleep(5000);
  validateEnvironment();
  runTests();
}

main();
