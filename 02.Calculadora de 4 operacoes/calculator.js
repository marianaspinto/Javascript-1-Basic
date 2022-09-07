const entrada1 = prompt('Insira o primeiro número:');
const entrada2 = prompt('Insira o segundo número:');

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert(
    'Resultados:\n' +
    '\nSoma: ' + sum +
    '\nSubtração: ' + subtraction +
    '\nMultiplicação: ' + multiplication +
    '\nDivisão: ' + division)