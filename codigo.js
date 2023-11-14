var senha_correta = "SENHA";

function checarSenha() {
    var input = document.getElementById("senha").value;

    if (input === senha_correta) {
        document.getElementById("Acesso").style.display = "flex";
        document.getElementById("container-inicio").style.display = "none";
    } else {
        alert("Senha errada!");
    }
}

function mostrarAtletas(categoria) {
    var conteudoAtletas = document.getElementById("conteudo-atletas");
    switch (categoria) {
        case 'masculino':
            conteudoAtletas.innerHTML = "<p>Lista de Atletas Masculinos</p>";
            break;
        case 'feminino':
            conteudoAtletas.innerHTML = "<p>Lista de Atletas Femininos</p>";
            break;
        case 'all':
            conteudoAtletas.innerHTML = "<p>Lista de Todos os Atletas</p>";
            break;
        default:
            conteudoAtletas.innerHTML = "<p>Categoria inválida</p>";
            break;
    }
}


function sair() {
    document.getElementById("container-inicio").style.display = "flex";
    document.getElementById("Acesso").style.display = "none";
}