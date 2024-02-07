const performOperations = () => {
  const inputArray = document.getElementById("inputArray").value;
  const numbers = inputArray.split(',').map(function (num) {
    return parseInt(num.trim());
  });

  const doubledArray = numbers.map(function (num) {
    return num * 2;
  });

  const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
  });

  let sum = [1, 2, 3,]
  sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);

  document.getElementById("originalArray").innerText = numbers.join(", ");
  document.getElementById("doubledArray").innerText = doubledArray.join(", ");
  document.getElementById("evenNumbers").innerText = evenNumbers.join(", ");
  document.getElementById("sum").innerText = sum;
}