module.exports = {
  url: function() { return `${this.api.launchUrl}/#/deploy/wizard`; },
  commands: [ ],
  elements: {
    title: "h3.header > span.weak",
    titleText: "Deploy Service",
    serviceName: "input[name=serviceName]",
    imageName:  "input[name=imageName]",
    deployButton: "button.button.green",
  },
}
