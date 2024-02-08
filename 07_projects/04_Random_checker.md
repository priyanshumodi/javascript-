# project 4

## Random Checker

```
const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let guessRemain = parseInt(document.querySelector('.lastResult').innerHTML);
// console.log(guessRemain)
const message = document.querySelector('.lowOrHi')
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var userInput = parseInt(document.querySelector('#guessField').value)
  console.log(userInput)

  const prevGuess = [];
console.log(userInput)
if(userInput<1 || userInput>100)
{
  message.innerHTML = `<span>jaa naa ${userInput}</span>`;
}
else if(randomNumber<userInput)
{
  message.innerHTML = `<span>bade log ${userInput}</span>`;
}
else if(randomNumber>userInput)
{
  message.innerHTML = `<span>thoda sa bada soch ${userInput}</span>`;
}
else
{
  message.innerHTML = `<span>7 carod ${userInput}</span>`;
}
 const prevGuesses = document.querySelector('.guesses');
 prevGuess.push(userInput);
 prevGuesses.innerHTML += ` ${userInput}` 
 const remain = guessRemain-1;
//  const lastRemain = document.querySelector('.lastResult');
 guessRemain.innerHTML = `${remain}`
 if(!guessRemain)
{
  
}
})


```