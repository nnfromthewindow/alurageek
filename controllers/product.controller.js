import { productServices } from "../service/product-service.js";

const productoPagina = (productoImg, nombre, precio, descripcion) => {
  var pageTitle = document.getElementById("pageTitle");
  pageTitle.innerText += nombre;

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
    alert("Hubo un error");
  }

  productServices
    .productObtener(id)
    .then(({ productoImg, nombre, precio, descripcion }) =>
      productoPagina(productoImg, nombre, precio, descripcion)
    )
    .catch((error) => alert("Hubo un error"));
};
obtenerInformacion();

const url = new URL(window.location);
const categoria = url.searchParams.get("categoria");
console.log(categoria);
const obtenerSimilares = async (categoria) => {
  if (categoria === null) {
    alert("Ha ocurrido un error");
  }

  const listaSimilares = document.getElementById("listaSimilares");

  try {
    const lista = await productServices
      .productLista()
      .then((response) =>
        response.filter((resp) => resp.categoriaPrincipal == categoria)
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
      listaSimilares.appendChild(li);
    });
  } catch (error) {
    alert("Hubo un error al cargar la página");
  }
};
obtenerSimilares(categoria);
