// Fungsi untuk mengacak urutan elemen dalam array
function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Memilih kata secara acak dari daftar kata

var selectedWords = [];

function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * word.length);
  return word[randomIndex];
}

// Mengacak urutan huruf dalam kata yang sudah terpilih
function shuffleLetters(word) {
  let letters = word.split('');
  let shuffledLetters = shuffleArray(letters);
  return shuffledLetters.join('');
}

let shuffledWord;
let randomWord;

// Mengacak urutan kata dan huruf
function randomizeWord() {
  shuffledWord = shuffleArray(word);
  randomWord = getRandomWord();
  shuffledWord = shuffleLetters(randomWord.name);
}

randomizeWord();

var score = 0

function generate() {
  if (selectedWords.length <= word.length) {
    getRandomWord()
    randomizeWord()
    $('#myInput').value = ''
    $('.word').textContent = shuffledWord
    $('.hint').textContent = randomWord.hint
    $('#score').textContent = 'score : ' + score
    if (selectedWords.includes(randomWord.name)) {
      generate()
    }
  }else return 
}

generate()

function checking() {
  let answer = $('#myInput').value
  if (answer.toLowerCase().trim() == randomWord.name.toLowerCase()) {
    selectedWords.push(randomWord.name)
    score++
    generate()
    $('#myInput').focus()
  }
  gameClear()
}

$('#check').onclick = checking
$('#reset').onclick = generate

function gameClear() {
  if (selectedWords.length == word.length) {
    Swal.fire({
      title: 'congratulation',
      text: `you're achieve a silver key!`,
      imageUrl: 'assets/keysilver.png',
      imageWidth: 200,
      imageHeight: 200,
      footer: 'you can open your inventory to check'
    })
    Cookies.set('acces2', 'true', { expires: 7 })
  }
}