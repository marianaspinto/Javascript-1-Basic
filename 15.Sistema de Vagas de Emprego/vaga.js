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

// Funcão de exibir informações detalhadas da vaga
function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
        ) 
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato:")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

// Função para excluir vaga
function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

// Menu interativo
function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1.Listar vagas disponíveis" +
        "\n2.Criar uma nova vaga" +
        "\n3.Visualizar uma vaga" +
        "\n4.Escrever um(a) candidato(a)" +
        "\n5.Excluir uma vaga" +
        "\n6.Sair" +
    )
}