import { userServices } from "../service/user-service.js";

const formLogin = document.getElementById("formLogin");
const mail = document.getElementById("email");
const pass = document.getElementById("password");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  var valid = false;
  userServices
    .userGet()
    .then((data) => {
      data.forEach(({ email, password }) => {
        if (email == mail.value && password == pass.value) {
          valid = true;
          window.location.href = "/lista-user.html";
        }
      });
      console.log(valid);
      if (valid == false) {
        alert("La contraseña o el email no es valido");
      }
    })
    .catch((err) => console.log(err));
});

function validarPass() {
  let reg = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/g;
  if (!pass.value.match(reg)) {
    pass.setCustomValidity(
      "La contraseña debe comenzar con mayuscula, al menos contener un numero y tener entre 6 y 12 caracteres"
    );
  } else {
    pass.setCustomValidity("");
  }
}
pass.addEventListener("input", validarPass);
