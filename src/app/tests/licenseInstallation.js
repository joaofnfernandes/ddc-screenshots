/* var screenshotName = (function(){
  var i = 0;
  return function() {
    return `${process.env.SCREENSHOTS_PATH}/license-your-installation-${i++}.png`;
  }
})();
*/

module.exports = {
  after: client => {
    client
      //.saveScreenshot(screenshotName())
      .end();

  },
  "Admin user licenses their deployment": client => {
    const loginPage = client.page.Login();
    const loginUnlicensedPage = client.page.LoginUnlicensed();
    const licensePage = client.page.SettingsLicense();

    // Login as admin
    loginPage
      .navigate()
      .waitForElementVisible("@title")
      .api.saveScreenshot(`${process.env.SCREENSHOTS_PATH}/login.png`);

      loginPage.loginAsAdmin();

    // You'll see the licensing screen
    loginUnlicensedPage
      .waitForElementVisible("@title");

    // Go to Settings > Licensing
    licensePage
      .navigate()
      .waitForElementVisible("@title");

    client.saveScreenshot(`${process.env.SCREENSHOTS_PATH}/settings-2.png`);
  },
};
