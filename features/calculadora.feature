Feature: Calculadora básica
  Como estudiante quiero realizar operaciones aritméticas simples
  para verificar resultados de ejercicios.

  Scenario: Suma de dos valores
    Given que introduzco 7 y 5
    When los sumo
    Then el resultado debe ser 12

  Scenario: Resta de dos valores
    Given que introduzco 10 y 3
    When los resto
    Then el resultado debe ser 7

  Scenario: Multiplicación de dos valores
    Given que introduzco 4 y 6
    When los multiplico
    Then el resultado debe ser 24

  Scenario: División de dos valores
    Given que introduzco 20 y 4
    When los divido
    Then el resultado debe ser 5