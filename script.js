var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var assunto = document.getElementById('assunto').value;
var mensagem = document.getElementById('mensagem').value;

var btn = document.querySelector('.btn');

function validar() {
  if (nome == '' || email == '' || assunto == '' || mensagem == '') {
    alert('Por favor, preencha todos os campos');
    return false;
  }
  return true;
}
