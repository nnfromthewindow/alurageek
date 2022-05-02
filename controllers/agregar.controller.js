import { productServices } from "../service/product-service.js";

const cuadro = document.querySelector("[data-cuadro]");

cuadro.addEventListener("dragover", (e) => {
  e.preventDefault();
});
cuadro.addEventListener("dragleave", (e) => {
  e.preventDefault();
});

cuadro.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  processFile(file);
});

var urlImageUpload = "";

const processFile = (file) => {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", (e) => {
      const fileUrl = fileReader.result;
      const clear = document.querySelector("[data-clear]");
      urlImageUpload = fileUrl;
      console.log(urlImageUpload);
      cuadro.style.backgroundImage = `url(${fileUrl})`;
      cuadro.style.backgroundSize = "cover";
      cuadro.style.backgroundRepeat = "no-repeat";
      cuadro.style.backgroundPosition = "center";
      clear.style.display = "none";
    });

    fileReader.readAsDataURL(file);
  } else {
    alert("El archivo no es valido");
  }
};

const buscarImg = document.getElementById("buscarBtn");

buscarImg.addEventListener("click", importData);

function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = () => {
    const file = input.files[0];
    processFile(file);
  };
  input.click();
}
const formulario = document.querySelector("[data-form]");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const categoriaPrincipal = document.getElementById("categoriaPrincipal");
const descripcion = document.getElementById("descripcion");
const sendBtn = document.getElementById("sendBtn");

function validarNombre() {
  if (nombre.value == "") {
    nombre.setCustomValidity("Ingrese el nombre del producto");
  } else {
    nombre.setCustomValidity("");
  }
}
nombre.addEventListener("focus", validarNombre);

function validarPrecio() {
  let reg = /([,][0-9][0-9])/g;
  if (!precio.value.match(reg)) {
    precio.setCustomValidity("Ingrese un precio con coma(,) y dos decimales");
  } else {
    precio.setCustomValidity("");
  }
}
precio.addEventListener("focus", validarPrecio);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (urlImageUpload == "") {
    alert("Adjunte una imagen");
  }

  if (
    nombre.value != "" &&
    precio.value != "" &&
    descripcion.value != "" &&
    urlImageUpload != ""
  ) {
    productServices
      .productNew(
        nombre.value,
        precio.value,
        descripcion.value,
        urlImageUpload,
        categoriaPrincipal.options[categoriaPrincipal.selectedIndex].text
      )
      .then((data) => {
        console.log(data);
      });
  }
});
