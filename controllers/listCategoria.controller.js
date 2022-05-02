import { productServices } from "../service/product-service.js";

const url = new URL(window.location);
const categoria = url.searchParams.get("categoria");

const obtenerInformacion = async (categoria) => {
  if (categoria === null) {
    alert("Ha ocurrido un error");
  }

  var pageTitle = document.getElementById("pageTitle");
  const tituloCategoria = document.getElementById("tituloCategoria");
  const listaCategoria = document.getElementById("listaCategoria");
  pageTitle.innerText += categoria;
  const h1 = document.createElement("h1");
  h1.innerText = categoria;
  tituloCategoria.appendChild(h1);

  try {
    const lista = await productServices
      .productLista()
      .then((response) =>
        response.filter((resp) => resp.categoriaPrincipal == categoria)
      );

    lista.forEach((item) => {
      const li = document.createElement("li");
      li.setAttribute("class", "productoEdit");
      const lineaItem = `<div class="producto__imgContainer">
                    <img src="${item.productoImg}" alt="${item.nombre}" class="imgEditar">
                    </div>
                    <h3 class="nombreProducto">${item.nombre}</h3>
                    <h3 class="precio">${item.precio}</h3>
                    <a href="./producto.html?id=${item.id}"><h3 class="verProducto">Ver Producto</h3></a>`;
      li.innerHTML = lineaItem;
      listaCategoria.appendChild(li);
    });
  } catch (error) {
    alert("Hubo un error al cargar la página");
  }
};
obtenerInformacion(categoria);
