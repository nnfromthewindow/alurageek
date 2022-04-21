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

/*

const listaStarWars = document.querySelector("[data-listaStarwars]");

const listaStore = () => {
  productServices.productLista().then((data) => {
    data.forEach(({ productoImg, nombre, precio, id }) => {
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
      listaStarWars.appendChild(lineaHtml);
      return listaStarWars;
    });
  });
  listaStore();
  /*
  const listaStarWars = document.querySelector("[data-listaStarwars]");
  const newItemStarWars = `<li class="producto">
                    <div class="producto__imgContainer">
                       <img src="https://images.unsplash.com/photo-1620138694717-07141b500f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" class="imgStore">
                    </div>
                    <h3 class="nombreProducto">Producto XYZ</h3>
                    <h3 class="precio">$60,00</h3>
                    <a href="./producto.html"><h3 class="verProducto">Ver Producto</h3></a>
                </li>`;

};
listaStore();
*/
