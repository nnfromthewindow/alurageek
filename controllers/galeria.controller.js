import { productServices } from "../service/product-service.js";

const categorias = ["Star Wars", "Consolas", "Diversos"];

const crearLinea = async (categoria) => {
  const galeria = document.getElementById("galeria");
  const linea = document.createElement("div");
  linea.setAttribute("class", "galeriaItem");
  linea.setAttribute("id", categoria);
  const newCategoria = `
            <div class="galeriaItem__titleContainer">
            <h2>${categoria}</h2>
            <h3><a href="./lista-categoria.html?categoria=${categoria}">Ver todo</a><i class="fa-solid fa-arrow-right"></i></h3>
            </div>
            <ul class="listaProductos" id="listaCategoria">
                
            </ul>
        `;
  linea.innerHTML = newCategoria;
  const listaCategoria = linea.querySelector("#listaCategoria");
  const lista = await productServices
    .productLista()
    .then((response) =>
      response.filter((resp) => resp.categoriaPrincipal == categoria)
    );

  lista.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("class", "producto");
    const lineaItem = `<div class="producto__imgContainer">
                    <img src="${item.productoImg}" alt="${item.nombre}" class="imgStore">
                    </div>
                    <h3 class="nombreProducto">${item.nombre}</h3>
                    <h3 class="precio">${item.precio}</h3>
                    <a href="./producto.html?id=${item.id}&categoria=${item.categoriaPrincipal}"><h3 class="verProducto">Ver Producto</h3></a>`;
    li.innerHTML = lineaItem;
    listaCategoria.appendChild(li);
  });

  galeria.appendChild(linea);
  return galeria;
};

categorias.forEach((categoria) => {
  crearLinea(categoria);
});
