// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');  // Referência ao campo de texto do nome
    const nome = nomeInput.value.trim();  // Remove espaços extras do nome
    const errorMessage = document.getElementById('error-message');  // Elemento para mostrar erros

    // Limpa mensagens de erro anteriores
    errorMessage.textContent = '';
    nomeInput.classList.remove('error');

    if (nome === '') {
        errorMessage.textContent = 'Por favor, digite um nome!';
        nomeInput.classList.add('error');
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');  // Referência à lista onde os amigos serão adicionados

    // Verifica se o nome já está na lista
    const listaItens = listaAmigos.getElementsByTagName('li');
    for (let i = 0; i < listaItens.length; i++) {
        if (listaItens[i].textContent === nome) {
            errorMessage.textContent = 'Este nome já foi adicionado!';
            nomeInput.classList.add('error');
            return;
        }
    }

    // Cria o item da lista com o nome do amigo
    const li = document.createElement('li');
    li.textContent = nome;

    // Adiciona o item à lista de amigos
    listaAmigos.appendChild(li);

    // Limpa o campo de texto após adicionar o nome
    nomeInput.value = ''; 
}

// Função para sortear um amigo aleatório da lista
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');  // Referência à lista de amigos
    const listaItens = listaAmigos.getElementsByTagName('li');  // Pega os itens da lista

    const errorListEmpty = document.getElementById('error-list-empty');  // Referência ao elemento de erro da lista vazia

    // Verifica se a lista está vazia
    if (listaItens.length === 0) {
        // Verifica se a mensagem de erro já foi exibida, caso contrário, cria
        if (!errorListEmpty) {
            const errorElement = document.createElement('div');
            errorElement.id = 'error-list-empty';
            errorElement.textContent = 'A lista está vazia! Adicione amigos antes de sortear.';
            document.querySelector('.input-section').appendChild(errorElement);  // Adiciona o erro ao container correto
        }
        return;
    }

    // Remove a mensagem de erro, caso tenha sido exibida antes
    if (errorListEmpty) {
        errorListEmpty.remove();
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * listaItens.length);
    const amigoSorteado = listaItens[indiceSorteado].textContent;

    // Exibe o nome sorteado na área de resultado
    const resultado = document.getElementById('resultado');
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;

    // Adiciona o resultado à lista de resultados
    resultado.appendChild(liResultado);
}

// Adiciona funcionalidade para pressionar Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();  // Chama a função para adicionar o nome
    }
});
