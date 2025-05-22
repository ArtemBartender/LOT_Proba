let language = 'pl';
let currentCategory = 'all';

const translations = {
  pl: {
    header:      "",
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
    header:      "",
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
    if (key === currentCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentCategory = key;
      renderCategories();
      renderCocktails();
    });
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
    const card = document.createElement("div");
    card.className = "cocktail-card";

    const inner = document.createElement("div");
    inner.className = "card-inner";

    // Front
    const front = document.createElement("div");
    front.className = "card-front";
    const nameEl = document.createElement("h2");
    nameEl.textContent = c.name[language];
    front.appendChild(nameEl);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement("p");
      p.textContent = ing;
      front.appendChild(p);
    });

    // Back
    const back = document.createElement("div");
    back.className = "card-back";
    const desc = document.createElement("p");
    desc.textContent = c.description[language];
    back.appendChild(desc);

    inner.append(front, back);
    card.appendChild(inner);
    container.appendChild(card);

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      // Track card flips
      if (typeof gtag === 'function') {
        gtag('event', 'flip_card', {
          'event_category': 'engagement',
          'event_label': c.name[language],
          'transport_type': 'beacon'
        });
      }
    });
  });
}

// Surprise button handler
const surpriseBtn = document.getElementById('surprise-btn');
surpriseBtn.addEventListener('click', () => {
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

  const front = document.createElement("div");
  front.className = "card-front";
  const nameEl = document.createElement("h2");
  nameEl.textContent = pick.name[language];
  front.appendChild(nameEl);
  pick.ingredients[language].forEach(ing => {
    const p = document.createElement("p");
    p.textContent = ing;
    front.appendChild(p);
  });

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
    if (typeof gtag === 'function') {
      gtag('event', 'flip_card', {
        'event_category': 'engagement',
        'event_label': pick.name[language],
        'transport_type': 'beacon'
      });
    }
  });

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Track surprise clicks
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'surprise_button',
      'transport_type': 'beacon'
    });
  }
});

// Track all link clicks
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': link.href,
        'transport_type': 'beacon'
      });
    }
  });
});

// Initialize on load
window.onload = () => changeLanguage(language);
