let productId = 1538;
let productContainer = document.querySelector(".product");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `

        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Blue T20 Indian Cricket Jersey" />
        <div class="order_information">
          <h1>${data.productdisplayname} </h1>
          <div class="price">
            <p class="old_price">${data.price}</p>
            <p class="tilbud active">
              100kr
              (28% OFF)
            </p>
          </div>

          <form>
            <input type="radio" id="small" name="size" value="SMALL" />
            <label for="small">S</label><br />
            <input type="radio" id="medium" name="size" value="MEDIUM" />
            <label for="medium">M</label><br />
            <input type="radio" id="large" name="size" value="LARGE" />
            <label for="large">L</label>
          </form>
          <div class="udsolgt"><a>Out of stock</a></div>

          <div class="divider"></div>

          <dl class="product_information">
            <dt>gender</dt>
            <dd>Male</dd>
            <dt>category</dt>
            <dd>Apparel</dd>
            <dt>season</dt>
            <dd>Summer</dd>
            <dt>Model name</dt>
            <dd>Blue T20 Indian Cricket Jersey</dd>
            <dt>Color</dt>
            <dd>Blue</dd>
            <dt>Brand</dt>
            <dd>Nike</dd>
            <dt>production year</dt>
            <dd>2013</dd>
            <dt>usage</dt>
            <dd>sports</dd>
          </dl>
        </div>
      </div>`;
  });
