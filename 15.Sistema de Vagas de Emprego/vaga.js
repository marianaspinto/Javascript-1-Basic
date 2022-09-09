// Simulação de um sistema de vagas de emprego
const vagas = [] //Array para listar e salvar todas as vagas

// Função para listar as vagas
function listarVagas() {
    const vagasEmTexto =  vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

// Funcção para criar uma nova vaga
function novaVaga() {
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limte (dd/mm/aaaa para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome +  "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] } 
     vagas.push(novaVaga)
     alert("Vaga criada.")
    }
}