var myStepDefinitionsWrapper = function () {

  this.Then(/^step of simple scenario (\d+)$/, function (stepNumber) {
    console.log("Simple scenario step " + stepNumber);
  });

  this.Then(/^step of simple scenario outline (.+)$/, function (stepMsg) {
    console.log("Simple scenario outline step " + stepMsg);
  });

};

module.exports = myStepDefinitionsWrapper;
