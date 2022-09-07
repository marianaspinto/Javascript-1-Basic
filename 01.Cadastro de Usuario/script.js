let firstName = prompt('Informe o primeiro nome do recruta:');
let lastName = prompt('Informe o sobrenome nome do recruta:');
let fieldOfStudy = prompt('Qual o campo de estudo do recruta?');
let yearOfBirth = prompt('Qual o ano de nascimento do reccruta?');

alert(
    'Recruta cadastrado com sucesso!\n' +
    '\nNome completo: ' + firstName + ' ' + lastName + '.' +
    '\nCampo de estudo: ' + fieldOfStudy + '.' +
    '\nIdade: ' + (2022 - yearOfBirth) + '.'
)

