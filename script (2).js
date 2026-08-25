let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

guessBtn.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
    message.style.color = '#d9534f';
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `🎯 Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativa(s)!`;
    message.style.color = '#28a745';
    endGame();
  } else if (userGuess < secretNumber) {
    message.textContent = '📉 O número secreto é MAIOR.';
    message.style.color = '#0066cc';
  } else {
    message.textContent = '📈 O número secreto é MENOR.';
    message.style.color = '#0066cc';
  }

  guessInput.value = '';
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
  restartBtn.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = '';
  restartBtn.classList.add('hidden');
  guessInput.focus();
});
