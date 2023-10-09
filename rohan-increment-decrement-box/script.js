const display = document.getElementsByClassName("display");
const incrementbtn = document.getElementById("btn1");
const decrementbtn = document.getElementById("btn2");
 
let a = 0;

incrementbtn.addEventListener("click", function () {
  a++ // we need to calculate the value of a and then we should display it.
  console.log(a);
  display[0].innerHTML = a;
});

decrementbtn.addEventListener("click", function () {
    if(a>=1){
  a--
  console.log(a);
  display[0].innerHTML = a;
    }
});