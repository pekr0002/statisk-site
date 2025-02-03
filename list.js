const productContainer = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) => `<a href="product.html" class="product">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
         
          <h4>${product.productdisplayname}</h4>
          <div class="price">
            <p >${product.price}dkk</p>
          </div>
        </a>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
