var senha = '85ee0fe4f155a9af2657d85054ad63ca';

 function checarSenha() {
    var input = document.getElementById("senha").value;

    if (hex_md5(input) === senha) {
        localStorage.setItem("autorizado", "true");
        inicio.addEventListener('click', () => {
            window.location.href = 'inicio.html';
        });
    } else {
        alert("Senha incorreta!");
    }
} 

document.getElementById('senha').addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
       
       checarSenha();
    }
});