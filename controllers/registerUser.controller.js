import { userServices } from "../service/user-service.js";

const formRegister = document.getElementById("registerForm");

formRegister.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const repassword = document.getElementById("repassword");

  const listaUsuarios = await userServices.userGet();
  const listaEmails = [];
  listaUsuarios.forEach((usuario) => {
    listaEmails.push(usuario.email);
  });
  if (listaEmails.includes(email.value)) {
    return alert("La dirección de email ya se encuentra registrada");
  }

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
