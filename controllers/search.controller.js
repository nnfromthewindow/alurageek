import { productServices } from "../service/product-service.js";

const buscarBtn = document.getElementById("buscarBtn");
var buscarInput = document.getElementById("buscarInput");
const searchResponsiveBtn = document.getElementById("searchResponsiveBtn");
const searchResponsive = document.getElementById("searchResponsive");
var searchInputResponsive = document.getElementById("inputResponsive");
const buscarBtnResponsive = document.getElementById("buscarBtnResponsive");

searchResponsiveBtn.addEventListener("click", () => {
  searchResponsive.style.opacity = 1;
  searchInputResponsive.focus();
});

searchInputResponsive.addEventListener("blur", () => {
  searchResponsive.style.opacity = 0;
});

buscarBtn.addEventListener("click", (e) => {
  var texto = buscarInput.value;
  window.location.href = `../buscar.html?buscar=${texto}`;
});

buscarBtnResponsive.addEventListener("click", (e) => {
  var texto = searchInputResponsive.value;
  window.location.href = `../buscar.html?buscar=${texto}`;
  console.log(texto);
});

const listaBusqueda = document.getElementById("listaBusqueda");

const obtenerBusqueda = async () => {
  const url = new URL(window.location);
  const texto = url.searchParams.get("buscar");
  if (texto != null) {
    if (texto.length == 0) {
      alert("El campo de busqueda no puede estar vacío");
    }

    try {
      const lista = await productServices.productLista();
      var filter = [];
      var resultados = [];

      for (let i = 0; i < lista.length; i++) {
        filter.push(lista[i].nombre.toUpperCase());
      }
      for (let i = 0; i < filter.length; i++) {
        if (
          filter[i].includes(texto.toUpperCase()) ||
          filter[i].includes(texto.substring(0, texto.length / 2).toUpperCase())
        ) {
          resultados.push(lista[i]);
        }
      }

      resultados.forEach((item) => {
        const li = document.createElement("li");
        li.setAttribute("class", "productoEdit");
        const lineaItem = `<div class="producto__imgContainer">
                    <img src="${item.productoImg}" alt="${item.nombre}" class="imgEditar">
                    </div>
                    <h3 class="nombreProducto">${item.nombre}</h3>
                    <h3 class="precio">${item.precio}</h3>
                    <a href="./producto.html?id=${item.id}&categoria=${item.categoriaPrincipal}"><h3 class="verProducto">Ver Producto</h3></a>`;
        li.innerHTML = lineaItem;
        listaBusqueda.appendChild(li);
      });
    } catch (error) {
      alert("Hubo un error al cargar la página");
    }
  }
};

obtenerBusqueda();
