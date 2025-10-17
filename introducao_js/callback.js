const inicio = () => {
    console.log('Inicio')
}

const fim = () => {
    console.log('fim')
}

const processa = (ini, final) => {
    ini();

    final();
}

processa(inicio, fim);

processa(()=>{
    console.log('inicio1');
},() =>{
    console.log('fim 1');
});