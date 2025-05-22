const cocktails = [
  {
    name: { pl: "Blue Orange Whiskey Sour", en: "Blue Orange Whiskey Sour" },
    ingredients: {
      pl: ["Whiskey", "Blue Curacao Syrop", "Syrop cukrowy", "Sok z cytryny"],
      en: ["Whiskey", "Blue Curacao Syrup", "Simple syrup", "Lemon juice"]
    },
    category: "whiskey",
    description: {
      pl: "Soczysta eksplozja cytrusów z lekko dymnym finiszem whiskey — prawdziwa orzeźwiająca przygoda.",
      en: "A juicy citrus explosion with a smoky whiskey finish — the ultimate refreshing adventure."
    },
    image: "drinks/blue-sour.jpg"
  },
    {
    name: { 
      pl: "Gin & Tonic", 
      en: "Gin & Tonic" 
    },
    ingredients: {
      pl: ["Gin", "Tonik", "Plasterek limonki"],
      en: ["Gin", "Tonic water", "Lime wedge"]
    },
    category: "gin",
    description: {
      pl: "Klasyczny, orzeźwiający miks ginu i toniku ze skórką limonki.",
      en: "Classic refreshing mix of gin and tonic water with a lime twist."
    },
    image: "drinks/gin-tonic.jpg"
  },
  {
    name: { pl: "Blue Lagoon", en: "Blue Lagoon" },
    ingredients: {
      pl: ["Gin", "Blue Curacao Syrop", "Woda gazowana"],
      en: ["Gin", "Blue Curacao Syrup", "Sparkling water"]
    },
    category: "gin",
    description: {
      pl: "Lazurowa fala orzeźwienia: delikatny gin spotyka musującą nutę tropików.",
      en: "An azure wave of refreshment: delicate gin meets the sparkle of the tropics."
    }
  },
  {
    name: { pl: "Irish Sunset", en: "Irish Sunset" },
    ingredients: {
      pl: ["Whiskey", "Passion Fruit Syrup", "Sok Ananasowy"],
      en: ["Whiskey", "Passion Fruit Syrup", "Pineapple juice"]
    },
    category: "whiskey",
    description: {
      pl: "Zachód słońca zamknięty w szkle — złocista whiskey tańczy z egzotyczną marakują i ananasem.",
      en: "Sunset in a glass — golden whiskey dances with exotic passion fruit and pineapple."
    }
  },
  {
    name: { pl: "Spiced Apricot", en: "Spiced Apricot" },
    ingredients: {
      pl: ["Wódka smakowa (morelowa)", "Spiced Rum", "Sok czarnej porzeczki"],
      en: ["Flavored vodka (apricot)", "Spiced Rum", "Blackcurrant juice"]
    },
    category: "vodka",
    description: {
      pl: "Aromatyczne morele i korzenny rum z delikatnym, cierpkim finiszem porzeczki.",
      en: "Aromatic apricot meets spiced rum with a delicate, tart blackcurrant finish."
    }
  },
  {
    name: { pl: "Honey Caramel Cream", en: "Honey Caramel Cream" },
    ingredients: {
      pl: ["Likier miodowy", "Likier słony karmel", "Sok z cytryny"],
      en: ["Honey liqueur", "Salted caramel liqueur", "Lemon juice"]
    },
    category: "liqueur",
    description: {
      pl: "Kremowa słodycz miodu i słonego karmelu złamana cytrynową nutą — deser w szkłe.",
      en: "Creamy honey sweetness and salted caramel cut by a lemon twist — dessert in a glass."
    }
  },
  {
    name: { pl: "Cherry Bourbon Smash", en: "Cherry Bourbon Smash" },
    ingredients: {
      pl: ["Bourbon", "Wódka smakowa (wiśniowa)", "Syrop malinowy"],
      en: ["Bourbon", "Flavored vodka (cherry)", "Raspberry syrup"]
    },
    category: "vodka",
    description: {
      pl: "Uderzenie soczystych wiśni i malin z miękką bazą bourbonu — eksplozja owocowego smaku.",
      en: "A burst of juicy cherries and raspberries over a smooth bourbon base — fruity flavor explosion."
    }
  },
  {
    name: { pl: "Mint Julep", en: "Mint Julep" },
    ingredients: {
      pl: ["Bourbon", "Sok z cytryny", "Świeża mięta"],
      en: ["Bourbon", "Lemon juice", "Fresh mint leaves"]
    },
    category: "whiskey",
    description: {
      pl: "Klasyka południa: chłodna mięta łączy się z pełnym aromatem bourbonu i cytryny.",
      en: "A Southern classic: cool mint meets full-bodied bourbon and bright lemon."
    }
  },
  {
    name: { pl: "Mimosa", en: "Mimosa" },
    ingredients: {
      pl: ["Sok pomarańczowy", "Wermut"],
      en: ["Orange juice", "Vermouth"]
    },
    category: "liqueur",
    description: {
      pl: "Elegancka lekkość bąbelków i słodycz świeżych pomarańczy w jednym łyku.",
      en: "Elegant bubbles and the sweet taste of fresh oranges in every sip."
    }
  },
  {
    name: { pl: "Tom Collins", en: "Tom Collins" },
    ingredients: {
      pl: ["Gin", "Sok z cytryny", "Syrop cukrowy", "Woda gazowana"],
      en: ["Gin", "Lemon juice", "Simple syrup", "Sparkling water"]
    },
    category: "gin",
    description: {
      pl: "Orzeźwiające połączenie cytrusów i ginu z delikatnym gazowanym finiszem.",
      en: "A refreshing blend of citrus and gin with a light sparkling finish."
    }
  },
  {
    name: { pl: "Spiced Orange Old Fashioned", en: "Spiced Orange Old Fashioned" },
    ingredients: {
      pl: ["Rum", "Passion Fruit Syrup", "Sok pomarańczowy"],
      en: ["Rum", "Passion Fruit Syrup", "Orange juice"]
    },
    category: "rum",
    description: {
      pl: "Klasyczny Old Fashioned z korzenną nutą i świeżą pomarańczą.",
      en: "A classic Old Fashioned with a spicy twist and fresh orange note."
    }
  },
  {
    name: { pl: "Caribbean Sunset", en: "Caribbean Sunset" },
    ingredients: {
      pl: ["Rum", "Passion Fruit Syrup", "Sok ananasowy"],
      en: ["Rum", "Passion Fruit Syrup", "Pineapple juice"]
    },
    category: "rum",
    description: {
      pl: "Egzotyczne marakuja i ananas w objęciach rumu — rajski koktajl.",
      en: "Exotic passion fruit and pineapple embraced by rum — a tropical paradise."
    }
  },
  {
    name: { pl: "Daiquiri", en: "Daiquiri" },
    ingredients: {
      pl: ["Rum", "Syrop cukrowy", "Sok z limonki"],
      en: ["Rum", "Simple syrup", "Lime juice"]
    },
    category: "rum",
    description: {
      pl: "Klasyczny, orzeźwiający koktajl z limonką i słodyczą syropu.",
      en: "A classic, refreshing cocktail of lime and sweet syrup."
    }
  },
  {
    name: { pl: "Cosmopolitan", en: "Cosmopolitan" },
    ingredients: {
      pl: ["Wódka", "Blue Curacao", "Syrop żurawinowy", "Sok z cytryny", "Sok z limonki"],
      en: ["Vodka", "Blue Curacao", "Cranberry syrup", "Lemon juice", "Lime juice"]
    },
    category: "vodka",
    description: {
      pl: "Elegancka kompozycja wódki i żurawiny z delikatnymi nutami cytrusów.",
      en: "An elegant blend of vodka and cranberry with subtle citrus hints."
    }
  },
    {
    name: { 
      pl: "Espresso Martini", 
      en: "Espresso Martini" 
    },
    ingredients: {
      pl: ["Wódka", "Likier mleczny", "Świeże espresso"],
      en: ["Vodka", "Milk liqueur", "Fresh espresso"]
    },
    category: "liqueur",
    description: {
      pl: "Energetyczne połączenie intensywnego espresso i likieru w eleganckim drinku.",
      en: "An energizing blend of rich espresso and liqueur in an elegant cocktail."
    },
    image: "drinks/espresso-martini.jpg"
  },
  {
    name: { 
      pl: "Krwawa Mary", 
      en: "Bloody Mary" 
    },
    ingredients: {
      pl: ["Wódka", "Sok pomidorowy", "Tabasco", "Sok z cytryny", "Sól i pieprz"],
      en: ["Vodka", "Tomato juice", "Tabasco", "Lemon juice", "Salt & pepper"]
    },
    category: "vodka",
    description: {
      pl: "Pikantna eksplozja smaku pomidorów z dodatkiem wódki i przypraw — idealna na mocny start.",
      en: "A spicy tomato explosion with vodka and spices — the perfect bold start."
    },
    image: "drinks/bloody-mary.jpg"
  }

  {
    name: { pl: "Martini", en: "Martini" },
    ingredients: {
      pl: ["Gin", "Wermut"],
      en: ["Gin", "Vermouth"]
    },
    category: "gin",
    description: {
      pl: "Wytrawna prostota ginu i wermutu — ikona klasyki.",
      en: "The dry simplicity of gin and vermouth — the icon of classics."
    }
  },
  {
    name: { pl: "French 75", en: "French 75" },
    ingredients: {
      pl: ["Gin", "Sok z cytryny", "Syrop cukrowy", "Wino musujące"],
      en: ["Gin", "Lemon juice", "Simple syrup", "Sparkling wine"]
    },
    category: "gin",
    description: {
      pl: "Wyrafinowane bąbelki i cytrusowy akcent — francuska elegancja.",
      en: "Refined bubbles and a citrus twist — pure French elegance."
    }
  },
  {
    name: { pl: "Piña Colada", en: "Piña Colada" },
    ingredients: {
      pl: ["Rum", "Syrop kokosowy", "Sok ananasowy"],
      en: ["Rum", "Coconut syrup", "Pineapple juice"]
    },
    category: "rum",
    description: {
      pl: "Kremowa podróż na tropikalną plażę — kokos i ananas w jednym łyku.",
      en: "A creamy journey to a tropical beach — coconut and pineapple in one sip."
    }
  },
  {
    name: { pl: "Hurricane", en: "Hurricane" },
    ingredients: {
      pl: ["Rum", "Sok owoców cytrusowych", "Syrop żurawinowy"],
      en: ["Rum", "Citrus juice", "Cranberry syrup"]
    },
    category: "rum",
    description: {
      pl: "Burza owocowych smaków: cytrusy i żurawiny w rytmie rumu.",
      en: "A storm of fruit flavors: citrus and cranberry in a rum rhythm."
    }
  },
  {
    name: { pl: "Cranberry Bliss", en: "Cranberry Bliss" },
    ingredients: {
      pl: ["Gin", "Syrop żurawinowy", "Tonik"],
      en: ["Gin", "Cranberry syrup", "Tonic"]
    },
    category: "gin",
    description: {
      pl: "Orzeźwiająca harmonia ginu i żurawiny z odświeżającym tonikiem.",
      en: "A refreshing harmony of gin and cranberry topped with tonic."
    }
  },
  {
    name: { pl: "Passion Ginger Martini", en: "Passion Ginger Martini" },
    ingredients: {
      pl: ["Gin", "Syrop imbirowy", "Syrop marakuja", "Sok z limonki"],
      en: ["Gin", "Ginger syrup", "Passion fruit syrup", "Lime juice"]
    },
    category: "gin",
    description: {
      pl: "Ostre nuty imbiru w połączeniu z egzotyczną marakują — martini z pazurem.",
      en: "Spicy ginger notes meet exotic passion fruit — a martini with attitude."
    }
  },
  {
    name: { pl: "Tropical Punch", en: "Tropical Punch" },
    ingredients: {
      pl: ["Rum", "Sok ananasowy", "Sok pomarańczowy", "Syrop marakuja"],
      en: ["Rum", "Pineapple juice", "Orange juice", "Passion fruit syrup"]
    },
    category: "rum",
    description: {
      pl: "Egzotyczny koktajl pełen soczystych owoców i słonecznej energii.",
      en: "An exotic cocktail bursting with juicy fruits and sunny energy."
    }
  },
  {
    name: { pl: "Pornstar Martini", en: "Pornstar Martini" },
    ingredients: {
      pl: ["Wódka", "Syrop waniliowy", "Syrop marakuja", "Sok z limonki", "Prosecco"],
      en: ["Vodka", "Vanilla syrup", "Passion fruit syrup", "Lime juice", "Prosecco"]
    },
    category: "vodka",
    description: {
      pl: "Uwodzicielskie połączenie wanilii, marakui i musującego Prosecco.",
      en: "A seductive blend of vanilla, passion fruit, and bubbly Prosecco."
    }
  },
  {
    name: { pl: "Mango Sunrise", en: "Mango Sunrise" },
    ingredients: {
      pl: ["Wódka", "Sok pomarańczowy", "Syrop mango", "Syrop grenadyna"],
      en: ["Vodka", "Orange juice", "Mango syrup", "Grenadine"]
    },
    category: "vodka",
    description: {
      pl: "Poranny wschód w szkle: słodkie mango spotyka soczystą pomarańczę.",
      en: "Sunrise in a glass: sweet mango meets juicy orange."
    }
  },
  {
    name: { pl: "Mazurek", en: "Mazurek" },
    ingredients: {
      pl: ["Wódka smakowa (morelowa)", "Sok z cytryny", "Syrop marakuja", "Tonic"],
      en: ["Flavored vodka (apricot)", "Lemon juice", "Passion fruit syrup", "Tonic"]
    },
    category: "vodka",
    description: {
      pl: "Tradycyjne smaki w nowej odsłonie — morele, limonka i marakuja.",
      en: "Traditional flavors reinvented — apricot, lime, and passion fruit."
    }
  },
  {
    name: { pl: "Polonez", en: "Polonez" },
    ingredients: {
      pl: ["Gin", "Sok z cytryny", "Syrop żurawinowy", "Tonic lub Sprite"],
      en: ["Gin", "Lemon juice", "Cranberry syrup", "Tonic or Sprite"]
    },
    category: "gin",
    description: {
      pl: "Klasyczne połączenie cytrusów i żurawiny z bąbelkami toniku.",
      en: "A classic blend of citrus and cranberry with a tonic sparkle."
    }
  },
  {
    name: { pl: "Ginger Fresh", en: "Ginger Fresh" },
    ingredients: {
      pl: ["Syrop imbirowy", "Sok z cytryny", "Woda gazowana", "Mięta", "Lód"],
      en: ["Ginger syrup", "Lemon juice", "Sparkling water", "Mint leaves", "Ice"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Ożywczy duet imbiru i mięty z lekkim gazowanym finiszem.",
      en: "An invigorating duo of ginger and mint with a light fizz."
    }
  },
  {
    name: { pl: "Berry Boost", en: "Berry Boost" },
    ingredients: {
      pl: ["Syrop malinowy", "Sok żurawinowy", "Sok z cytryny", "Woda gazowana", "Lód"],
      en: ["Raspberry syrup", "Cranberry juice", "Lemon juice", "Sparkling water", "Ice"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Energetyczne połączenie malin, żurawiny i cytryny z bąbelkami.",
      en: "A zesty mix of raspberry, cranberry, and lemon with bubbly sparkle."
    }
  },
  {
    name: { pl: "Pomegranate Sparkle", en: "Pomegranate Sparkle" },
    ingredients: {
      pl: ["Syrop z granatu", "Sok z cytryny", "Woda gazowana", "Lód"],
      en: ["Pomegranate syrup", "Lemon juice", "Sparkling water", "Ice"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Rubinowy blask granatu z orzeźwiającą nutą cytryny.",
      en: "A ruby glow of pomegranate with a refreshing lemon twist."
    }
  },
  {
    name: { pl: "Passion Fruit Punch", en: "Passion Fruit Punch" },
    ingredients: {
      pl: ["Syrop z marakui", "Sok pomarańczowy", "Woda sodowa", "Lód"],
      en: ["Passion fruit syrup", "Orange juice", "Sparkling water", "Ice"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Egzotyczna eksplozja marakui i pomarańczy w jednym łyku.",
      en: "An exotic explosion of passion fruit and orange."
    }
  },
  {
    name: { pl: "Pineapple Mint Splash", en: "Pineapple Mint Splash" },
    ingredients: {
      pl: ["Sok ananasowy", "Syrop miętowy", "Sok z cytryny", "Lód"],
      en: ["Pineapple juice", "Mint syrup", "Lemon juice", "Ice"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Tropikalne orzeźwienie dzięki ananasowi i miętowej nucie.",
      en: "A tropical refresher with pineapple and mint notes."
    }
  },
  {
    name: { pl: "Mojito Truskawkowe", en: "Strawberry Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop truskawkowy", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Strawberry syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Letnie mojito z soczystymi truskawkami i świeżą miętą.",
      en: "A summer mojito with juicy strawberries and fresh mint."
    }
  },
  {
    name: { pl: "Mojito Marakuja", en: "Passion Fruit Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop z marakui", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Passion fruit syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Tropikalne mojito z egzotyczną marakują i orzeźwiającą miętą.",
      en: "A tropical mojito with exotic passion fruit and refreshing mint."
    }
  },
  {
    name: { pl: "Mojito Bez", en: "Elderflower Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop z bzu", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Elderflower syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Delikatny bukiet bzu w klasycznym świeżym mojito.",
      en: "A gentle elderflower bouquet in a classic fresh mojito."
    }
  },
  {
    name: { pl: "Mojito Granat", en: "Pomegranate Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop z granatu", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Pomegranate syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Soczysty granat i limonka w odświeżającej wersji mojito.",
      en: "Juicy pomegranate and lime in a refreshing mojito version."
    }
  },
  {
    name: { pl: "Mojito Pomarańcza", en: "Orange Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop pomarańczowy", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Orange syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Cytrusowa eksplozja pomarańczy i mięty w lekkim wydaniu.",
      en: "A citrus explosion of orange and mint in a light edition."
    }
  },
  {
    name: { pl: "Mojito Kokosowe", en: "Coconut Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop kokosowy", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Coconut syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Kokosowa świeżość w klasycznym limonkowo-miętowym koktajlu.",
      en: "Coconut freshness in a classic lime and mint cocktail."
    }
  },
  {
    name: { pl: "Mojito Mango", en: "Mango Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop mango", "Woda gazowana"],
      en: ["Mint leaves", "Lime wedge", "Mango syrup", "Sparkling water"]
    },
    category: "non_alcoholic",
    description: {
      pl: "Egzotyczny twist z mango i świeżą miętą.",
      en: "An exotic twist of mango and fresh mint."
    }
  },
  {
    name: { pl: "Irishman", en: "Irishman" },
    ingredients: {
      pl: ["Irish Cream", "Whiskey"],
      en: ["Irish Cream", "Whiskey"]
    },
    category: "liqueur",
    description: {
      pl: "Kremowa Irish Cream harmonizuje z mocą whiskey.",
      en: "Creamy Irish Cream harmonizes with the strength of whiskey."
    }
  },
  {
    name: { pl: "Gold Rush", en: "Gold Rush" },
    ingredients: {
      pl: ["Whiskey", "Likier miodowy", "Sok z cytryny"],
      en: ["Whiskey", "Honey liqueur", "Lemon juice"]
    },
    category: "whiskey",
    description: {
      pl: "Złoty nektar miodu i cytrusów w objęciach bourbonu.",
      en: "Golden nectar of honey and citrus embraced by bourbon."
    }
  },
  {
    name: { pl: "The Curious Jackalope", en: "The Curious Jackalope" },
    ingredients: {
      pl: ["Gin", "Sok z limonki", "Sok grejpfrutowy", "Syrop cukrowy"],
      en: ["Gin", "Lime juice", "Grapefruit juice", "Simple syrup"]
    },
    category: "gin",
    description: {
      pl: "Zabawna mieszanka grejpfruta i limonki dla ciekawskich smakoszy.",
      en: "A playful mix of grapefruit and lime for the curious palate."
    }
  },
  {
    name: { pl: "Old Fashioned", en: "Old Fashioned" },
    ingredients: {
      pl: ["Bourbon", "Syrop cukrowy", "Angostura bitters"],
      en: ["Bourbon", "Simple syrup", "Angostura bitters"]
    },
    category: "whiskey",
    description: {
      pl: "Ponadczasowy klasyk: bourbon, bitters i słodka nuta syropu.",
      en: "A timeless classic: bourbon, bitters, and a sweet syrup note."
    }
  },
  {
    name: { pl: "Old Virginia Manhattan", en: "Old Virginia Manhattan" },
    ingredients: {
      pl: ["Bourbon", "Martini Bianco", "Angostura bitters"],
      en: ["Bourbon", "Martini Bianco", "Angostura bitters"]
    },
    category: "whiskey",
    description: {
      pl: "Wersja Manhattan z bourbonem i eleganckim wermutem biało.",
      en: "A Manhattan-style cocktail with bourbon and elegant bianco vermouth."
    }
  },
  {
    name: { 
      pl: "Iguana (bezalkoholowe)", 
      en: "Iguana (non-alcoholic)" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Błonnik", "Aminokwasy", "Chmiel"],
      en: ["Water", "Barley malt", "Fiber", "Amino acids", "Hops"]
    },
    category: "beer",
    description: {
      pl: "Lekko gazowane, orzeźwiające piwo bezalkoholowe z dodatkiem błonnika i aminokwasów.",
      en: "A lightly carbonated, refreshing non-alcoholic beer enriched with fiber and amino acids."
    }
  },
  {
    name: { 
      pl: "Trybunał Lemon (0,0%)", 
      en: "Trybunał Lemon (0.0%)" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Chmiel", "Skórka cytryny", "Pszenica"],
      en: ["Water", "Barley malt", "Hops", "Lemon peel", "Wheat"]
    },
    category: "beer",
    description: {
      pl: "Świeża nuta cytryny na bazie jasnego lagera — idealne orzeźwienie bez alkoholu.",
      en: "A bright lager base with a fresh lemon twist — perfect alcohol-free refreshment."
    }
  },
  {
    name: { 
      pl: "Trybunał Export", 
      en: "Trybunał Export" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Chmiel"],
      en: ["Water", "Barley malt", "Hops"]
    },
    category: "beer",
    description: {
      pl: "Pełne ciało, wyraźna goryczka i klasyczna niemiecka receptura.",
      en: "Full-bodied with pronounced bitterness, crafted in a classic German style."
    }
  },
  {
    name: { 
      pl: "Trybunał Zero (0,5%)", 
      en: "Trybunał Zero (0.5%)" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Chmiel"],
      en: ["Water", "Barley malt", "Hops"]
    },
    category: "beer",
    description: {
      pl: "Łagodne, niskoalkoholowe piwo o zbalansowanym smaku i gładkim finiszu.",
      en: "A mild, low-alcohol beer with a balanced taste and smooth finish."
    }
  },
  {
    name: { 
      pl: "Żywiec", 
      en: "Żywiec" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Chmiel"],
      en: ["Water", "Barley malt", "Hops"]
    },
    category: "beer",
    description: {
      pl: "Klasyczny polski lager z wyczuwalną nutą słodową i łagodną goryczką.",
      en: "A classic Polish lager with noticeable malt notes and a gentle bitterness."
    }
  },
  {
    name: { 
      pl: "Heineken", 
      en: "Heineken" 
    },
    ingredients: {
      pl: ["Woda", "Słód jęczmienny", "Chmiel Saaz"],
      en: ["Water", "Barley malt", "Saaz hops"]
    },
    category: "beer",
    description: {
      pl: "Ikoniczne, gładkie piwo o wyważonym profilu chmielowym.",
      en: "Iconic smooth beer with a well-balanced hop profile."
    }
  },
  {
    name: { 
      pl: "Cydr Klasyczny", 
      en: "Classic Cider" 
    },
    ingredients: {
      pl: ["Woda", "Sok jabłkowy", "Drożdże"],
      en: ["Water", "Apple juice", "Yeast"]
    },
    category: "beer", // traktujemy cydr jako podkategorię piwa
    description: {
      pl: "Delikatnie musujący, półwytrawny cydr z naturalną słodyczą jabłek.",
      en: "Lightly sparkling, semi-dry cider with the natural sweetness of apples."
    }
  }
];
