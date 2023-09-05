document.onload(makeApresentacao());

function toggleMode() {
    const html = document.documentElement;

    // ESTRUTURA CONSTRUIDA MANUALMENTE:
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    // FUNÇÃO DISPONÍVEL DO PRÓPRIO JAVASCRIPT PARA EXECUTAR UMA AÇÃO COM O MESMO EFEITO QUE O CÓDIGO ACIMA:
    html.classList.toggle('light');
}

function makeApresentacao() {
    let textoApresentacao = "<p>Me chamo Luiz Otávio de Moraes, atualmente tenho " + calcIdade() + " anos de idade e sou natural de Cascavel, PR.</p>"

    document.getElementsByClassName("apresentacao")[0].innerHTML = textoApresentacao;
}

function calcIdade() {
    const dataAtual = Date.now();
    const dataNascimento = new Date("1997-11-24");

    let idade = ~~((dataAtual - dataNascimento) / (31557600000));

    return idade;
}