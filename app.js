//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.




function adicionarAmigo() {
    

    sorteio = null;
    let lista_sorteio = [];

    let nome_amigo_sorteio = document.getElementById("amigo").value;
    
    lista_sorteio.push("1", nome_amigo_sorteio);
    // let adicionar = document.getElementsByClassName("button-add");

    let botao_adicionar = document.getElementsByClassName("button-add");

    let listaAmigos = document.getElementById("resultado");

    listaAmigos.innerHTML += `<li><p>Amigo adicionado: ${nome_amigo_sorteio} </p></li>`;

    

}

function sortearAmigo(){

    let listaAmigos = document.getElementById("resultado");

    if (this.usuario < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    
    listaAmigos.innerHTML += `<li><p>Amigo Secreto: ${listaAmigos.indice}! </p></li>`;


    //listaAmigos[indice]
    // lista_sorteio.push(contador, listaAmigos[contador]);

    // document.querySelector(".result").textContent = `Seu amigo secreto é: ${listaAmigos[indice]}`;

    
}
