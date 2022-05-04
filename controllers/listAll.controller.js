import { productServices } from "../service/product-service.js";

const listaProductosTodos = (
  productoImg,
  nombre,
  precio,
  id,
  categoriaPrincipal
) => {
  const lista = document.querySelector("[data-listaEdit]");
  const linea = document.createElement("li");

  linea.setAttribute("class", "productoEdit");

  const contenido = `<div class="productoEdit__imgContainer">
                            <img src="${productoImg}" alt="${nombre}" class="imgEditar">
                            <div class="editContainer">
                                <i class="fa-solid fa-trash" id="delete-${id}"></i>
                                <i class="fa-solid fa-pencil" id="edit-${id}"></i>
                            </div>
                        </div>
                        <h3 class="nombreProducto">${nombre}</h3>
                        <h3 class="precio">${precio}</h3>
                        <a href="./producto.html?id=${id}&categoria=${categoriaPrincipal}"><h3 class="verProducto">Ver Producto</h3></a>
                    `;
  linea.innerHTML = contenido;

  const borrar = linea.querySelector(`#delete-${id}`);
  const edit = linea.querySelector(`#edit-${id}`);

  edit.addEventListener("click", () => {
    window.location.href = `../edit-product.html?id=${id.replace("edit-", "")}`;
  });

  borrar.addEventListener("click", () => {
    const id = borrar.id;

    productServices
      .productDelete(id.replace("delete-", ""))
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });
  lista.appendChild(linea);
  return lista;
};

productServices
  .productLista()
  .then((data) => {
    data.forEach((data) => {
      listaProductosTodos(
        data.productoImg,
        data.nombre,
        data.precio,
        data.id,
        data.categoriaPrincipal
      );
    });
  })
  .catch((err) => alert("Ocurrió un error"));
