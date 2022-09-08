const imoveis = [] // Array vazio que será a lista de imóveis
let option = "" // opção do menu interativo

do {
    option = prompt(
        "Bem-vindo(a) ao cadastro de imóveis!\n" +
        "Total de imóveis: " + imoveis.length + // Quantidade de imóveis sempre disponível no menu
        "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (option) {
        case "1": 
        const imovel = {}

        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
        imovel.quartos = prompt("Informe a quantidade de quartos do imóvel:")
        imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
        imovel.garagem = prompt("O imóvel possui garagem? Sim/Não ")
        
        const confirmacao = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu.")
            }
            break 
        case "2": 
        for (let i = 0; 1 < imoveis.length; i++) {
            alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[1].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui garagem? " + imoveis[i].garagem
                )
        }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }


} while (option !== "3")