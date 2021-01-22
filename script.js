function getSaudacao() {
	var data = new Date();
	tempo = data.getHours();

	if (tempo < 12) {
		mensagem = "Bom diaa!! ";
	} else {
		mensagem = "Boa tarde! "
	}
	return mensagem;
}


function mostraMensagem() {
    var nome = window.prompt('Mensagem: ')
    var getSaudacao = getSaudacao();
    alert(getSaudacao)
}