import { productServices } from "../service/product-service.js";

const getInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const cuadro = document.querySelector("[data-cuadro]");
  const formulario = document.querySelector("[data-form]");
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const categoriaPrincipal = document.getElementById("categoriaPrincipal");
  const descripcion = document.getElementById("descripcion");
  const sendBtn = document.getElementById("sendBtn");
  const clear = document.querySelector("[data-clear]");
  try {
    const producto = await productServices.detalleProducto(id);
    console.log(producto.productoImg);
    if (
      producto.productoImg &&
      producto.nombre &&
      producto.precio &&
      producto.descripcion &&
      producto.categoriaPrincipal
    ) {
      cuadro.style.backgroundImage = `url(${producto.productoImg})`;
      cuadro.style.backgroundSize = "cover";
      cuadro.style.backgroundRepeat = "no-repeat";
      cuadro.style.backgroundPosition = "center";
      clear.style.display = "none";
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
      categoriaPrincipal.selectedIndex.text = producto.categoriaPrincipal;
    } else {
      throw new Error();
    }
  } catch (error) {}
  if (id === null) {
    alert("Hubo un error al cargar la página");
  }
};
getInfo();
