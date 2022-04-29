var precioInput = document.getElementById("precio");
let permitidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];

precioInput.addEventListener("keypress", (e) => {
  e.preventDefault();
  if (permitidas.includes(e.key)) {
    precioInput.value += e.key;
  }
  if (precioInput.value.includes(",")) {
    let max = precioInput.value.length + 2;

    if (precioInput.value.length > max) {
      console.log("hola");
    }
  }
});

/*
precioInput.addEventListener("keydown", (e) => {
  var letra = e.key;
  console.log(letra);
  
 let value = e.target.value;
  value.replace(/(.*[1-9])[,][0-9][0-9]/g, "");
  
});
*/
