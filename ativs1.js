//atividade 1
let peso = prompt ("Digite seu peso")

let altura = prompt ("Digite sua altura")

let IMC;
 
function verificarIMC(kg, metros){

    return (metros^2)/kg;

}

IMC = verificarIMC (altura, peso);

alert (`O seu IMC é: ${IMC.toFixed(2)}`);

// atividade 2
let num = 1;

let fatorial1 = 0;

let num1 = parseInt(prompt("Digite um numero"));

let num2;

function fatorial (a){

    if (a == 0 || a == 1){

        return 1;

    }

    for(let i = a; i > 1; i--){

       console.log(i)

        num *= i;   

    }

    return num;

  }

  fatorial(num1);

  alert(`O numero fatorializado é ${num}`);

//atividade 3
let reals = prompt("digite quantos reais você tem");

function dolar (real){

    return reals

}

real = reals/4.80;

//atividade 4
let reals = prompt("digite quantos reais você tem");
function dolar (real){
    return reals
}
real = reals/4.80;
alert(`${real}`);

//atvidade 5
let altura = parseFloat(prompt("Qual a altura da sua sala?"));
let largura = parseFloat(prompt("Qual a largura da sua sala?"));

function validarArea(parAltura,parLargura) {
    return parAltura*parLargura
}
let area = validarArea(altura, largura)

function validarPerimetro(parAltura,parLargura) {
    return parAltura*2 + (parLargura*2)
}
let perimetro = validarPerimetro(altura, largura)

alert(A área da sua sala é de ${area} metros e o seu perímetro é de ${perimetro} metros);

//atividade 6
let raio = parseFloat(prompt("Digite o valor do raio do seu círculo em metros:"));
function area(r){
    return 3.14*(r*r);
}
function perimetro(r){
    return 2*3.14*r
}
let resultadoArea = area(raio);
let resultadoPerimetro = perimetro(raio);
alert(`O resultado da área da circunferência é de ${resultadoArea.toFixed(2)} metros.\nO resultado do perímetro da circunferência é de ${resultadoPerimetro.toFixed(2)} metros.`);

//atividade 7
let num = parseInt(prompt("Digite o valor do número que deseja saber a tabuada:"));
let contador = 1
let resultado;
function tabuada(n){
    while(contador<=10){
    resultado = n*contador
    alert(`${n}x${contador}=${resultado}.`);
    contador++
    }
}
tabuada(num);