function buildProducts(products) {
  var div = document.createElement("div");
  div.className = "products";

  for (var i = 0; i < products.length; i++) {
    div.appendChild(buildProduct(products[i]));
  }

  return div;
}

function buildProduct(product) {
  var div = document.createElement("div");
  div.className = "product";

  var title = document.createElement("span");
  title.textContent = product.title;
  div.appendChild(title);

  var picture = document.createElement("img");
  picture.src = product.picture;
  div.appendChild(picture);

  var price = document.createElement("span");
  price.textContent = product.price;
  div.appendChild(price);

  return div;
}
