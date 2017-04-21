var hooks = function () {

  this.Before(function (scenario) {
    var actualScenario = scenario;
    console.log("BeforeHook");
  });

  this.StepResult(function (event, callback) {
    console.log("StepResult");
    callback();
  });

  this.BeforeStep(function (step, callback) {
    console.log("BeforeStep");
    callback();
  });

  this.After(function *(scenario) {
    var actualScenario = scenario;
    console.log("AfterHook");
  });
};

module.exports = hooks;
