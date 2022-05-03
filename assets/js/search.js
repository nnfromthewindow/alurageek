import { productServices } from "../../service/product-service.js";

const buscarBtn = document.getElementById("buscarBtn");
var buscarInput = document.getElementById("buscarInput");
const searchResponsiveBtn = document.getElementById("searchResponsiveBtn");
const searchResponsive = document.getElementById("searchResponsive");
var searchInput = document.getElementById("inputResponsive");

searchResponsiveBtn.addEventListener("click", () => {
  searchResponsive.style.opacity = 1;
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  searchResponsive.style.opacity = 0;
});

buscarBtn.addEventListener("click", () => {
  var texto = buscarInput.value;
  console.log(texto.toUpperCase());
  const obtenerBusqueda = async (texto) => {
    if (texto.length == 0) {
      alert("El campo de busqueda no puede estar vacío");
    }

    const listaBusqueda = document.getElementById("listaBusqueda");

    try {
      const lista = await productServices
        .productLista()
        .then((response) =>
          response.filter((resp) => resp.categoriaPrincipal == texto)
        );

      lista.forEach((item) => {
        const li = document.createElement("li");
        li.setAttribute("class", "productoSimilar");
        const lineaItem = `<div class="producto__imgContainer">
                    <img src="${item.productoImg}" alt="${item.nombre}" class="imgEditar">
                    </div>
                    <h3 class="nombreProdSimilar">${item.nombre}</h3>
                    <h3 class="precioProdSimilar">${item.precio}</h3>
                    <a href="./producto.html?id=${item.id}&categoria=${item.categoriaPrincipal}"><h3 class="verProdSimilar">Ver Producto</h3></a>`;
        li.innerHTML = lineaItem;
        listaBusqueda.appendChild(li);
      });
    } catch (error) {
      alert("Hubo un error al cargar la página");
    }
  };
  obtenerBusqueda(texto);

  /* window.location.href = `../buscar.html?buscar=${buscarInput.value}`;
  const url = new URL(window.location);
  const texto = url.searchParams.get("buscar");
  console.log(texto);
  const listaBusqueda = async (texto) => {};


window.location.href = `../buscar.html?buscar=${buscarInput.value}`;


*/
});
