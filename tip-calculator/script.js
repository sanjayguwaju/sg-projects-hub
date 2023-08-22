const calculateButton = document.getElementById("calculateButton");
const billAmountInput = document.getElementById("billAmount");
const percentageTipInput = document.getElementById("percentageTip");
const tipAmountOutput = document.getElementById("tipAmount");
const totalOutput = document.getElementById("total");

// Add click event listener to the calculate button
calculateButton.addEventListener("click", function() {
  // Parse input values as floats
  const billAmount = parseFloat(billAmountInput.value);
  const percentageTip = parseFloat(percentageTipInput.value);

  // Check if inputs are valid numbers
  if (!isNaN(billAmount) && !isNaN(percentageTip)) {
    // Calculate tip and total
    const tipAmount = (billAmount * percentageTip) / 100;
    const total = billAmount + tipAmount;

    // Display calculated values with 2 decimal places
    tipAmountOutput.value = tipAmount.toFixed(2);
    totalOutput.value = total.toFixed(2);
  }
});