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

const buscarImg = document.getElementById("buscarImagenDisco");

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

const formulario = document.getElementById("dataForm");
const img = document.querySelector("[data-cuadro]");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const categoriaPrincipal = document.getElementById("categoriaPrincipal");
const descripcion = document.getElementById("descripcion");
const clear = document.querySelector("[data-clear]");

const getInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  try {
    const producto = await productServices.detalleProducto(id);

    if (
      producto.productoImg &&
      producto.nombre &&
      producto.precio &&
      producto.descripcion &&
      producto.categoriaPrincipal
    ) {
      img.style.backgroundImage = `url(${producto.productoImg})`;
      img.style.backgroundSize = "cover";
      img.style.backgroundRepeat = "no-repeat";
      img.style.backgroundPosition = "center";
      clear.style.display = "none";
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
      categoriaPrincipal.selectedIndex.text = producto.categoriaPrincipal;
    } else {
      throw new Error();
    }
  } catch (error) {}
  if (id === null) {
    alert("Hubo un error al cargar la página");
  }
};
getInfo();

function validarNombre() {
  let reg = /(^\S+\w.*)/g;
  if (nombre.value == "") {
    nombre.setCustomValidity("El nombre del producto no puede estar vacío");
  } else if (!nombre.value.match(reg) && nombre.value != "") {
    nombre.setCustomValidity(
      "El nombre del producto no puede empezar con un espacio en blanco"
    );
  } else if (nombre.value.match(reg)) {
    nombre.setCustomValidity("");
  }
}
nombre.addEventListener("focus", validarNombre);

precio.addEventListener("blur", () => {
  if (precio.value != "") {
    var valor = precio.value;
    valor = valor.replace(",", ".");
    valor = parseFloat(valor);
    valor = valor.toLocaleString("ES-ar");
    precio.value = valor;
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const img = document
    .querySelector("[data-cuadro]")
    .style.backgroundImage.slice(4, -1)
    .replace(/"/g, "");
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  var categoriaPrincipal = document.getElementById("categoriaPrincipal");
  categoriaPrincipal =
    categoriaPrincipal.options[categoriaPrincipal.selectedIndex].text;
  const descripcion = document.getElementById("descripcion").value;

  productServices
    .productEdit(nombre, precio, descripcion, img, categoriaPrincipal, id)
    .then(() => {
      window.location.href = "../lista-user.html";
    });
});
