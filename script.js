let language = 'pl';
let currentCategory = 'all';

const translations = {
  pl: {
    header:      "Ważne, z kim podróżujesz",
    title:       "Menu drinków",
    footer:      "Najlepszym podziękowaniem będzie Twoja opinia.",
    surprise:    "Zaskocz mnie koktajlem",
    categories: {
      all:           "Wszystkie",
      vodka:         "Wódka",
      whiskey:       "Whiskey & Bourbon",
      rum:           "Rum",
      liqueur:       "Likier",
      gin:           "Gin",
      non_alcoholic: "Bezalkoholowe",
      beer:          "Piwo"
    }
  },
  en: {
    header:      "It matters who you’re traveling with.",
    title:       "Cocktail Menu",
    footer:      "The best thank you is your opinion.",
    surprise:    "Surprise me a cocktail",
    categories: {
      all:           "All",
      vodka:         "Vodka",
      whiskey:       "Whiskey & Bourbon",
      rum:           "Rum",
      liqueur:       "Liqueur",
      gin:           "Gin",
      non_alcoholic: "Non-alcoholic",
      beer:          "Beer"
    }
  }
};

function changeLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.getElementById("page-title").textContent = translations[lang].title;
  document.querySelector(".site-header h2").textContent = translations[lang].header;
  document.getElementById("footer-text").textContent = translations[lang].footer;
  document.getElementById("surprise-btn").textContent = translations[lang].surprise;
  renderCategories();
  renderCocktails();
}

function renderCategories() {
  const container = document.getElementById("category-buttons");
  container.innerHTML = "";
  Object.entries(translations[language].categories).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = () => {
      currentCategory = key;
      renderCocktails();
    };
    container.appendChild(btn);
  });
}

function renderCocktails() {
  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";

  const filtered = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );

  filtered.forEach(c => {
    // карточка-контейнер
    const card = document.createElement("div");
    card.className = "cocktail-card";

    // внутренняя обёртка для 3D-флипа
    const inner = document.createElement("div");
    inner.className = "card-inner";

    // передняя сторона
    const front = document.createElement("div");
    front.className = "card-front";
    const title = document.createElement("h2");
    title.textContent = c.name[language];
    front.appendChild(title);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement("p");
      p.textContent = ing;
      front.appendChild(p);
    });

    // задняя сторона
    const back = document.createElement("div");
    back.className = "card-back";
    const desc = document.createElement("p");
    desc.textContent = c.description[language];
    back.appendChild(desc);

    // собираем карточку
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    container.appendChild(card);

    // по клику — флипнём
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

// Сюрприз
document.getElementById('surprise-btn').addEventListener('click', () => {
  const pool = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );
  const pick = pool[Math.floor(Math.random() * pool.length)];

  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "cocktail-card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  // front
  const front = document.createElement("div");
  front.className = "card-front";
  const title = document.createElement("h2");
  title.textContent = pick.name[language];
  front.appendChild(title);
  pick.ingredients[language].forEach(ing => {
    const p = document.createElement("p");
    p.textContent = ing;
    front.appendChild(p);
  });

  // back
  const back = document.createElement("div");
  back.className = "card-back";
  const desc = document.createElement("p");
  desc.textContent = pick.description[language];
  back.appendChild(desc);

  inner.append(front, back);
  card.appendChild(inner);
  container.appendChild(card);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// инициализация при загрузке
window.onload = () => changeLanguage(language);
