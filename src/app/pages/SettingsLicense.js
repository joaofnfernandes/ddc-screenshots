var settingsCommands = {
  navigateAndWait: function() {
    return this.navigate()
                .waitForElementVisible("@titleElement")
                .assert.containsText("@titleElement", "@titleText");
  },
};


module.exports = {
  url: function() { return `${this.api.launchUrl}/#/settings/licensing`; },
  commands: [ settingsCommands ],
  elements: {
    title:          "h5.header",
    titleText:      "License",
    fileUpload:     "input[type=file]",
    uploadButton:   "div.ui.column",
  },
}
