
// "herois" é uma variável que guarda uma lista (array)
// Dentro dela temos 3 objetos, cada objeto representa um herói
let herois = [
    { nome: "Batman", xp: 7500 },   // Objeto 1
    { nome: "Flash", xp: 3200 },     // Objeto 2
    { nome: "Robin", xp: 12000 }     // Objeto 3
]

// Laço de repetição (FOR)
// O for serve para repetir uma ação várias vezes
// Ele vai percorrer todos os heróis do array (lista)

for (let i = 0; i < herois.length; i++) {
    
    // i começa em 0 (primeiro herói)
    // herois.length é o tamanho do array (3)
    // i++ significa: soma +1 a cada repetição


    // Pegamos o nome do herói atual
    let nome = herois[i].nome
    
    // Pegamos o xp do herói atual
    let xp = herois[i].xp
    
    // Criamos a variável que armazenará o nível
    let nivel = ""

    
    // Estrutura de decisão (IF / ELSE IF)

    // Aqui usamos operadores de comparação:
    // <  menor que
    // <= menor ou igual

    if (xp < 1000) {
        nivel = "Ferro"
    } else if (xp <= 2000) {
        nivel = "Bronze"
    } else if (xp <= 5000) {
        nivel = "Prata"
    } else if (xp <= 7000) {
        nivel = "Ouro"
    } else if (xp <= 8000) {
        nivel = "Platina"
    } else if (xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp <= 10000) {
        nivel = "Imortal"
    } else {
        // Se nenhuma condição anterior for verdadeira
        nivel = "Radiante"
    }

    // Template String (uso de crase ` `)
    // Permite inserir variáveis usando ${}
    console.log(`O Herói ${nome} está no nível ${nivel}`)
}