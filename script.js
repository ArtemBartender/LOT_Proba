let language = 'pl';
let currentCategory = 'all';

// Переводы
const translations = {
  pl: {
    header:      "",
    title:       "Menu drinków",
    footer:      "Najlepszym podziękowaniem będzie Twoja opinia.",
    surprise:    "Zaskocz mnie koktajlem",
    searchPlaceholder:   "🔍 Znajdź napój…",
    feedbackButton:      "Zaproponuj drink",
    feedbackTitle:       "Masz propozycję koktajlu?",
    feedbackPlaceholder: "Wpisz nazwę koktajlu lub swoje uwagi…",
    feedbackSend:        "Wyślij",
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
    searchPlaceholder:   "🔍 Find your drink…",
    feedbackButton:      "Suggest a drink",
    feedbackTitle:       "Have a cocktail suggestion?",
    feedbackPlaceholder: "Type the cocktail name or your note…",
    feedbackSend:        "Send",
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

// Элементы DOM
const searchInput = document.getElementById('drink-search');
const surpriseBtn = document.getElementById('surprise-btn');
const fbBtn       = document.getElementById('feedback-btn');
const fbModal     = document.getElementById('feedback-modal');
const fbClose     = document.getElementById('feedback-close');

// Форма и её поля
const fbForm      = document.getElementById('feedback-form');
const fbEmail     = fbForm.querySelector('input[name="email"]');
const fbMessage   = fbForm.querySelector('textarea[name="message"]');
const fbSendBtn   = document.getElementById('feedback-send');

// Смена языка и обновление UI
function changeLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.getElementById('page-title').textContent      = translations[lang].title;
  document.querySelector('.site-header h2').textContent  = translations[lang].header;
  document.getElementById('footer-text').textContent     = translations[lang].footer;
  document.getElementById('surprise-btn').textContent    = translations[lang].surprise;
  searchInput.placeholder                               = translations[lang].searchPlaceholder;
  fbBtn.textContent                                     = translations[lang].feedbackButton;
  document.getElementById('feedback-title').textContent = translations[lang].feedbackTitle;
  fbMessage.placeholder                                 = translations[lang].feedbackPlaceholder;
  fbSendBtn.textContent                                 = translations[lang].feedbackSend;

  renderCategories();
  renderCocktails();
}

// Рендер кнопок категорий
function renderCategories() {
  const container = document.getElementById('category-buttons');
  container.innerHTML = '';
  Object.entries(translations[language].categories).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    if (key === currentCategory) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentCategory = key;
      renderCategories();
      renderCocktails();
    });
    container.appendChild(btn);
  });
}

// Рендер списка коктейлей
function renderCocktails() {
  const container = document.getElementById('cocktail-list');
  container.innerHTML = '';

  let filtered = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );

  const q = searchInput.value.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(c =>
      c.name[language].toLowerCase().includes(q) ||
      c.ingredients[language].some(ing => ing.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    const msg = language === 'pl'
      ? 'Nic nie znaleziono 😕'
      : 'No results found 😕';
    container.innerHTML = `<p class="no-results">${msg}</p>`;
    return;
  }

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cocktail-card';
    const inner = document.createElement('div');
    inner.className = 'card-inner';

    // Front
    const front = document.createElement('div');
    front.className = 'card-front';
    const nameEl = document.createElement('h2');
    nameEl.textContent = c.name[language];
    front.appendChild(nameEl);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement('p');
      p.textContent = ing;
      front.appendChild(p);
    });

    // Back
    const back = document.createElement('div');
    back.className = 'card-back';
    const desc = document.createElement('p');
    desc.textContent = c.description[language];
    back.appendChild(desc);

    inner.append(front, back);
    card.appendChild(inner);
    container.appendChild(card);

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
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

// Обработчик “Surprise me”
surpriseBtn.addEventListener('click', () => {
  const pool = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );
  const pick = pool[Math.floor(Math.random() * pool.length)];

  searchInput.value = '';
  currentCategory = 'all';
  renderCategories();

  const container = document.getElementById('cocktail-list');
  container.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'cocktail-card';
  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const front = document.createElement('div');
  front.className = 'card-front';
  const nameEl = document.createElement('h2');
  nameEl.textContent = pick.name[language];
  front.appendChild(nameEl);
  pick.ingredients[language].forEach(ing => {
    const p = document.createElement('p');
    p.textContent = ing;
    front.appendChild(p);
  });

  const back = document.createElement('div');
  back.className = 'card-back';
  const desc = document.createElement('p');
  desc.textContent = pick.description[language];
  back.appendChild(desc);

  inner.append(front, back);
  card.appendChild(inner);
  container.appendChild(card);
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'surprise_button',
      'transport_type': 'beacon'
    });
  }

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Трек ссылок
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

// Открытие/закрытие модалки
fbBtn.addEventListener('click', () => {
  fbForm.reset();
  fbModal.classList.remove('hidden');
});
fbClose.addEventListener('click', () => fbModal.classList.add('hidden'));
fbModal.addEventListener('click', e => {
  if (e.target === fbModal) fbModal.classList.add('hidden');
});

// Отправка формы на Formspree через AJAX
fbForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(fbForm);
  // опционально: data.append('_subject', translations[language].feedbackTitle);
  // опционально: data.append('_replyto', data.get('email'));

  fetch(fbForm.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      const thanks = document.createElement('p');
      thanks.textContent = language==='pl'
        ? 'Dziękujemy za propozycję!'
        : 'Thanks for your suggestion!';
      thanks.style.color = '#db620a';
      thanks.style.textAlign = 'center';
      fbForm.replaceWith(thanks);
      setTimeout(() => fbModal.classList.add('hidden'), 2000);
    } else {
      alert(language==='pl'
        ? 'Błąd wysyłki. Spróbuj пóźniej.'
        : 'Submission error. Try again later.');
    }
  })
  .catch(() => alert(language==='pl'
    ? 'Błąd sieci.'
    : 'Network error.'));
});

// Инициализация
window.onload = () => {
  searchInput.addEventListener('input', renderCocktails);
  changeLanguage(language);
};
