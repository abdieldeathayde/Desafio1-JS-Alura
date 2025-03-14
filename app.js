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

    let params = {
		particleCount: 500, // Quantidade de confetes
		spread: 90, // O quanto eles se espalham
		startVelocity: 70, // Velocidade inicial
		origin: { x: 0, y: 0.5 }, // Posição inicial na tela
		angle: 45 // Ângulo em que os confetes serão lançados
	};

	// Joga confetes da esquerda pra direita
	confetti(params);

	// Joga confetes da direita para a esquerda
	params.origin.x = 1;
	params.angle = 135;
	confetti(params);
}

