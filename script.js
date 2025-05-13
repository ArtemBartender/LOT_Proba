let language = 'pl';
let categoryFilter = 'all';

function setLanguage(lang) {
  language = lang;
  renderCategories();
  renderCocktails();
  updateFooter();
}

function setCategory(category) {
  categoryFilter = category;
  renderCocktails();
  updateFooter();
}

function renderCategories() {
  const categories = {
    all: { pl: "Wszystkie", en: "All" },
    vodka: { pl: "Wódka", en: "Vodka" },
    whiskey: { pl: "Whiskey & Bourbon", en: "Whiskey & Bourbon" },
    rum: { pl: "Rum", en: "Rum" },
    liqueur: { pl: "Likier", en: "Liqueur" },
    gin: { pl: "Gin", en: "Gin" },
    nonalcoholic: { pl: "Bezalkoholowe", en: "Non-Alcoholic" }
  };
  const container = document.getElementById("category-buttons");
  container.innerHTML = '';
  for (const [key, val] of Object.entries(categories)) {
    const btn = document.createElement("button");
    btn.innerText = val[language];
    btn.className = "cat-btn";
    btn.onclick = () => setCategory(key);
    container.appendChild(btn);
  }
}

function renderCocktails() {
  const list = document.getElementById("cocktail-list");
  list.innerHTML = '';
  const filtered = cocktails.filter(c => categoryFilter === 'all' || c.category === categoryFilter);
  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "cocktail";
    const title = document.createElement("div");
    title.className = "cocktail-name";
    title.innerText = c.name[language];
    const ing = document.createElement("div");
    ing.className = "ingredients";
    ing.innerHTML = c.ingredients[language].join("<br>");
    card.appendChild(title);
    card.appendChild(ing);
    list.appendChild(card);
  });
}

window.onload = () => {
  updateFooter();
  renderCategories();
  renderCocktails();
  updateFooter();
};

function updateFooter() {
  document.getElementById("footer-text").innerText =
    language === 'pl'
      ? "Najlepszym podziękowaniem będzie Twoja opinia."
      : "The best thank you is your review.";
}