
let language = 'pl';
let currentCategory = 'all';

const translations = {
  pl: {
    title: "Menu drinków",
    footer: "Najlepszym podziękowaniem będzie Twoja opinia.",
    categories: ["Wszystkie", "Wódka", "Whiskey & Bourbon", "Rum", "Likier", "Gin", "Bezalkoholowe"]
  },
  en: {
    title: "Cocktail Menu",
    footer: "The best thank you is your opinion.",
    categories: ["All", "Vodka", "Whiskey & Bourbon", "Rum", "Liqueur", "Gin", "Non-alcoholic"]
  }
};

function changeLanguage(lang) {
  language = lang;
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('footer-text').textContent = translations[lang].footer;
  renderCategories();
  renderCocktails();
}

function renderCategories() {
  const container = document.getElementById('category-buttons');
  container.innerHTML = '';
  const cats = ['all', 'vodka', 'whiskey', 'rum', 'liqueur', 'gin', 'non_alcoholic'];
  translations[language].categories.forEach((name, index) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.onclick = () => {
      currentCategory = cats[index];
      renderCocktails();
    };
    container.appendChild(btn);
  });
}

function renderCocktails() {
  const container = document.getElementById('cocktail-list');
  container.innerHTML = '';
  const filtered = cocktails.filter(c => currentCategory === 'all' || c.category === currentCategory);
  filtered.forEach(c => {
    const div = document.createElement('div');
    div.className = 'cocktail-card';
    const name = document.createElement('h2');
    name.textContent = c.name[language];
    div.appendChild(name);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement('p');
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
