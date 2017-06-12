module.exports = {
  url: function() { return `${this.api.launchUrl}/#/login`; },
  commands: [ ],
  elements: {
    title:        "div.upload-section>p",
    titleText:    "Your system is unlicensed.",
    uploadButton: "input[type=file]",
    skipLink:     "a.ng-scope",
  },
}
