const translations = {
  pl: {
    title: "Menu drinków",
    footer: "Najlepszym podziękowaniem będzie Twoja opinia.",
    categories: {
      all: "Wszystkie",
      vodka: "Wódka",
      whiskey: "Whiskey & Bourbon",
      rum: "Rum",
      liqueur: "Likier",
      gin: "Gin",
      non_alcoholic: "Bezalkoholowe"
    }
  },
  en: {
    title: "Cocktail Menu",
    footer: "The best thank you is your opinion.",
    categories: {
      all: "All",
      vodka: "Vodka",
      whiskey: "Whiskey & Bourbon",
      rum: "Rum",
      liqueur: "Liqueur",
      gin: "Gin",
      non_alcoholic: "Non-alcoholic"
    }
  }
};

let language = "pl";
let currentCategory = "all";

function changeLanguage(lang) {
  language = lang;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("footer-text").textContent = translations[lang].footer;
  renderCategories();
  renderCocktails();
}

function renderCategories() {
  const categories = ['all', 'vodka', 'whiskey', 'rum', 'liqueur', 'gin', 'non_alcoholic'];
  const container = document.getElementById("category-buttons");
  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = translations[language].categories[cat];
    btn.onclick = () => {
      currentCategory = cat;
      renderCocktails();
    };
    container.appendChild(btn);
  });
}

function renderCocktails() {
  const container = document.getElementById("cocktail-list");
  container.innerHTML = '';
  const filtered = cocktails.filter(c => currentCategory === 'all' || c.category === currentCategory);
  filtered.forEach(c => {
    const div = document.createElement("div");
    div.className = 'cocktail-card';
    const name = document.createElement("h2");
    name.textContent = c.name[language];
    div.appendChild(name);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement("p");
      p.textContent = ing;
      div.appendChild(p);
    });
    container.appendChild(div);
  });
}

window.onload = () => {
  renderCategories();
  renderCocktails();
};
