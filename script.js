// Product Data
const products = [
  { name: "Laptop", price: 65000, category: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Headphones", price: 2000, category: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Shoes", price: 1500, category: "Fashion", image: "https://via.placeholder.com/150" },
  { name: "T-Shirt", price: 500, category: "Fashion", image: "https://via.placeholder.com/150" },
  { name: "Book - JavaScript", price: 400, category: "Books", image: "https://via.placeholder.com/150" },
  { name: "Cookware Set", price: 2500, category: "Home", image: "https://via.placeholder.com/150" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Load categories
function loadCategories() {
  const categories = ["all", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Show products
function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card col-md-3 p-2";
    card.innerHTML = `
      <img src="${p.image}" class="card-img-top" alt="${p.name}">
      <div class="card-body">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">₹${p.price}</p>
        <span class="badge bg-primary">${p.category}</span>
      </div>
    `;
    productList.appendChild(card);
  });
}

// Filter products
function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchText) &&
    (selectedCategory === "all" || p.category === selectedCategory)
  );

  displayProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Init
loadCategories();
displayProducts(products);
