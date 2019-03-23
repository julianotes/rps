let userScore = 0;
let compScore = 0;
// кешируем ДОМ
const userScore_span = document.getElementById('user-score'),
      compScore_span = document.getElementById('comp-score'),
      scoreBoard = document.querySelector('.score-board'),
      results = document.querySelector('.result > p'),
      rock = document.getElementById('r'),
      paper = document.getElementById('p'),
      scissors = document.getElementById('s');

main();

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());


//создаем функцию для коректного отображения r, p, s.

function convertToWord(letter) {
  if (letter=== "r") return "камень";
  if(letter === "p") return "бумага";
  return "ножницы";


}

// выводим победителя юзера
function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const uChoice = document.getElementById(user);
  results.innerHTML = ` Ты -  ${convertToWord(user)} , компьютер -  ${convertToWord(computer)} . Ты выиграл!🔥`;
  //добавляем класс украшалку к аргументу юзер
 uChoice.classList.add('green-glow');
  setTimeout(() => uChoice.classList.remove('green-glow'), 200);
};



function lose(user, computer) {
   compScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = compScore;
   const uChoice = document.getElementById(user);
   results.innerHTML = ` Ты -  ${convertToWord(user)} , компьютер -  ${convertToWord(computer)} . Ты проиграл! &#9785;`;
   uChoice.classList.add('red-glow');
   setTimeout(() => uChoice.classList.remove('red-glow'), 200);
};

function draw(user, computer) {
  const uChoice = document.getElementById(user);
   results.innerHTML = ` Ты -  ${convertToWord(user)} , компьютер -  ${convertToWord(computer)} . Ничья.`;
    uChoice.classList.add('gray-glow');
    setTimeout(() => uChoice.classList.remove('gray-glow'), 200);
}


function game(userChoice) {
 const computerChoice = getComputerChoice();
//  console.log("user choice => " +  userChoice);
//  console.log ("comp choice => " + computerChoice);
switch(userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice,computerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
   lose(userChoice,computerChoice);
    break;
  case "rr":
  case "pp":
  case "ss":
    draw(userChoice,computerChoice);
    break;  
}
};


function main() {
  // Вешаем обработчики 
  // убраны все фигурные скобки
  rock.addEventListener('click', () => game("r"));
  paper.addEventListener('click', () => game("p"));
  scissors.addEventListener('click', () => game("s"));
}

