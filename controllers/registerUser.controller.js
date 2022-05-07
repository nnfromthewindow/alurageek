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
        window.location.href = "./regexitoso.html";
      });
  } else {
    alert("Las dos contraseñas no coinciden, intentelo de nuevo");
  }
});
function validarPass() {
  let reg = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/g;
  if (!password.value.match(reg)) {
    password.setCustomValidity(
      "La contraseña debe comenzar con mayuscula, al menos contener un numero y tener entre 6 y 12 caracteres"
    );
  } else {
    password.setCustomValidity("");
  }
}
password.addEventListener("input", validarPass);

function validarRePass() {
  let reg = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/g;
  if (!repassword.value.match(reg)) {
    repassword.setCustomValidity(
      "La contraseña debe comenzar con mayuscula, al menos contener un numero y tener entre 6 y 12 caracteres"
    );
  } else {
    repassword.setCustomValidity("");
  }
}
repassword.addEventListener("input", validarRePass);
