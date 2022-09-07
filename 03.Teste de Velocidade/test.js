const vehicle1 = prompt('Informe o nome do primeiro veículo:')
const velocity1 = prompt('Informe a velocidade do primeiro veículo:')

const vehicle2 = prompt('Informe o nome do segundo veículo:')
const velocity2 = prompt('Informe a velocidade do segundo veículo:')

if (velocity1 > velocity2) {
    alert(vehicle2 + ' é mais rápido do que ' + vehicle1)
} else if (velocity2 > velocity1) {
    alert(vehicle1 + ' é mais rápido do que ' + vehicle2)
} else {
    alert(vehicle1 + ' e ' + vehicle2 + ' possuem velocidades iguais.')
}

