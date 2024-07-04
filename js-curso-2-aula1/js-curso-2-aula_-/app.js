let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =  texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 30');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentantiva';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ( 'p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAletorio(){
    return parseInt(Math.randon() * 30 + 1);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = gerarNumeroAletorio();
   limparCampo();
   tentativas = 1; 
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}