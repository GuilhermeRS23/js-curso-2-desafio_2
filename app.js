//Desafio 1
function exibirMensagem() {
    console.log('Olá Mundo')
}
exibirMensagem();

//Desafio 2
function exibirMensagemNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirMensagemNome('Guilherme');

//Desafio 3
let soma = dobroNumero(11);

function dobroNumero(numero) {
return numero * 2;
}
console.log(soma);

//Desafio 4
let media = mediaValores(7, 8 , 12);

function mediaValores(n1, n2, n3) {
    return (n1 + n2 + n3)/3;
}
console.log(media);

//Desafio 5
let maior = maiorValor(15, 55);

function maiorValor(num1 , num2) {
    return Math.max(num1, num2);
} 
console.log(maior);

//Desafio 6
let quadradoDoNumero = numeroAoQuadrado(11);

function numeroAoQuadrado(number) {
return number * number;
}
console.log(quadradoDoNumero);