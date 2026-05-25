const products = [
  { id:1, name:"T-Shirt", price:299, img:"coolie.jpg"},
  { id:2, name:"Shoes", price:999, img:"shoe.jpg"},
  { id:3, name:"Jeans", price:799, img:"jeans.jpg"},
  { id:4, name:"Watch", price:1099, img:"watch.jpg"},
  { id:5, name:"iPhone 15", price:139999, img:"iphone.jpg"},
  { id:6, name:"Protein", price:4399, img:"whey.jpg"},
  { id:7, name:"Exhaust", price:2399, img:"exhaust.jpg"},
  { id:8, name:"PS5", price:50299, img:"ps5.jpg"}
];

const container = document.getElementById("products");

function displayProducts() {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

function addToCart(name) {
  alert(name + " added to cart 🛒");
}

displayProducts();

/* TIMER */
let end = new Date("Feb 15, 2026 23:59:59").getTime();

setInterval(() => {
  let now = new Date().getTime();
  let diff = end - now;

  if (diff < 0) {
    document.getElementById("offer-timer").innerHTML = "Offer Ended";
    return;
  }

  let days = Math.floor(diff / (1000*60*60*24));
  let hrs = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  let min = Math.floor((diff % (1000*60*60))/(1000*60));
  let sec = Math.floor((diff % (1000*60))/1000);

  document.getElementById("offer-timer").innerHTML =
    `Offer ends in: ${days}d ${hrs}h ${min}m ${sec}s`;

}, 1000);
