function fazerLogin() {
   
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const funcao = document.getElementById('escolha').value;
    
    // Recupera os usuários cadastrados no localStorage
    
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    //let localStorage = JSON.parse(localStorage.getItem('funcao')) || [];
   
    

    // Verifica se o usuário existe e a senha está correta
    const usuarioEncontrado = usuarios.find(usuarios => usuarios.nome === nome && usuarios.senha === senha && usuarios.funcao=== funcao);
    

    
   
    
    
    
    if (usuarioEncontrado && usuarios.funcao ==='prof') {
        // Se o usuário for encontrado, redireciona para uma página de dashboard
        alert('Bem-Vindo, Magnata!');
        window.location.href = "pagina-dashboard.html"; 
    
    }else if  (usuarioEncontrado && usuarios.funcao ==='aluno') {
        alert('Bem-Vindo, Chefe!');
        window.location.href = "teodolito.html"; 

    }else{
        alert("Algo deu errado!")
    }

 
}



// Adiciona o evento de clique ao formulário de login
document.getElementById('logar').addEventListener('click', fazerLogin); 
