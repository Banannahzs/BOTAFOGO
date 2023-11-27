document.addEventListener("DOMContentLoaded", function() {
    verificarAutenticacao();
});


const verificarAutenticacao = () => {
    const autorizado = localStorage.getItem("autorizado");
    if(autorizado !== "true"){
        alert("Usuario não cadastrado, Efetue o login e tente novamente!");
        window.location = './index.html';
    }
}

botao_voltar.addEventListener('click', function() {
    window.location.href = 'inicio.html';});

const urlParams = new URLSearchParams(window.location.search);
    const jogadorImagem = urlParams.get('imagem');
    const jogadorId = urlParams.get('id');
    const jogadorNome = urlParams.get('nome');
    const jogadorDescricao = urlParams.get('descricao')
    
    document.getElementById('detalhes-imagem').src = jogadorImagem;   
    document.getElementById('detalhes-id').textContent = `ID: ${jogadorId}`;
    document.getElementById('detalhes-nome').textContent = `Nome: ${jogadorNome}`;
    document.getElementById('detalhes-descricao').textContent = `Descrição: ${jogadorDescricao}`;

    