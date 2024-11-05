// Função para carregar e inserir HTML de um arquivo em um elemento alvo
function loadComponent(targetId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar o componente ${filePath}:`, error));
}

// Carregar header e footer
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
