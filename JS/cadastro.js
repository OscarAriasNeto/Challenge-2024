function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obter valores dos campos
    const nomeOficina = document.getElementById('nome-oficina').value;
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const tipo = document.getElementById('tipo').value;
    const endereco = document.getElementById('endereco').value;
  
    // Validação básica
    if (!nomeOficina || !cnpj || !email || !telefone || !tipo || !endereco) {
        alert('Preencha todos os campos obrigatórios.');
        return; // Sai da função se a validação falhar
    }
  
    // Gerar token aleatório
    const token = gerarTokenAleatorio();
    console.log('Token gerado:', token);

    // Exibir mensagem de sucesso
    exibirMensagemSucesso();
}

function gerarTokenAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return token;
}

function exibirMensagemSucesso() {
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';
    mensagemSucesso.style.display = 'block';
}
