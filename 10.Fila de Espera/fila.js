// Simulação de uma lista de espera em um consultório médico
let row = [] // Lista para gerenciar os pacientes
let option = "" // Meno interativo

do {
 let patients = "" // Lista de pacientes estará sempre a vista
 for (let i = 0; i < row.length; i++) {
    patients += (i + 1) + "º - " + row[i] + "\n"
 }
option = prompt(
    "Pacientes: \n" + patients +
    "\nEscolha uma opção:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
)
switch (option) {
    case "1":
        const newPatient = prompt("Qual é o nome do novo paciente?")
        row.push(newPatient) // Adicionar um novo paciente no final da fila
        break
    case "2": 
    const patientConsulted = row.shift() // Remover um paciente no começo da fila
    if (patientConsulted) {
        alert(patientConsulted + " foi removido da fila.")
    } else {
        alert("Não há pacientes na fila!")
        break
    }
    break
    case "3":11
        alert("Encerrando...")
        break
        default:
        alert("Opção Inválida!")
}
} while (option !== "3")

    
