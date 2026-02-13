/* =========================
   HYROX DIY - recipes-app.js
   ========================= */

// Database ricette (25 totali)
const recipesData = [
  // ===== COLAZIONE (5) =====
  {
    id: "col-1",
    category: "colazione",
    title: "Overnight Oats Proteici",
    prepTime: "5 min (prep sera prima)",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Overnight+Oats",
    macros: { cal: 450, protein: 32, carbs: 52, fat: 12 },
    ingredients: [
      "60g avena",
      "200ml latte (o vegetale)",
      "1 scoop proteine vaniglia (30g)",
      "1 banana",
      "10g burro di arachidi",
      "Cannella q.b."
    ],
    instructions: [
      "Mescola avena, latte e proteine in un barattolo",
      "Aggiungi banana a fette e burro di arachidi",
      "Chiudi e lascia in frigo tutta la notte",
      "La mattina mescola e aggiungi cannella"
    ]
  },
  {
    id: "col-2",
    category: "colazione",
    title: "Pancake Proteici 3 Ingredienti",
    prepTime: "15 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Pancake",
    macros: { cal: 380, protein: 28, carbs: 42, fat: 10 },
    ingredients: [
      "2 uova",
      "1 banana matura",
      "30g avena in polvere",
      "Miele (opzionale)",
      "Frutti di bosco"
    ],
    instructions: [
      "Frulla banana, uova e avena fino a ottenere composto liscio",
      "Scalda padella antiaderente a fuoco medio",
      "Versa piccole quantità di impasto (pancake 8-10cm)",
      "Cuoci 2 min per lato, servi con frutti di bosco"
    ]
  },
  {
    id: "col-3",
    category: "colazione",
    title: "Greek Yogurt Bowl Energetico",
    prepTime: "5 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Yogurt+Bowl",
    macros: { cal: 420, protein: 35, carbs: 48, fat: 11 },
    ingredients: [
      "200g yogurt greco 0%",
      "40g granola",
      "1 mela",
      "15g mandorle",
      "1 cucchiaio miele",
      "Semi di chia"
    ],
    instructions: [
      "Versa yogurt greco in una bowl",
      "Aggiungi granola, mela a cubetti e mandorle",
      "Irrora con miele e cospargi semi di chia",
      "Mescola e consuma subito"
    ]
  },
  {
    id: "col-4",
    category: "colazione",
    title: "Uova Strapazzate con Avocado Toast",
    prepTime: "10 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Eggs+Avocado",
    macros: { cal: 480, protein: 26, carbs: 38, fat: 24 },
    ingredients: [
      "3 uova",
      "2 fette pane integrale",
      "1/2 avocado",
      "Pomodorini",
      "Sale, pepe",
      "Olio EVO"
    ],
    instructions: [
      "Tosta il pane integrale",
      "Sbatti le uova e cuocile scrambled con poco olio",
      "Schiaccia avocado sul pane tostato",
      "Servi uova sopra l'avocado toast con pomodorini"
    ]
  },
  {
    id: "col-5",
    category: "colazione",
    title: "Smoothie Bowl Post-Run",
    prepTime: "8 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Smoothie+Bowl",
    macros: { cal: 410, protein: 30, carbs: 56, fat: 8 },
    ingredients: [
      "1 banana congelata",
      "150g frutti di bosco congelati",
      "1 scoop proteine vaniglia",
      "150ml latte mandorla",
      "Topping: granola, cocco, kiwi"
    ],
    instructions: [
      "Frulla banana, frutti di bosco, proteine e latte fino a cremoso",
      "Versa in una bowl",
      "Aggiungi topping: granola, cocco rapé, kiwi a fette",
      "Consuma con cucchiaio"
    ]
  },

  // ===== PRANZO (5) =====
  {
    id: "pra-1",
    category: "pranzo",
    title: "Chicken Burrito Bowl",
    prepTime: "25 min",
    difficulty: "Media",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Burrito+Bowl",
    macros: { cal: 520, protein: 42, carbs: 58, fat: 12 },
    ingredients: [
      "200g petto di pollo",
      "100g riso basmati (crudo)",
      "150g fagioli neri",
      "1 avocado",
      "Pomodori, lattuga, mais",
      "Lime, paprika, cumino"
    ],
    instructions: [
      "Cuoci il riso secondo istruzioni",
      "Taglia pollo a strisce, condisci con paprika e cumino",
      "Cuoci pollo in padella 8-10 min",
      "Componi bowl: riso, fagioli, pollo, verdure, avocado a fette"
    ]
  },
  {
    id: "pra-2",
    category: "pranzo",
    title: "Pasta Integrale con Tonno e Olive",
    prepTime: "20 min",
    difficulty: "Facile",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Pasta+Tonno",
    macros: { cal: 480, protein: 32, carbs: 62, fat: 11 },
    ingredients: [
      "160g pasta integrale",
      "160g tonno al naturale",
      "50g olive nere",
      "Pomodorini 200g",
      "Aglio, basilico",
      "Olio EVO"
    ],
    instructions: [
      "Cuoci pasta al dente",
      "In padella: aglio, pomodorini tagliati, olive",
      "Aggiungi tonno sgocciolato e scalda 2 min",
      "Scola pasta, mescola con il condimento, servi con basilico"
    ]
  },
  {
    id: "pra-3",
    category: "pranzo",
    title: "Quinoa Buddha Bowl",
    prepTime: "30 min",
    difficulty: "Media",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Buddha+Bowl",
    macros: { cal: 460, protein: 24, carbs: 54, fat: 18 },
    ingredients: [
      "120g quinoa",
      "200g ceci cotti",
      "1 patata dolce",
      "Spinaci, carote",
      "Tahini per salsa",
      "Semi di sesamo"
    ],
    instructions: [
      "Cuoci quinoa (rapporto 1:2 con acqua, 15 min)",
      "Arrostisci patata dolce a cubetti in forno 20 min a 200°C",
      "Componi bowl: quinoa, ceci, patata, spinaci crudi, carote julienne",
      "Condisci con salsa tahini (tahini + limone + acqua)"
    ]
  },
  {
    id: "pra-4",
    category: "pranzo",
    title: "Wrap di Tacchino e Hummus",
    prepTime: "10 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Turkey+Wrap",
    macros: { cal: 440, protein: 38, carbs: 46, fat: 12 },
    ingredients: [
      "1 piadina integrale",
      "120g fesa di tacchino",
      "3 cucchiai hummus",
      "Lattuga, pomodoro, cetriolo",
      "Senape (opzionale)"
    ],
    instructions: [
      "Spalma hummus sulla piadina",
      "Aggiungi fette di tacchino, lattuga, pomodoro, cetriolo",
      "Arrotola stretto e taglia a metà",
      "Opzionale: scalda 2 min in padella per croccantezza"
    ]
  },
  {
    id: "pra-5",
    category: "pranzo",
    title: "Salmone al Forno con Patate",
    prepTime: "35 min",
    difficulty: "Media",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Salmon+Potatoes",
    macros: { cal: 510, protein: 36, carbs: 42, fat: 20 },
    ingredients: [
      "2 filetti salmone (150g cad.)",
      "400g patate",
      "Limone, aneto",
      "Asparagi 200g",
      "Olio EVO, sale, pepe"
    ],
    instructions: [
      "Taglia patate a spicchi, condisci con olio e sale",
      "Inforna a 200°C per 20 min",
      "Aggiungi salmone condito con limone e aneto, asparagi",
      "Cuoci altri 12-15 min fino a salmone cotto"
    ]
  },

  // ===== CENA (5) =====
  {
    id: "cen-1",
    category: "cena",
    title: "Pollo alla Piastra con Verdure Grigliate",
    prepTime: "25 min",
    difficulty: "Facile",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Grilled+Chicken",
    macros: { cal: 420, protein: 45, carbs: 28, fat: 14 },
    ingredients: [
      "2 petti di pollo (180g cad.)",
      "1 zucchina",
      "1 melanzana",
      "1 peperone",
      "Rosmarino, aglio",
      "Olio EVO"
    ],
    instructions: [
      "Batti i petti di pollo per uniformare spessore",
      "Condisci con rosmarino, aglio, sale, pepe",
      "Griglia pollo 6-7 min per lato",
      "Griglia verdure tagliate a fette spesse, servi insieme"
    ]
  },
  {
    id: "cen-2",
    category: "cena",
    title: "Stir-Fry di Manzo con Broccoli",
    prepTime: "20 min",
    difficulty: "Media",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Beef+Broccoli",
    macros: { cal: 450, protein: 38, carbs: 32, fat: 18 },
    ingredients: [
      "250g manzo magro a strisce",
      "300g broccoli",
      "1 peperone rosso",
      "Salsa soia, zenzero, aglio",
      "Olio sesamo",
      "Riso basmati (opzionale)"
    ],
    instructions: [
      "Scalda wok o padella a fuoco alto con olio sesamo",
      "Salta manzo 3-4 min fino a dorato, rimuovi",
      "Salta broccoli e peperone 4-5 min",
      "Aggiungi manzo, salsa soia, zenzero, aglio. Salta 2 min e servi"
    ]
  },
  {
    id: "cen-3",
    category: "cena",
    title: "Frittata di Verdure al Forno",
    prepTime: "30 min",
    difficulty: "Facile",
    servings: 4,
    image: "https://via.placeholder.com/400x300.png?text=Veggie+Frittata",
    macros: { cal: 280, protein: 22, carbs: 18, fat: 14 },
    ingredients: [
      "8 uova",
      "1 zucchina",
      "1 peperone",
      "100g spinaci",
      "50g parmigiano",
      "Sale, pepe, origano"
    ],
    instructions: [
      "Sbatti uova con parmigiano, sale, pepe",
      "Salta verdure in padella 5 min",
      "Versa uova sulle verdure in teglia oleata",
      "Inforna a 180°C per 20-25 min fino a dorata"
    ]
  },
  {
    id: "cen-4",
    category: "cena",
    title: "Chili di Tacchino Leggero",
    prepTime: "40 min",
    difficulty: "Media",
    servings: 4,
    image: "https://via.placeholder.com/400x300.png?text=Turkey+Chili",
    macros: { cal: 380, protein: 36, carbs: 42, fat: 8 },
    ingredients: [
      "400g tacchino macinato",
      "400g fagioli rossi",
      "400g pomodori pelati",
      "1 cipolla, 1 peperone",
      "Cumino, paprika, peperoncino",
      "Coriandolo fresco"
    ],
    instructions: [
      "Rosola cipolla e peperone in pentola",
      "Aggiungi tacchino e cuoci fino a dorato",
      "Aggiungi pomodori, fagioli, spezie",
      "Simmer 25 min, aggiusta sale, servi con coriandolo"
    ]
  },
  {
    id: "cen-5",
    category: "cena",
    title: "Merluzzo al Cartoccio con Limone",
    prepTime: "25 min",
    difficulty: "Facile",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Cod+Lemon",
    macros: { cal: 320, protein: 42, carbs: 22, fat: 8 },
    ingredients: [
      "2 filetti merluzzo (180g cad.)",
      "1 limone",
      "Pomodorini 150g",
      "Olive 40g",
      "Capperi, prezzemolo",
      "Carta forno"
    ],
    instructions: [
      "Prepara 2 cartocci con carta forno",
      "Metti merluzzo al centro, aggiungi limone a fette, pomodorini, olive, capperi",
      "Chiudi cartocci, inforna a 200°C per 15-18 min",
      "Apri cartocci, guarnisci con prezzemolo e servi"
    ]
  },

  // ===== PRE-WORKOUT (5) =====
  {
    id: "pre-1",
    category: "pre-workout",
    title: "Toast con Burro di Arachidi e Banana",
    prepTime: "5 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=PB+Banana",
    macros: { cal: 320, protein: 12, carbs: 48, fat: 10 },
    timing: "60-90 min prima",
    ingredients: [
      "2 fette pane integrale",
      "20g burro di arachidi",
      "1 banana",
      "Miele (opzionale)"
    ],
    instructions: [
      "Tosta il pane",
      "Spalma burro di arachidi",
      "Aggiungi banana a fette",
      "Opzionale: filo di miele"
    ]
  },
  {
    id: "pre-2",
    category: "pre-workout",
    title: "Energy Balls Dattili e Mandorle",
    prepTime: "15 min",
    difficulty: "Facile",
    servings: 10,
    image: "https://via.placeholder.com/400x300.png?text=Energy+Balls",
    macros: { cal: 95, protein: 3, carbs: 14, fat: 4 },
    timing: "30-45 min prima",
    ingredients: [
      "150g datteri denocciolati",
      "80g mandorle",
      "30g avena",
      "1 cucchiaio cacao",
      "Cocco rapé"
    ],
    instructions: [
      "Frulla datteri e mandorle fino a composto appiccicoso",
      "Aggiungi avena e cacao, frulla ancora",
      "Forma palline da 20g",
      "Rotola nel cocco, conserva in frigo (1 settimana)"
    ]
  },
  {
    id: "pre-3",
    category: "pre-workout",
    title: "Smoothie Energetico Carboidrati",
    prepTime: "5 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Energy+Smoothie",
    macros: { cal: 280, protein: 18, carbs: 48, fat: 4 },
    timing: "45-60 min prima",
    ingredients: [
      "1 banana",
      "150g frutti di bosco",
      "20g avena",
      "1 scoop proteine vaniglia",
      "200ml latte vegetale"
    ],
    instructions: [
      "Frulla tutti gli ingredienti fino a liscio",
      "Aggiungi ghiaccio se desideri più freddo",
      "Bevi lentamente 45-60 min prima del workout"
    ]
  },
  {
    id: "pre-4",
    category: "pre-workout",
    title: "Riso Basmati con Pollo e Miele",
    prepTime: "25 min",
    difficulty: "Media",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Rice+Chicken",
    macros: { cal: 420, protein: 32, carbs: 58, fat: 6 },
    timing: "90-120 min prima",
    ingredients: [
      "80g riso basmati",
      "120g petto di pollo",
      "1 cucchiaino miele",
      "Salsa soia leggera",
      "Zenzero"
    ],
    instructions: [
      "Cuoci riso basmati",
      "Cuoci pollo a dadini con salsa soia e zenzero",
      "Mescola riso e pollo",
      "Aggiungi filo di miele, mescola e servi tiepido"
    ]
  },
  {
    id: "pre-5",
    category: "pre-workout",
    title: "Porridge Express Pre-Allenamento",
    prepTime: "8 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Porridge",
    macros: { cal: 340, protein: 14, carbs: 54, fat: 8 },
    timing: "60-75 min prima",
    ingredients: [
      "50g avena",
      "250ml latte (o vegetale)",
      "1 banana",
      "10g miele",
      "Cannella"
    ],
    instructions: [
      "Cuoci avena nel latte 5 min mescolando",
      "Aggiungi banana schiacciata",
      "Dolcifica con miele e cannella",
      "Consuma tiepido"
    ]
  },

  // ===== POST-WORKOUT (5) =====
  {
    id: "post-1",
    category: "post-workout",
    title: "Protein Shake con Frutti di Bosco",
    prepTime: "3 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Protein+Shake",
    macros: { cal: 280, protein: 35, carbs: 32, fat: 3 },
    timing: "Entro 30 min",
    ingredients: [
      "1 scoop proteine whey",
      "200g frutti di bosco congelati",
      "250ml latte scremato",
      "5g creatina (opzionale)"
    ],
    instructions: [
      "Frulla tutti gli ingredienti",
      "Bevi immediatamente dopo l'allenamento",
      "Opzionale: aggiungi creatina per recovery"
    ]
  },
  {
    id: "post-2",
    category: "post-workout",
    title: "Riso con Uova e Spinaci",
    prepTime: "15 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Rice+Eggs",
    macros: { cal: 460, protein: 28, carbs: 62, fat: 10 },
    timing: "Entro 60 min",
    ingredients: [
      "100g riso bianco",
      "2 uova",
      "100g spinaci",
      "Salsa soia",
      "Olio sesamo"
    ],
    instructions: [
      "Cuoci riso bianco",
      "Salta spinaci con poco olio sesamo",
      "Cuoci uova scrambled o all'occhio",
      "Componi bowl: riso, spinaci, uova, gocce salsa soia"
    ]
  },
  {
    id: "post-3",
    category: "post-workout",
    title: "Patate Dolci con Tonno",
    prepTime: "35 min",
    difficulty: "Facile",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Sweet+Potato",
    macros: { cal: 420, protein: 36, carbs: 58, fat: 6 },
    timing: "Entro 90 min",
    ingredients: [
      "1 patata dolce grande (250g)",
      "160g tonno al naturale",
      "Yogurt greco",
      "Erba cipollina",
      "Sale, pepe"
    ],
    instructions: [
      "Cuoci patata dolce al microonde 8-10 min (o forno 40 min)",
      "Taglia a metà e schiaccia leggermente",
      "Farcisci con tonno, yogurt greco e erba cipollina",
      "Servi calda"
    ]
  },
  {
    id: "post-4",
    category: "post-workout",
    title: "Pasta con Petto di Pollo e Pesto",
    prepTime: "20 min",
    difficulty: "Media",
    servings: 2,
    image: "https://via.placeholder.com/400x300.png?text=Pasta+Pesto",
    macros: { cal: 520, protein: 42, carbs: 64, fat: 12 },
    timing: "Entro 90 min",
    ingredients: [
      "160g pasta (penne/fusilli)",
      "200g petto di pollo",
      "40g pesto di basilico",
      "Pomodorini",
      "Parmigiano"
    ],
    instructions: [
      "Cuoci pasta al dente",
      "Griglia pollo a dadini",
      "Scola pasta, mescola con pesto",
      "Aggiungi pollo e pomodorini tagliati, servi con parmigiano"
    ]
  },
  {
    id: "post-5",
    category: "post-workout",
    title: "Recovery Bowl con Salmone",
    prepTime: "25 min",
    difficulty: "Media",
    servings: 1,
    image: "https://via.placeholder.com/400x300.png?text=Salmon+Bowl",
    macros: { cal: 490, protein: 38, carbs: 48, fat: 18 },
    timing: "Entro 90 min",
    ingredients: [
      "120g salmone",
      "100g quinoa",
      "Edamame 80g",
      "Avocado 1/2",
      "Salsa teriyaki",
      "Semi sesamo"
    ],
    instructions: [
      "Cuoci quinoa (15 min)",
      "Cuoci salmone in padella 4 min per lato",
      "Componi bowl: quinoa, edamame, avocado a fette, salmone",
      "Condisci con salsa teriyaki e semi sesamo"
    ]
  }
];

