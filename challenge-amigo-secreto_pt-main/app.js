let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}
´
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${sorteado}</li>`;
}

