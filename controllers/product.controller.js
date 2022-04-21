import { productServices } from "../service/product-service.js";

const crearLinea = (productoImg, nombre, precio, id) => {
  const lineaHtml = document.createElement("li");
  lineaHtml.setAttribute("class", "producto");
  lineaHtml.setAttribute("id", id);
  const newItemStarWars = `
                    <div class="producto__imgContainer">
                    <img src="${productoImg}" alt="${nombre}" class="imgStore">
                    </div>
                    <h3 class="nombreProducto">${nombre}</h3>
                    <h3 class="precio">${precio}</h3>
                    <a href="./producto.html?id=${id}"><h3 class="verProducto">Ver Producto</h3></a>`;
  lineaHtml.innerHTML = newItemStarWars;
  return lineaHtml;
};

const listaStarWars = document.querySelector("[data-listaStarwars]");

productServices.productLista().then((data) => {
  data.forEach(({ productoImg, nombre, precio, id }) => {
    const linea = crearLinea(productoImg, nombre, precio, id);
    listaStarWars.appendChild(linea);
  });
});