/* =========================
   RENDERING
   ========================= */

function renderRecipes(filter = "all") {
  const grid = document.getElementById("recipesGrid");
  if (!grid) return;

  const filtered = filter === "all" 
    ? recipesData 
    : recipesData.filter(r => r.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="emptyState">
        <p>Nessuna ricetta trovata in questa categoria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(recipe => {
      const {
        id, title, prepTime, difficulty, servings, image,
        macros, ingredients, instructions, timing
      } = recipe;

      const difficultyColor = {
        'Facile': 'var(--accent2)',
        'Media': 'var(--accent)',
        'Difficile': '#dc2626'
      }[difficulty] || 'var(--muted)';

      return `
        <article class="recipeCard" data-id="${id}">
          <div class="recipeImage">
            <img src="${image}" alt="${title}" loading="lazy">
            <div class="recipeDifficulty" style="background: ${difficultyColor}">
              ${difficulty}
            </div>
          </div>

          <div class="recipeBody">
            <h3 class="recipeTitle">${title}</h3>
            
            <div class="recipeMetaRow">
              <span>⏱️ ${prepTime}</span>
              <span>🍽️ ${servings} ${servings === 1 ? 'porzione' : 'porzioni'}</span>
            </div>

            ${timing ? `<div class="recipeTiming">⚡ ${timing}</div>` : ''}

            <div class="recipeMacros">
              <div class="recipeMacro">
                <span class="recipeMacroValue">${macros.cal}</span>
                <span class="recipeMacroLabel">kcal</span>
              </div>
              <div class="recipeMacro">
                <span class="recipeMacroValue">${macros.protein}g</span>
                <span class="recipeMacroLabel">proteine</span>
              </div>
              <div class="recipeMacro">
                <span class="recipeMacroValue">${macros.carbs}g</span>
                <span class="recipeMacroLabel">carbo</span>
              </div>
              <div class="recipeMacro">
                <span class="recipeMacroValue">${macros.fat}g</span>
                <span class="recipeMacroLabel">grassi</span>
              </div>
            </div>

            <button class="recipeToggle" data-recipe-id="${id}">
              Vedi ricetta completa ↓
            </button>

            <div class="recipeDetails" id="details-${id}" hidden>
              <div class="recipeSection">
                <h4>Ingredienti:</h4>
                <ul>
                  ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
              </div>

              <div class="recipeSection">
                <h4>Preparazione:</h4>
                <ol>
                  ${instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  // Init toggle buttons
  initRecipeToggles();
}

/* =========================
   TOGGLE RICETTE
   ========================= */

function initRecipeToggles() {
  const buttons = document.querySelectorAll('.recipeToggle');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const recipeId = btn.dataset.recipeId;
      const details = document.getElementById(`details-${recipeId}`);
      
      if (details.hasAttribute('hidden')) {
        details.removeAttribute('hidden');
        btn.textContent = 'Nascondi ricetta ↑';
      } else {
        details.setAttribute('hidden', '');
        btn.textContent = 'Vedi ricetta completa ↓';
      }
    });
  });
}

/* =========================
   FILTRI
   ========================= */

function initFilters() {
  const buttons = document.querySelectorAll('.filterBtn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      renderRecipes(filter);

      document.getElementById('recipesGrid')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    });
  });
}

/* =========================
   INIT
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  renderRecipes('all');
  initFilters();
});

