const kategorier = document.querySelector(".kategorier");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  const markup = categories.map((category) => `<a href="productlist.html?categories=${category.category}">${category.category}</a>`).join("");
  kategorier.innerHTML = markup;
}
