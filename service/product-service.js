const productLista = () =>
  fetch("http://localhost:3000/producto").then((response) => response.json());

const productObtener = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((response) =>
    response.json()
  );
};

const productDelete = () => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const productEdit = (
  nombre,
  precio,
  descripcion,
  img,
  categoriaPrincipal,
  categoriaSecundaria,
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
      img,
      categoriaPrincipal,
      categoriaSecundaria,
    }),
  });
};

const productNew = (
  nombre,
  precio,
  descripcion,
  productoImg,
  categoriaPrincipal,
  categoriaSecundaria
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
      categoriaSecundaria,
      id: uuid.v4(),
    }),
  });
};

export const productServices = {
  productLista,
  productObtener,
  productDelete,
  productEdit,
  productNew,
};
