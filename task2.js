function sumInput() {
  const numbers = [];
  
  while (true) {
    const input = prompt("Введіть число", "");
    
    if (input === null || input === "") break;
    
    const number = +input;
    
    if (isNaN(number)) {
      alert("Будь ласка, введіть число");
      continue;
    }
    
    numbers.push(number);
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum;
}

console.log("Сума чисел:", sumInput());