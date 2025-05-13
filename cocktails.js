const cocktails = [
  {
    name: { pl: "Blue Lagoon", en: "Blue Lagoon" },
    ingredients: { pl: ["Gin", "Syrop Blue Curacao", "Woda gazowana"], en: ["Gin", "Blue Curacao Syrup", "Sparkling water"] },
    category: "gin"
  },
  {
    name: { pl: "Irish Sunset", en: "Irish Sunset" },
    ingredients: { pl: ["Irish Whiskey", "Syrop marakuja", "Sok ananasowy"], en: ["Irish Whiskey", "Passion fruit syrup", "Pineapple juice"] },
    category: "whiskey"
  },
  {
    name: { pl: "Spiced Apricot", en: "Spiced Apricot" },
    ingredients: { pl: ["Morelówka", "Spiced Rum", "Sok z czarnej porzeczki"], en: ["Apricot vodka", "Spiced Rum", "Black currant juice"] },
    category: "rum"
  },
  {
    name: { pl: "Honey Caramel Cream", en: "Honey Caramel Cream" },
    ingredients: { pl: ["Likier miodowy", "Likier słony karmel", "Sok z cytryny"], en: ["Honey liqueur", "Salted caramel liqueur", "Lemon juice"] },
    category: "liqueur"
  },
  {
    name: { pl: "Cherry Bourbon Smash", en: "Cherry Bourbon Smash" },
    ingredients: { pl: ["Wiśniówka", "Syrop malinowy", "Bourbon"], en: ["Cherry vodka", "Raspberry syrup", "Bourbon"] },
    category: "whiskey"
  },
  {
    name: { pl: "Mint Julep", en: "Mint Julep" },
    ingredients: { pl: ["Bourbon", "Sok z cytryny", "Świeża mięta"], en: ["Bourbon", "Lemon juice", "Fresh mint"] },
    category: "whiskey"
  },
  {
    name: { pl: "Spiced Orange Old Fashioned", en: "Spiced Orange Old Fashioned" },
    ingredients: { pl: ["Rum", "Syrop marakuja", "Sok pomarańczowy"], en: ["Rum", "Passion fruit syrup", "Orange juice"] },
    category: "rum"
  },
  {
    name: { pl: "Cosmopolitan", en: "Cosmopolitan" },
    ingredients: { pl: ["Wódka", "Triple Sec", "Syrop żurawinowy", "Sok z limonki"], en: ["Vodka", "Triple Sec", "Cranberry syrup", "Lime juice"] },
    category: "vodka"
  },
  {
    name: { pl: "French 75", en: "French 75" },
    ingredients: { pl: ["Gin", "Sok z cytryny", "Syrop cukrowy", "Wino musujące"], en: ["Gin", "Lemon juice", "Sugar syrup", "Sparkling wine"] },
    category: "gin"
  },
  {
    name: { pl: "Tom Collins", en: "Tom Collins" },
    ingredients: { pl: ["Gin", "Sok z cytryny", "Syrop cukrowy", "Woda gazowana"], en: ["Gin", "Lemon juice", "Sugar syrup", "Sparkling water"] },
    category: "gin"
  },
  {
    name: { pl: "Pina Colada", en: "Pina Colada" },
    ingredients: { pl: ["Rum", "Syrop kokosowy", "Sok ananasowy"], en: ["Rum", "Coconut syrup", "Pineapple juice"] },
    category: "rum"
  },
  {
    name: { pl: "Daiquiri", en: "Daiquiri" },
    ingredients: { pl: ["Rum", "Syrop cukrowy", "Sok z limonki"], en: ["Rum", "Sugar syrup", "Lime juice"] },
    category: "rum"
  },
  {
    name: { pl: "Cranberry Bliss", en: "Cranberry Bliss" },
    ingredients: { pl: ["Gin", "Syrop żurawinowy", "Tonik"], en: ["Gin", "Cranberry syrup", "Tonic"] },
    category: "gin"
  },
  {
    name: { pl: "Passion Ginger Martini", en: "Passion Ginger Martini" },
    ingredients: { pl: ["Gin", "Syrop imbirowy", "Syrop marakuja", "Sok z limonki"], en: ["Gin", "Ginger syrup", "Passion fruit syrup", "Lime juice"] },
    category: "gin"
  },
  {
    name: { pl: "Tropical Punch", en: "Tropical Punch" },
    ingredients: { pl: ["Rum", "Sok ananasowy", "Sok pomarańczowy", "Syrop marakuja"], en: ["Rum", "Pineapple juice", "Orange juice", "Passion fruit syrup"] },
    category: "rum"
  },
  {
    name: { pl: "Pornstar Martini", en: "Pornstar Martini" },
    ingredients: { pl: ["Wódka", "Syrop waniliowy", "Syrop marakuja", "Sok z limonki", "Prosecco"], en: ["Vodka", "Vanilla syrup", "Passion fruit syrup", "Lime juice", "Prosecco"] },
    category: "vodka"
  },
  {
    name: { pl: "Mango Sunrise", en: "Mango Sunrise" },
    ingredients: { pl: ["Wódka", "Sok pomarańczowy", "Syrop mango", "Syrop grenadyna"], en: ["Vodka", "Orange juice", "Mango syrup", "Grenadine syrup"] },
    category: "vodka"
  },
  {
    name: { pl: "Mazurek", en: "Mazurek" },
    ingredients: { pl: ["Morelówka", "Sok z cytryny", "Syrop marakuja", "Tonic"], en: ["Apricot vodka", "Lemon juice", "Passion fruit syrup", "Tonic"] },
    category: "vodka"
  },
  {
    name: { pl: "Polonez", en: "Polonez" },
    ingredients: { pl: ["Gin", "Sok z cytryny", "Syrop żurawinowy", "Tonic lub Sprite"], en: ["Gin", "Lemon juice", "Cranberry syrup", "Tonic or Sprite"] },
    category: "gin"
  },
  {
    name: { pl: "Ginger Fresh", en: "Ginger Fresh" },
    ingredients: { pl: ["Syrop imbirowy", "Sok z cytryny", "Woda gazowana", "Mięta", "Lód"], en: ["Ginger syrup", "Lemon juice", "Sparkling water", "Mint", "Ice"] },
    category: "non-alcoholic"
  },
  {
    name: { pl: "Berry Boost", en: "Berry Boost" },
    ingredients: { pl: ["Syrop malinowy", "Sok żurawinowy", "Sok z cytryny", "Woda gazowana", "Lód"], en: ["Raspberry syrup", "Cranberry juice", "Lemon juice", "Sparkling water", "Ice"] },
    category: "non-alcoholic"
  },
  {
    name: { pl: "Pomegranate Sparkle", en: "Pomegranate Sparkle" },
    ingredients: { pl: ["Syrop z granatu", "Sok z cytryny", "Woda gazowana", "Lód"], en: ["Pomegranate syrup", "Lemon juice", "Sparkling water", "Ice"] },
    category: "non-alcoholic"
  },
  {
    name: { pl: "Passion Fruit Punch", en: "Passion Fruit Punch" },
    ingredients: { pl: ["Syrop z marakui", "Sok pomarańczowy", "Woda sodowa", "Lód"], en: ["Passion fruit syrup", "Orange juice", "Soda water", "Ice"] },
    category: "non-alcoholic"
  },
  {
    name: { pl: "Pineapple Mint Splash", en: "Pineapple Mint Splash" },
    ingredients: { pl: ["Sok ananasowy", "Syrop miętowy", "Sok z cytryny", "Lód"], en: ["Pineapple juice", "Mint syrup", "Lemon juice", "Ice"] },
    category: "non-alcoholic"
  }
,
  {
    name: { pl: "Mimosa", en: "Mimosa" },
    ingredients: {
      pl: ["Sok Pomarańczowy", "Wermut"],
      en: ["Orange juice", "Vermouth"]
    },
    category: "liqueur"
  },
  {
    name: { pl: "Hurricane", en: "Hurricane" },
    ingredients: {
      pl: ["Rum", "Sok z owoców cytrusowych", "Grenadyna"],
      en: ["Rum", "Citrus juice", "Grenadine"]
    },
    category: "rum"
  },
  {
    name: { pl: "Irishman", en: "Irishman" },
    ingredients: {
      pl: ["Irish Cream", "Whiskey"],
      en: ["Irish Cream", "Whiskey"]
    },
    category: "liqueur"
  },
  {
    name: { pl: "Gold Rush", en: "Gold Rush" },
    ingredients: {
      pl: ["Whiskey", "Likier miodowy", "Sok z cytryny"],
      en: ["Whiskey", "Honey liqueur", "Lemon juice"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Old Manhattan", en: "Old Manhattan" },
    ingredients: {
      pl: ["Bourbon", "Wermut", "Angostura"],
      en: ["Bourbon", "Vermouth", "Angostura"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Blue Orange Whiskey Sour", en: "Blue Orange Whiskey Sour" },
    ingredients: {
      pl: ["Whiskey", "Syrop blue curacao", "Syrop cukrowy", "Sok z cytryny"],
      en: ["Whiskey", "Blue curacao syrup", "Sugar syrup", "Lemon juice"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "The Curious Jackalope", en: "The Curious Jackalope" },
    ingredients: {
      pl: ["Gin", "Sok z limonki", "Sok z grejpfruta", "Syrop cukrowy"],
      en: ["Gin", "Lime juice", "Grapefruit juice", "Sugar syrup"]
    },
    category: "gin"
  },
  {
    name: { pl: "Old Fashioned", en: "Old Fashioned" },
    ingredients: {
      pl: ["Bourbon", "Cukier", "Angostura"],
      en: ["Bourbon", "Sugar", "Angostura"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Szarlotka", en: "Apple Pie" },
    ingredients: {
      pl: ["Wódka", "Sok jabłkowy", "Syrop waniliowy", "Sok z cytryny"],
      en: ["Vodka", "Apple juice", "Vanilla syrup", "Lemon juice"]
    },
    category: "vodka"
  }
];
