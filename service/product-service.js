const productLista = () =>
  fetch("http://localhost:3000/producto").then((response) => response.json());

const productDelete = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((response) =>
    response.json()
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
  return fetch(`http://localhost:3000/producto/${id}`, {
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
  return fetch(`http://localhost:3000/producto/`, {
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
