document.addEventListener("DOMContentLoaded", function() {
    verificarAutenticacao();
});

botao_voltar.addEventListener('click', function() {
    window.location.href = 'inicio.html';});

const urlParams = new URLSearchParams(window.location.search);
    const jogadorImagem = urlParams.get('imagem');
    const jogadorId = urlParams.get('id');
    const jogadorNome = urlParams.get('nome');
    const jogadorPosicao = urlParams.get('posicao');
    const jogadorNome_Completo = urlParams.get('nome_completo');
    const jogadorNascimento = urlParams.get('nascimento');
    const jogadorAltura = urlParams.get('altura');
    const jogadorDescricao = urlParams.get('descricao');
    
    document.getElementById('detalhes-imagem').src = jogadorImagem;   
    document.getElementById('detalhes-id').textContent = `ID: ${jogadorId}`;
    document.getElementById('detalhes-nome').textContent = `Nome: ${jogadorNome}`;
    document.getElementById('detalhes-posicao').textContent = `Posição: ${jogadorPosicao}`;
    document.getElementById('detalhes-nome_completo').textContent = `Nome Completo: ${jogadorNome_Completo}`;
    document.getElementById('detalhes-nascimento').textContent = `Nascimento: ${jogadorNascimento}`;
    document.getElementById('detalhes-altura').textContent = `Altura: ${jogadorAltura}`;
    document.getElementById('detalhes-descricao').textContent = `Descrição: ${jogadorDescricao}`;

    