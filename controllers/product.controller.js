import { productServices } from "../service/product-service.js";
//FUNCION PARA GENERAR PAGINA DE PRODUCTO

const productoPagina = (productoImg, nombre, precio, descripcion) => {
  const linea = document.querySelector("[data-productoSeleccionado]");

  const producto = document.createElement("div");
  producto.setAttribute("class", "productoSeleccionado");
  const contenido = `<div class="productoContainer">
            <div class="productoContainerImg">
                <img src="${productoImg}" alt="${nombre}" class="imgProducto">
            </div>
            <div class="producto__detailContainer">
                <h1 class="detail__titulo">${nombre}</h1>
                <h3 class="precioProducto">${precio}</h3>
                <p class="detail__description">${descripcion}</p>
            </div>`;
  producto.innerHTML = contenido;
  linea.appendChild(producto);
  return linea;
};

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "../error.html";
  }

  productServices
    .productObtener(id)
    .then(({ productoImg, nombre, precio, descripcion }) =>
      productoPagina(productoImg, nombre, precio, descripcion)
    )
    .catch((error) => alert("Hubo un error"));
};
obtenerInformacion();
