const param = new URLSearchParams(window.location.search);
const selectedCategory = param.get("category");
console.log("selectedCategory", selectedCategory);

const productURL = `https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}&limit=100`;
const listContainer = document.querySelector(".product_grid");
function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showProducts(data);
    });
  });
}

function showProducts(products) {
  console.log("First product", products[0]);
  console.log("Number of products", products.length);
  listContainer.innerHTML = "";
  products.forEach((product) => {
    let soldOutClass;
    if (product.soldout) {
      soldOutClass = "soldout";
    }
    listContainer.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="billed" />   
                    <h2>${product.productdisplayname}</h2>
                    <h3>1200,-</h3>
                    <p><a href="produkt.html?id=${product.id}">Læs mere</a></p>
                    <p class="soldout_tag">Udsolgt</p>
                </article>`;
  });
}
getData(productURL);
