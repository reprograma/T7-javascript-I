window.addEventListener('DOMContentLoaded', function(event) {

  const getPlayerName = document.querySelector('#getPlayerName');

  getPlayerName.addEventListener('click', function() {
    let playerName = document.getElementById('playerName').value;

    if (playerName) {
      document.getElementById('playerChoiceBox').style.display = 'block';
      document.getElementById('playerBox').style.display = 'none';
    } else {
      alert("Por favor, preencha seu nome!");
    }
  });

  getPlayerChoice.addEventListener('click', function(event) {
    const playerChoice = document.getElementById('playerChoice').value;
    const choices = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
    let winnerText = document.getElementById('winner');

    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    switch (playerChoice) {
      case choices[0]:
        if (computerChoice == playerChoice) {
          winnerText.innerHTML = 'Empate, jogue novamente';
        } else if (computerChoice == choices[2] || computerChoice == choices[3]) {
          winnerText.innerHTML =  playerName.value + ' escolheu ' + playerChoice + ' e ganhou! O computador escolheu ' + computerChoice
        } else {
          winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
        }
      break;
      case choices[1]:
        if (computerChoice == playerChoice) {
          document.getElementById('winner').innerHTML = 'Empate, jogue novamente';
        } else if (computerChoice == choices[0] || computerChoice == choices[4]) {
          winnerText.innerHTML = playerName.value + ' escolheu ' + playerChoice + ' e ganhou! O computador escolheu ' + computerChoice
        } else {
          winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
        }
      break;
      case choices[2]:
        if (computerChoice == playerChoice) {
          document.getElementById('winner').innerHTML = 'Empate, jogue novamente';
        } else if (computerChoice == choices[1] || computerChoice == choices[3]) {
          winnerText.innerHTML = playerName.value + ' escolheu ' + playerChoice + ' e ganhou! O computador escolheu ' + computerChoice
        } else {
          winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
        }
      break;
      case choices[3]:
        if (computerChoice == playerChoice) {
          document.getElementById('winner').innerHTML = 'Empate, jogue novamente';
        } else if (computerChoice == choices[4] || computerChoice == choices[1]) {
          winnerText.innerHTML = playerName.value + ' escolheu ' + playerChoice + ' e ganhou! O computador escolheu ' + computerChoice
        } else {
          winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
        }
      break;
      case choices[4]:
        if (computerChoice == playerChoice) {
          document.getElementById('winner').innerHTML = 'Empate, jogue novamente';
        } else if (computerChoice == choices[2] || computerChoice == choices[0]) {
          winnerText.innerHTML = playerName.value + ' escolheu ' + playerChoice + ' e ganhou! O computador escolheu ' + computerChoice
        } else {
          winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
        }
      break;
      default:
        alert('Por favor verifique a ortografia e escreva uma das opções novamente.');
    }
  });

});
