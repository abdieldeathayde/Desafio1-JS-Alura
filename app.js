let listaAmigos = [];

function adicionarAmigo() {
    let nome_amigo_sorteio = document.getElementById("amigo").value;
    
    if (nome_amigo_sorteio.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nome_amigo_sorteio);

    let listaAmigosElement = document.getElementById("resultado");
    listaAmigosElement.innerHTML += `<li><p>Amigo adicionado: ${nome_amigo_sorteio} </p></li>`;
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];

    let listaAmigosElement = document.getElementById("resultado");
    listaAmigosElement.innerHTML += `<li><p>Amigo Secreto: ${amigoSorteado}! </p></li>`;
}