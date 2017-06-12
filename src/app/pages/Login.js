var loginCommands = {
  _loginWithCredentials: function(username, password) {
    return this.waitForElementVisible("@title")
              .setValue("@usernameInput", username)
              .setValue("@passwordInput", password)
              .click("@loginButton");
  },
  navigateAndWait: function() {
    return  this.navigate()
                .waitForElementVisible("@title")
                .assert.containsText("@title", "Welcome to Universal Control Plane");
  },
  loginAsAdmin: function() {
    return this._loginWithCredentials(process.env.UCP_ADMIN_USERNAME,
                                      process.env.UCP_ADMIN_PASSWORD);
  }


};


module.exports = {
  url: function() { return `${this.api.launchUrl}`; },
  commands: [ loginCommands ],
  elements: {
    title:          "#login h1",
    usernameInput:  "input[type=text]",
    passwordInput:  "input[type=password]",
    loginButton:    "button#login-button",
  },
}
