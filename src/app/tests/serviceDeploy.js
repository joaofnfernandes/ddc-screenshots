module.exports = {
  "@disabled": true,
  after: client => {
    client
      //.saveScreenshot(screenshotName())
      .end();

  },
  "User deploys an Nginx service": client => {
    const loginPage = client.page.Login();
    const serviceListPage = client.page.ServiceList();
    const serviceCreatePage = client.page.ServiceCreate();

    // Login as admin
    loginPage
      .navigate()
      .waitForElementVisible("@title")
      .loginAsAdmin();

    client.pause(2000);

    // Go to Resources > Services
    serviceListPage
      .navigate()

    client
      .pause(2000)
      .saveScreenshot(`${process.env.SCREENSHOTS_PATH}/service-deploy-1.png`);

    serviceCreatePage
      .navigate()
      .waitForElementVisible("@title")
      .setValue("@serviceName", "nginx")
      .setValue("@imageName", "nginx:latest")
      .api.saveScreenshot(`${process.env.SCREENSHOTS_PATH}/service-deploy-2.png`);

    serviceCreatePage
      .click("@deployButton")

  },
};
