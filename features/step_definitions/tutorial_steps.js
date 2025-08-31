const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { isItFriday } = require('../../src/isItFriday');

let today;
let actualAnswer;

Given('today is {string}', function (day) {
  today = day;
});

When("I ask whether it's Friday yet", function () {
  actualAnswer = isItFriday(today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(actualAnswer, expectedAnswer);
});