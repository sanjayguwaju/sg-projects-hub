const contactForm = document.getElementById("contactForm");
const resetBtn = document.getElementById("resetBtn");

const savedFormData = JSON.parse(localStorage.getItem("formData")) || {};
document.getElementById("name").value = savedFormData.name || "";
document.getElementById("email").value = savedFormData.email || "";
document.getElementById("message").value = savedFormData.message || "";

const saveFormData = () => {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
};

const resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  saveFormData();
};


contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveFormData();
  alert("Form submitted!");
});

resetBtn.addEventListener("click", resetForm);

