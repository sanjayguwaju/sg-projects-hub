let signupForm = document.querySelector(".my-form");
let email = document.getElementsById("email");
let password = dcument.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Email:", email.value);
    console.log("Password", password.value);
});

function onChange(){
    if (confirmPassword.value === password.value){
        confirmPassword.setCustomValidity("");
    } else{
        confirmPassword.setCustomValidity("Password do not match");
    }
}

password.addEventListener("change", onChange);
confirmPassword.addEventListener("change", onChange);