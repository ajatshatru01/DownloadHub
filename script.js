
document.getElementById("user-email").textContent = JSON.parse(localStorage.getItem("user")).email;

const appList = document.getElementById("app-list");
const searchInput = document.getElementById("search");

let currentCategory = "apps";
let allItems = []; 

document.addEventListener("DOMContentLoaded", () => {
  allItems = items; 
  renderItems();
});


searchInput.addEventListener("input", () => {
  renderItems();
});

document.querySelectorAll('.section-button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.section-button').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.category;
    renderItems();
  });
});

function renderItems() {
  const keyword = searchInput.value.toLowerCase();

  const filtered = allItems.filter(item =>
    item.category === currentCategory &&
    item.name.toLowerCase().includes(keyword)
  );

  appList.innerHTML = "";

  if (filtered.length === 0) {
    appList.innerHTML = "<p>No matching items found.</p>";
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.innerHTML = `
      <a href="app.html?id=${item.id}">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p>⭐ ${item.rating}</p>
      </a>
    `;
    appList.appendChild(card);
  });
}
