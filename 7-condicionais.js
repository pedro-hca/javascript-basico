console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;
const estaAcompanhada = false
const temPassagemComprada = true


console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender")

// }

console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem")
    listaDeDestinos.splice(2, 1); // removendo item
}else{
    console.log("Não é maior de Idade e não posso vender")
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");   
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);