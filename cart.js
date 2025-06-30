let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCartCount();
  alert(`${product} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  let summary = "Cart Items:\n";
  let total = 0;
  cart.forEach((item, i) => {
    summary += `${i + 1}. ${item.product} - ₹${item.price}\n`;
    total += item.price;
  });
  summary += `\nTotal: ₹${total}`;
  alert(summary);
}
