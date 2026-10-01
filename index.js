"use strict";
console.log("Hello, World!");
const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const category_List_Container = document.querySelector(".forside");
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}
function showData(data) {
  console.log("DATA", data);
  let myInnerHtml = "";
  data.forEach((element) => {
    console.log(element);

    myInnerHtml += `<article class="category_list_container">
            <ul class="box">
                <li> <a href="produktliste.html?category=${element.category}">${element.category}</a></li>
            </ul>
        </article>`;
  });
  category_List_Container.innerHTML = myInnerHtml;
}
