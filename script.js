// Array de cores para adivinhar
const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33EA', '#FFC733', '#33FFFF', '#FF33AB', '#FFE333', '#3380FF', '#33FFC9'];

// Selecionar uma cor aleatória do array
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Mostrar a cor selecionada no elemento de visualização
document.getElementById('colorBox').style.backgroundColor = randomColor;

// Função para verificar a cor selecionada
function checkColor() {
  const guessedColor = document.getElementById('colorPicker').value.toUpperCase();
  if (guessedColor === randomColor) {
    document.getElementById('result').innerHTML = 'Parabéns! Você adivinhou a cor correta!';
  } else {
    document.getElementById('result').innerHTML = 'Tente novamente.';
  }
}
