const productContainer = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<a href="product.html" class="product">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
         
          <h4>${product.productdisplayname}</h4>
          <div class="price">
            <p >${product.price}dkk</p>
          </div>
        </a>`;
    })
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
