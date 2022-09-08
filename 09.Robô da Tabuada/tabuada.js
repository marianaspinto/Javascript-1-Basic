const number = prompt(
    "Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada:"
)

let resultado = ""

for (let fator =1; fator <= 20; fator++) {
    resultado += " -> " + number + " * " + fator + " = " + (number * fator) + "\n"
}

alert("Resultado da tabuada de " + number + ":\n\n" + resultado)