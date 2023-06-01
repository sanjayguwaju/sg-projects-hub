var months = [];
var monthList = document.getElementById("monthList");
var monthInput = document.getElementById("monthInput");
var monthForm = document.getElementById("monthForm");

// Load stored data on page load
window.addEventListener("load", function() {
  var storedData = localStorage.getItem("months");
  if (storedData) {
    months = JSON.parse(storedData);
    displayList();
  }
});

monthForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  addMonth();
});


// const hello = {
//   name: 'hello',
//   age: 20,
//   reverse: function addMonth() {
//     var month = monthInput.value.trim(); 
//     if (month !== '') {
//       months.push(month);
//       saveData();
//       displayList();
//       monthInput.value = '';
//     }
//   }
// }

// hello.rush()

function addMonth() {
  var month = monthInput.value.trim(); 
  if (month !== '') {
    months.push(month);
    saveData();
    displayList();
    monthInput.value = '';
  }
}

function deleteMonth() {
  if (months.length > 0) {
    months.pop();
    saveData();
    displayList();
  }
}

function reverseList() {
  months.reverse();
  saveData();
  displayList();
}

function displayLength() {
  // alert("Total number of months: " + months.length);
  document.getElementById("demo").innerHTML = "Total number of months: " + months.length;
  // document.body.innerHTML = "Total number of months: " + months.length;
}

function joinList() {
  var joinedList = months.join("+");
  // alert("Joined List: " + joinedList);
  document.getElementById("demo").innerHTML = "Joined List: " + joinedList;
}

function popMonth(a,b) {
  var poppedMonth = months.pop();
  alert("Popped Month: " + poppedMonth);
  saveData();
  displayList();
}

function pushMonth() {
  var month = monthInput.value.trim();
  if (month !== '') {
    months.push(month);
    saveData();
    displayList();
    monthInput.value = '';
  }
}

function shiftMonth() {
  var shiftedMonth = months.shift();
  alert("Shifted Month: " + shiftedMonth);
  saveData();
  displayList();
}

function unshiftMonth() {
  var monthInputValueJRaakkhyaxaTyoHo = monthInput.value.trim();
  if (monthInputValueJRaakkhyaxaTyoHo !== '') {
    months.unshift(monthInputValueJRaakkhyaxaTyoHo);
    saveData();
    displayList();
  }
}

function deleteMonthAtIndex() {
  var index = parseInt(prompt("Enter index to delete:"));
  if (!isNaN(index) && index >= 0 && index < months.length) {
    var deletedMonth = months.splice(index, 1)[0];
    alert("Deleted Month: " + deletedMonth);
    saveData();
    displayList();
  } else {
    alert("Invalid index!");
  }
}

function concatList() {
  var otherMonths = ["June", "July", "August"];
  var combinedList = months.concat(otherMonths);
  alert("Combined List: " + combinedList);
}

function flattenList() {
  var nestedList = [["September", "October"], ["November", "December"]];
  var flattenedList = nestedList.flat();
  alert("Flattened List: " + flattenedList);
}

function sliceList() {
  var start = parseInt(prompt("Enter start index:"));
  var end = parseInt(prompt("Enter end index:"));
  if (!isNaN(start) && !isNaN(end)) {
    var slicedList = months.slice(start, end);
    alert("Sliced List: " + slicedList);
  } else {
    alert("Invalid start or end index!");
  }
}

function saveData() {
  localStorage.setItem("months", JSON.stringify(months));
}

function displayList() {
  monthList.innerHTML = '';
  for (var i = 0; i < months.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(months[i]));
    monthList.appendChild(li);
  }
}

console.log(months)