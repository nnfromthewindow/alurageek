const productLista = () =>
  fetch("https://alurageekwebstore.herokuapp.com/producto/").then((response) =>
    response.json()
  );
//para usar json-server hacer los fetch en http://localhost:3000/producto
const productDelete = (id) => {
  return fetch(`https://alurageekwebstore.herokuapp.com/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`https://alurageekwebstore.herokuapp.com/producto/${id}`).then(
    (response) => response.json()
  );
};

const productEdit = (
  nombre,
  precio,
  descripcion,
  productoImg,
  categoriaPrincipal,
  id
) => {
  return fetch(`https://alurageekwebstore.herokuapp.com/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      precio,
      descripcion,
      productoImg,
      categoriaPrincipal,
    }),
  });
};

const productNew = (
  nombre,
  precio,
  descripcion,
  productoImg,
  categoriaPrincipal
) => {
  return fetch(`https://alurageekwebstore.herokuapp.com/producto/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      precio,
      descripcion,
      productoImg,
      categoriaPrincipal,
      id: uuid.v4(),
    }),
  });
};

export const productServices = {
  productLista,
  productDelete,
  productEdit,
  productNew,
  detalleProducto,
};
