// Declaração das variáveis
let nomeHeroi = "tonho";  // Coloque o nome do herói aqui
let xp = 2001;                  // Insira a quantidade de experiência (XP) aqui
let classificacao;               // Variável para armazenar a classificação

// Estrutura de decisão para determinar a classificação do herói
if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp >= 2001 && xp <= 3000) {
    classificacao = "Prata";
} else if (xp >= 4001 && xp <= 5000) {
    classificacao = "Ouro";
} else if (xp >= 6001 && xp <= 7000) {
    classificacao = "Diamante";
} else if (xp >= 7001 && xp <= 8000) {
    classificacao = "Ascendente";
} else if (xp >= 8001 && xp <= 9000) {
    classificacao = "Imortal";
} else if (xp >= 10001) {
    classificacao = "Radiante";
} else {
    classificacao = "Classificação desconhecida";
}

// Exibe a classificação do herói
console.log("O herói " + nomeHeroi + " possui classificação: " + classificacao);
