const cuadro = document.querySelector("[data-cuadro]");

cuadro.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("over");
});
cuadro.addEventListener("dragleave", (e) => {
  e.preventDefault();
  console.log("leave");
});

const processFile = (file) => {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

  const fileReader = new FileReader();
  const id = `image-${Math.random().toString(32).substring(7)}`;
  console.log(`id= ${id}`);

  fileReader.addEventListener("load", (e) => {
    const fileUrl = fileReader.result;
    console.log(fileUrl);
  });
};

cuadro.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files;
  console.log(file);
  console.log(processFile(file));
  processFile(file);

  //console.log(e);
});
