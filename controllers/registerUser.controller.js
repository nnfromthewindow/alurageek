import { userServices } from "../service/user-service.js";

const formRegister = document.getElementById("registerForm");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const repassword = document.getElementById("repassword");
  if (password.value == repassword.value) {
    userServices
      .userRegister(email.value, password.value)

      .then(() => {
        window.location.href = "../regexitoso.html";
      });
  } else {
    alert("Las dos contraseñas no coinciden, intentelo de nuevo");
  }
});
