
// Em javascript é possível passar funções como parâmetro para outras funções:

// Função que retorna um número aleatório
function retornaNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Função que retorna o número 2, ao quadrado
function retornaDoisAoQuadrado() {
    return 2 * 2;
}

// Função soma que espera uma função como parâmetro
function retornaSomaComCallback(a, callback) {
    return a + callback();
}

// Aplicações da função soma:

// Neste exemplo, faremos com que o número 10 seja somado com um número aleatório
const resultado1 = retornaSomaComCallback(10, retornaNumeroAleatorio);
console.log(`Resultado 1:`, resultado1);

// Neste exemplo, faremos com que o número 5 seja somado com o número 2, ao quadrado
const resultado2 = retornaSomaComCallback(5, retornaDoisAoQuadrado);
console.log("Resultado 2: ", resultado2);