function performOperations() {
    var inputArray = document.getElementById("inputArray").value;
    var numbers = inputArray.split(',').map(function(num) {
      return parseInt(num.trim());
    });

    var doubledArray = numbers.map(function(num) {
      return num * 2;
    });

    var evenNumbers = numbers.filter(function(num) {
      return num % 2 === 0;
    });

     const sum = [1,2,3,]
    var sum = numbers.reduce(function(acc, num) {
      return acc + num;
    }, 0);

    document.getElementById("originalArray").innerText = numbers.join(", ");
    document.getElementById("doubledArray").innerText = doubledArray.join(", ");
    document.getElementById("evenNumbers").innerText = evenNumbers.join(", ");
    document.getElementById("sum").innerText = sum;
  }