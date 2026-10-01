const param = new URLSearchParams(window.location.search);
const selectedID = param.get("id");
console.log("selectedID", selectedID);

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedID}`;
console.log("detailURL", detailURL);
// Et template literal (backticks) sætter ID'et ind i URL'en med ${...}.
// Resultatet er f.eks. https://kea-alt-del.dk/t7/api/products/1163,
// som returnerer data for netop det produkt.

const product_detail = document.querySelector(".product_detail");
// Finder det element i HTML'en med klassen product_detail.
// Det er her, det færdige produkt bliver sat ind.

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showDetails(data);
    });
  });
}

// fetch(url) sender en forespørgsel til API'et. Den er asynkron, så resten af koden venter ikke på svaret.
// Første .then får svaret (response).
// response.json() laver svaret om til et JavaScript-objekt. Det er også asynkront, derfor endnu en .then.
// Når dataen er klar, sendes den videre til showDetails(data).

function showDetails(detail) {
  console.log("detail", detail);
  product_detail.innerHTML += `<article class="product_image">
                <img class="card_image" src="https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp" 
                alt="${detail.productdisplayname}">
        
                <p class="product_category">${detail.brandname} - ${detail.articletype}</p>
                <h1 class="detail_mode">${detail.productdisplayname}</h1>
                <p class="price">${detail.price}</p>
                
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>

                <div class="product_details">
                    <p>Farve: ${detail.basecolour}</p>
                    <p>Kategori: Accessories</p>
                </div>

                <button class="cart_button">
                    Læg i kurv
                </button>

                <button class="save_button">
                    Gem produkt
                </button>
            </article>`;
  document.querySelector(".card_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp`;
}

loadData(detailURL);

// detail er produktobjektet fra API'et (med felter som id, brandname, price, basecolour osv.).
// innerHTML += tilføjer HTML til containeren. Bemærk +=: kaldes funktionen to gange, vises produktet to gange. = overskriver i stedet.
