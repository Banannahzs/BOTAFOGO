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
            constroi_atletas(jogadoresMasculinos);
            break;
        case 'feminino':
            constroi_atletas(jogadoresFemininos);
            break;
        case 'todos':
            constroi_atletas(jogadoresTodos);
            break;
        default:
            conteudoAtletas.innerHTML = "<p>Categoria inválida</p>";
            break;
    }
}

const atletas_container = document.getElementById("conteudo-atletas");

const cria_cartao = (entrada) => {

    const container_atleta = document.createElement('div');
    container_atleta.className = 'atleta-container';

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;

    const adicional = document.createElement('h4');
    adicional.innerHTML = `Saiba Mais`;

    container_atleta.append(titulo);
    container_atleta.append(imagem);
    container_atleta.append(adicional);

    container_atleta.addEventListener('click', () => {
        window.location.href = `detalhes.html?id=${entrada.id}`;
    });

    atletas_container.appendChild(container_atleta)
}


const constroi_atletas = (lista_atletas) => {
    atletas_container.innerHTML = "";
    for (const atleta of lista_atletas) {
        cria_cartao(atleta);
    }
}

function sair() {
    document.getElementById("container-inicio").style.display = "flex";
    document.getElementById("Acesso").style.display = "none";
}