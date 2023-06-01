let form = document.querySelector('.form');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

function gettingNumbers() {
  let inputValue = document.querySelector('.input').value;
  let arrNumbers = inputValue.split(' ');
  return isPrime(arrNumbers);
}

function isPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let flag = true;
    if (numbers[i] < 1) {
      flag = false;
    }
    for (let x = 2; x < numbers[i]; x++) {
      if (numbers[i] % x === 0) {
        flag = false;
      }
    }
    if (flag) {
      result.innerHTML += `Простые числа: ${numbers[i]} </br>`;
    }
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  gettingNumbers();
})

// Оказывается я вообще не понял, что такое просто число и как его определить
// Больше всего времени искал способ не выводить другие числа, т.к когда в условии возвращал false - цикл прекращал работать и дальнейшие числа не выводились