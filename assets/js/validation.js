var precioInput = document.getElementById("precio");
let permitidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];

precioInput.addEventListener("keypress", (e) => {
  e.preventDefault();
  if (permitidas.includes(e.key)) {
    precioInput.value += e.key;
  }

  let reg = /([,][0-9][0-9])/g;

  if (precioInput.value.match(reg)) {
    permitidas = [];
  } else {
    permitidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
  }
  if (precioInput.value.includes(",") && !precioInput.value.match(reg)) {
    permitidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  if (
    precioInput.value.charAt(0) == "0" ||
    precioInput.value.charAt(0) == ","
  ) {
    precioInput.value = "";
  }
  if (!precioInput.value.includes(",")) {
    precioInput.onblur = () => {};
  }
});
