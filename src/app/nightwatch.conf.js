module.exports = {
  src_folders: [ "./tests" ],
  output_folder: "./reports",
  live_output: true,
  parallel_process_delay: 1500,
  page_objects_path: "./pages",
  custom_commands_path: "./commands",
  test_settings: {
    default: {
      launch_url: process.env.UCP_URL,
      selenium_host: process.env.SELENIUM_HOST,
      selenium_port: process.env.SELENIUM_PORT,
      silent: true,
      screenshots: { enabled: true, on_failure: true, on_error: false, path: process.env.SCREENSHOTS_PATH },
      globals: { waitForConditionTimeout: 10000 },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: { args: [ "disable-web-security", "start-maximized" ] },
      },
    },
  },
};
