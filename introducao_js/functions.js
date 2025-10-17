// funcao sem retorno 
function inicio() {
    const mensagem = 'Estou iniciando...';
    console.log(mensagem);
}

//funcao com retorno 
function processa() {
    const mensagem = 'Estou processando...'
    return mensagem;
}

inicio();

const processando = processa();
console.log(processando);