const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { sumar, restar, multiplicar, dividir } = require('../../src/calculadora');

let a, b, resultado;

Given('que introduzco {int} y {int}', function (x, y) {
  a = x;
  b = y;
});

When('los sumo', function () {
  resultado = sumar(a, b);
});

When('los resto', function () {
  resultado = restar(a, b);
});

When('los multiplico', function () {
  resultado = multiplicar(a, b);
});

When('los divido', function () {
  resultado = dividir(a, b);
});

Then('el resultado debe ser {int}', function (esperado) {
  assert.strictEqual(resultado, esperado);
});