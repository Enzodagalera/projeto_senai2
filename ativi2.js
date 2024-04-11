// EXERCICIO 3
 function validarconsole(){
     console.log ("olá mundo");
}
// EXERCICIO 4
let nome = prompt ("digite seu nome");
function validarPrompt(nomep){
    console.log(`olá ${nomep}`);
}
validarPrompt(nome);

// EXERCICIO 5
let numero = parseInt (prompt("digite um numero"))
function validarsoma(numero1){
    return numero1*2;

}
let resultado = validarsoma(numero);
alert(` o dobro desse numero é ${resultado} `);
validarsoma (numero);

// EXERCICIO 6
let numero = parseInt (prompt ("digite seu primeiro numero"));
let numero1 = parseInt (prompt ("digite seu segundo numero"));
let numero2 = parseInt (prompt ("digite seu terceiro numero"));
function  validarMedia(n1, n2, n3) {
   return (n1+n2+n3)/3
}
let media= validarMedia (numero, numero1, numero2);
alert (`a media desses números é ${media}`);
// EXERCICIO 7
// EXERCICIO 8