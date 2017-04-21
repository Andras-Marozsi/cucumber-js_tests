Cucumber-Js Tests
=================

A very simple repository with the most basic cucumber setup to test cucumber-js and to demonstrate some issues with older versions.
Though [cucumber-js](https://github.com/cucumber/cucumber-js) has its own unit tests, but they are using `yarn` as far as I have seen, so they are not sensitive about the sub-module changes. On the other hand, if someone uses `npm` they will find that older versions of cucumber are impacted by such changes, loosing some basic functionality.

## Setup
Clone and install this repo
```
git clone git@github.com:Andras-Marozsi/cucumber-js_tests.git
```
There are 2 major issues, on with version `1.0.0`, the other with `1.3.2`

## Issue with `v1.0.0`
Update `package.json` to with the following: `"cucumber": "1.0.0"`
```
npm install
node node_modules/cucumber/bin/cucumber.js features/test.feature:15 --format pretty
```
### Expected
Only 1 scenario should run. The order of the hooks should be: 1) BeforeHook 2) BeforeStep 3) ...

### Actual
The order of the hooks is ok, but all 3 scenarios of the feature file is run.

## Issue with `v1.3.2`
Update `package.json` to with the following: `"cucumber": "1.3.2"`
```
npm install
node node_modules/cucumber/bin/cucumber.js features/test.feature:15 --format pretty
```
### Expected
Only 1 scenario should run. The order of the hooks should be: 1) BeforeHook 2) BeforeStep 3) ...

### Actual
Only 1 scenario is run as expected, but `BeforeStep` runs before `BeforeHook`.
