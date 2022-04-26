const cuadro = document.querySelector("[data-cuadro]");

cuadro.addEventListener("dragover", (e) => {
  e.preventDefault();
});
cuadro.addEventListener("dragleave", (e) => {
  e.preventDefault();
});

cuadro.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  //console.log(file.type);

  processFile(file);

  //console.log(e);
});
const processFile = (file) => {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();
    const id = `image-${Math.random().toString(32).substring(7)}`;
    //console.log(`id= ${id}`);

    fileReader.addEventListener("load", (e) => {
      const fileUrl = fileReader.result;
      console.log(fileUrl);
    });

    fileReader.readAsDataURL(file);
  } else {
    alert("Hubo un error");
  }
};
