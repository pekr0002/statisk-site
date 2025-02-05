const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categories = urlParams.get("categories");
document.querySelector("h1").innerHTML = `<h1>${categories}</h1>`;

const productContainer = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${categories}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) => `<a href="product.html?id=${product.id}" class="product ">

      
          <div class="billedegrid">
            <img class="billede" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
            <div class="billede tilbud-label ${product.discount && "active"}">SALE</div>
         </div>
      
          <h4>${product.productdisplayname}</h4>
          <div>${product.usagetype} - ${product.articletype}</div>
          <div class="price">
            <p class="${product.discount && "old_price"}">${product.price}dkk</p>


            <p class="tilbud ${product.discount && "active"}">
            ${Math.ceil(product.price - product.price * (product.discount / 100))}DKK (${product.discount}% OFF)</p>
            </div>
            </a>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
