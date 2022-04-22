import { productServices } from "../service/product-service.js";

const listaProductosTodos = (productoImg, nombre, precio, id) => {
  const lista = document.querySelector("[data-listaEdit]");
  const linea = document.createElement("li");

  linea.setAttribute("class", "productoEdit");

  const contenido = `<div class="productoEdit__imgContainer">
                            <img src="${productoImg}" alt="${nombre}" class="imgEditar">
                            <div class="editContainer">
                                <i class="fa-solid fa-trash"></i>
                                <i class="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                        <h3 class="nombreProducto">${nombre}</h3>
                        <h3 class="precio">${precio}</h3>
                        <a href="./producto.html?id=${id}"><h3 class="verProducto">Ver Producto</h3></a>
                    `;
  linea.innerHTML = contenido;
  lista.appendChild(linea);
  return lista;
};

productServices.productLista().then((data) => {
  data.forEach((data) => {
    listaProductosTodos(data.productoImg, data.nombre, data.precio, data.id);
  });
});
