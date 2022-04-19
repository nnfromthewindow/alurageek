var button = document.querySelector("[data-searchBtn]");
var search = document.querySelector("[data-search]");
var searchInput = document.querySelector("[data-searchInput]");

button.addEventListener("click", () => {
  search.style.opacity = 1;
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  search.style.opacity = 0;
});
