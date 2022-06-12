var contatos = [];

function popularTabela() {
    var tabela = document.getElementById('tableContato');
    tabela.innerHTML = '<thead><tr><th>CPF</th><th>Nome</th><th>Telefone</th><th>Email</th><th>Ações</th></tr></thead>';
    
    for (var i = 0; i < contatos.length; i++) {
        var linha = tabela.insertRow();
        var celulaCpf = linha.insertCell(0);
        var celulaNome = linha.insertCell(1);
        var celulaTelefone = linha.insertCell(2);
        var celulaEmail = linha.insertCell(3);
        var celulaAcao = linha.insertCell(4);

        celulaCpf.innerHTML = contatos[i].cpf;
        celulaNome.innerHTML = contatos[i].nome;
        celulaTelefone.innerHTML = contatos[i].telefone;
        celulaEmail.innerHTML = contatos[i].email;

        var botaoExcluir = document.createElement('button');
        botaoExcluir.innerHTML = 'Excluir';
        botaoExcluir.setAttribute('onclick', 'excluir(' + i + ')');
        celulaAcao.appendChild(botaoExcluir);
    }
}

function adicionar() {
    regexTelefone();
    var cpf = document.getElementById('cpf').value;
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    var contato = {
        cpf: cpf,
        nome: nome,
        telefone: telefone,
        email: email
    };

    contatos.push(contato);
    popularTabela();
}

function excluir(indice) {
    contatos.splice(indice, 1);
    popularTabela();
}

function validaCPF(){
    var cpf = document.getElementById('cpf').value;
    var cpfValido = true;
    var soma = 0;
    var resto;
    var digito1;
    var digito2;
    var i;
    var j;
    var cpfArray = cpf.split('');
    if(cpfArray.length != 11){
        alert('CPF inválido');
        cpfValido = false;
    }
    if(cpfValido){
        for(i = 0; i < 9; i++){
            soma += parseInt(cpfArray[i]) * (10 - i);
        }
        resto = soma % 11;
        if(resto < 2){
            digito1 = 0;
        }else{
            digito1 = 11 - resto;
        }
        if(digito1 != parseInt(cpfArray[9])){
            alert('CPF inválido');
            cpfValido = false;
        }
    }
    if(cpfValido){
        soma = 0;
        for(j = 0; j < 10; j++){
            soma += parseInt(cpfArray[j]) * (11 - j);
        }
        resto = soma % 11;
        if(resto < 2){
            digito2 = 0;
        }else{
            digito2 = 11 - resto;
        }
        if(digito2 != parseInt(cpfArray[10])){
            alert('CPF inválido');
            cpfValido = false;
        }
    }
    if(cpfValido){
        alert('CPF válido');
    }
}

function validaEmail(){
    var email = document.getElementById('email').value;
    var emailValido = true;
    var emailArray = email.split('@');
    if(emailArray.length != 2){
        alert('Email inválido');
        emailValido = false;
    }
    if(emailValido){
        var dominioArray = emailArray[1].split('.');
        if(dominioArray.length != 2){
            alert('Email inválido');
            emailValido = false;
        }
    }
    if(emailValido){
        alert('Email válido');
    }
}

function validaTelefone(){
    var telefone = document.getElementById('telefone').value;
    var telefoneValido = true;
    var telefoneArray = telefone.split('');
    if(telefoneArray.length != 10){
        alert('Telefone inválido');
        telefoneValido = false;
    }
    if(telefoneValido){
        alert('Telefone válido');
    }
}

function regexTelefone(){
    var telefone = document.getElementById('telefone').value;
    var regex = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
    if(!regex.test(telefone)){
        alert('Telefone inválido');
    }
}