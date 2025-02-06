const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

let productContainer = document.querySelector(".product");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `

        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname} " />
         
        <div class="order_information"> 
        <h4>${data.brandname}</h4>
        <div>${data.usagetype} - ${data.articletype}</div>
          <h1>${data.productdisplayname} </h1>
          <div class="price">
      <p class="${data.discount && "old_price"}">${data.price}dkk</p>
          <p class="tilbud ${data.discount && "show"}">
          ${Math.ceil(data.price - data.price * (data.discount / 100))}DKK (${data.discount}% OFF)</p>
    
          </div>
          
          <div class="sizes">
          <form>
          <input type="radio" id="small" name="size" value="SMALL" />
          <label for="small">S</label><br />
          <input type="radio" id="medium" name="size" value="MEDIUM" />
          <label for="medium">M</label><br />
          <input type="radio" id="large" name="size" value="LARGE" />
          <label for="large">L</label>
          </form>
          </div>
          <div class=" basket ${data.discount && "show"}"><a>Out of stock</a></div>
          <div class=" basket ${!data.discount && "show"}"><a>Add to bag</a></div>
          

          <div class="divider"></div>

          <h2>Description</h2>
          <p> ${data.description}</p>

          
          <div class="divider"></div>
          <dl class="product_information">
            <dt>Gender</dt>
            <dd>${data.gender}</dd>
            <dt>Category</dt>
            <dd>${data.category}</dd>
            <dt>Season</dt>
            <dd>${data.season}</dd>
            <dt>Production year</dt>
            <dd>${data.productionyear}</dd>
            <dt>Usage</dt>
            <dd>${data.usagetype}</dd>
          </dl>
        </div>
      </div>`;
  });
