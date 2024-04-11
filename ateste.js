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