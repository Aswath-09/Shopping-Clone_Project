const products = [
  { id:1, name:"T-Shirt", price:299, img: "coolie.jpg"},
  { id:2, name:"Shoes", price:999, img:"shoe.jpg" },
  { id:3, name:"Jeans", price:799, img:"jeans.jpg" },
  { id:4, name:"watch", price:1099, img:"watch.jpg" },
  { id:5, name:"iphone 15 pro max", price:139999, img:"iphone.jpg" },
  { id:6, name:"Muscleblaze gold whey protein", price:4399, img:"whey.jpg" },
  { id:7, name:"Akrapovic exhaust", price:2399, img:"exhaust.jpg" },
];

const prodContainer = document.getElementById("products");
products.forEach(p=>{
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h4>${p.name}</h4>
    <p>₹${p.price}</p>
    <button onclick="alert('Added ${p.name}!')">Add to Cart</button>
  `;
  prodContainer.appendChild(card);
});
let end = new Date("Aug 9, 2025 23:59:59").getTime();
let x = setInterval(() => {
  let now = new Date().getTime();
  let d = end - now;

  if (d < 0) {
    clearInterval(x);
    document.getElementById("offer-timer").innerHTML = "Offer has ended!";
  } else {
    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((d % (1000 * 60)) / 1000);
    document.getElementById("offer-timer").innerHTML = `Offer ends in: ${days}d ${hrs}h ${min}m ${sec}s`;
  }
}, 1000);