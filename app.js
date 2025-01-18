//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
import Math
let lista_sorteio = [];



function adicionarAmigo() {

   

    let nome_amigo_sorteio = document.getElementById("amigo").value;
    
    lista_sorteio.push("1", nome_amigo_sorteio);
    // let adicionar = document.getElementsByClassName("button-add");

    let botao_adicionar = document.getElementsByClassName("button-add");

    let listaAmigos = document.getElementById("resultado");

    listaAmigos.innerHTML += `<li><p>Amigo adicionado: ${nome_amigo_sorteio} </p></li>`;

}

function sortearAmigo() {

    Math.random(0, lista_sorteio);

    


    for (let contador = 0; contador < lista_sorteio; contador++) {

    }

    


    
}