window.addEventListener('DOMContentLoaded', function(event) {

  let button = document.querySelector('#button');
  let result = document.querySelector('#result');

  button.addEventListener('click', function(){
    let checkedBoxes = document.querySelectorAll('input[name=question]:checked').length;

    document.querySelector('#result').scrollIntoView({
      behavior: 'smooth'
    });

    if (checkedBoxes <= 4) {
      result.innerHTML = `Você marcou ${checkedBoxes} de 30 nessa lista. Polêmica não é com você. Você gosta do feijão com arroz. Quer dizer, você gosta de feijão com arroz? Ou acha polêmico?`;
    } else if (checkedBoxes <= 5 || checkedBoxes <= 9) {
      result.innerHTML = `Você marcou ${checkedBoxes} de 30 nessa lista. Até que você come bastante comida polêmica! Mas dá pra explorar mais coisas ainda, hein? Parabéns!`;
    } else if (checkedBoxes <= 10 || checkedBoxes <= 14) {
      result.innerHTML = `Você marcou ${checkedBoxes} de 30 nessa lista.Caramba, você come DE TUDO, parabéns! O pessoal pode te convidar pra jantar tranquilo: você nunca vai fazer desfeita.`;
    } else {
      result.innerHTML = `Você marcou ${checkedBoxes} de 30 nessa lista. MITO!`;
    }

  });


});
