const tourist = prompt('Qual é o seu nome, turista?')
let cities = ''
let count = 0

let continuar = prompt('Você já visitou alguma cidade? (Sim/Não')

while (continuar === 'Sim') {
    let city = prompt('Qual é o nome da cidade visitada?')
    // Cities = city + ...
    cities += ' - ' + city + '\n'
    count++
    continuar = prompt('Você visitou alguma outra cidade? (Sim/Não')
}

alert(
    'Turista: ' + tourist +
    '\nQuantidade de cidades visitadas: ' + count +
    '\nCidades visitadas:\n' + cities 
)