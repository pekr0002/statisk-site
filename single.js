let productId = 1538;
let productContainer = document.querySelector(".product");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `

        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname} " />
         
        <div class="order_information"> 
        <h4>${data.brandname}</h4>
          <h1>${data.productdisplayname} </h1>
          <div class="price">
            <p>${data.price}dkk</p>
    
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
            <dd>${data.gender}</dd>
            <dt>category</dt>
            <dd>${data.category}</dd>
            <dt>season</dt>
            <dd>${data.season}</dd>
            <dt>production year</dt>
            <dd>${data.productionyear}</dd>
            <dt>usage</dt>
            <dd>${data.usagetype}</dd>
          </dl>
        </div>
      </div>`;
  });
