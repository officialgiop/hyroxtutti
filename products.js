/* =========================
   HYROX DIY - products.js
   ========================= */

// Database prodotti (40 prodotti)
const productsData = [
  // === ATTREZZI ===
  {
    id: "kb-reg-12",
    category: "attrezzi",
    name: "Kettlebell Regolabile 8-16kg",
    price: 59.99,
    priceOld: 79.99,
    rating: 4.7,
    reviews: 1234,
    image: "https://via.placeholder.com/300x300.png?text=Kettlebell",
    amazonLink: "#",
    badge: "BEST SELLER",
    features: ["Regolabile 8-12-16kg", "Impugnatura ergonomica", "Risparmia spazio"]
  },
  {
    id: "bands-set",
    category: "attrezzi",
    name: "Resistance Bands Set (5 livelli)",
    price: 24.99,
    rating: 4.6,
    reviews: 892,
    image: "https://via.placeholder.com/300x300.png?text=Bands",
    amazonLink: "#",
    features: ["5 resistenze (2-20kg)", "Ancoraggio porta incluso", "Ideale per pull/row"]
  },
  {
    id: "trx-susp",
    category: "attrezzi",
    name: "TRX Suspension Trainer",
    price: 39.99,
    priceOld: 49.99,
    rating: 4.8,
    reviews: 2103,
    image: "https://via.placeholder.com/300x300.png?text=TRX",
    amazonLink: "#",
    badge: "TOP RATED",
    features: ["Ancoraggi multipli", "Guida esercizi inclusa", "Max 180kg"]
  },
  {
    id: "dumb-adj",
    category: "attrezzi",
    name: "Manubri Regolabili 2×10kg",
    price: 79.99,
    rating: 4.5,
    reviews: 567,
    image: "https://via.placeholder.com/300x300.png?text=Manubri",
    amazonLink: "#",
    features: ["Regolabili 2-10kg", "Cambio peso rapido", "Anti-rotolamento"]
  },
  {
    id: "ab-roller",
    category: "attrezzi",
    name: "Ab Roller + Push-Up Bars",
    price: 27.99,
    rating: 4.4,
    reviews: 734,
    image: "https://via.placeholder.com/300x300.png?text=AbRoller",
    amazonLink: "#",
    features: ["Ruota doppia stabile", "Push-up bar removibili", "Tappetino ginocchia"]
  },
  {
    id: "jump-rope",
    category: "attrezzi",
    name: "Corda Salto Professionale con Contatore",
    price: 18.99,
    rating: 4.6,
    reviews: 1456,
    image: "https://via.placeholder.com/300x300.png?text=JumpRope",
    amazonLink: "#",
    features: ["Cuscinetti a sfera", "Contatore digitale", "Regolabile in altezza"]
  },
  {
    id: "sandbag",
    category: "attrezzi",
    name: "Sandbag Riempibile 20kg",
    price: 42.99,
    rating: 4.5,
    reviews: 298,
    image: "https://via.placeholder.com/300x300.png?text=Sandbag",
    amazonLink: "#",
    features: ["Riempibile con sabbia", "Maniglie rinforzate", "Per lunges e carry"]
  },
  {
    id: "yoga-mat",
    category: "attrezzi",
    name: "Yoga Mat Spesso 6mm + Cinghia",
    price: 29.99,
    rating: 4.7,
    reviews: 3421,
    image: "https://via.placeholder.com/300x300.png?text=YogaMat",
    amazonLink: "#",
    features: ["Antiscivolo TPE", "Ecologico", "180×60×0.6cm"]
  },
  {
    id: "mini-bands",
    category: "attrezzi",
    name: "Mini Bands Loop Set (5 resistenze)",
    price: 14.99,
    rating: 4.6,
    reviews: 987,
    image: "https://via.placeholder.com/300x300.png?text=MiniBands",
    amazonLink: "#",
    features: ["5 livelli", "Glute activation", "Borsa trasporto"]
  },
  {
    id: "plyo-box",
    category: "attrezzi",
    name: "Plyo Box Pieghevole 3 altezze",
    price: 89.99,
    rating: 4.8,
    reviews: 412,
    image: "https://via.placeholder.com/300x300.png?text=PlyoBox",
    amazonLink: "#",
    badge: "PRO CHOICE",
    features: ["50/60/75cm", "Pieghevole", "Max 150kg"]
  },

  // === SALUTE ===
  {
    id: "creatine",
    category: "salute",
    name: "Creatina Monoidrato 500g",
    price: 19.99,
    rating: 4.8,
    reviews: 5632,
    image: "https://via.placeholder.com/300x300.png?text=Creatine",
    amazonLink: "#",
    badge: "ESSENZIALE",
    features: ["Micronizzata", "100 porzioni", "MyProtein certified"]
  },
  {
    id: "whey-isolate",
    category: "salute",
    name: "Proteine Whey Isolate 1kg",
    price: 34.99,
    priceOld: 42.99,
    rating: 4.7,
    reviews: 4123,
    image: "https://via.placeholder.com/300x300.png?text=Whey",
    amazonLink: "#",
    features: ["90% proteine", "Gusto cioccolato", "Basso lattosio"]
  },
  {
    id: "gel-energy",
    category: "salute",
    name: "Gel Energetici SiS (24 pack)",
    price: 29.99,
    rating: 4.6,
    reviews: 876,
    image: "https://via.placeholder.com/300x300.png?text=Gel",
    amazonLink: "#",
    features: ["22g carboidrati/gel", "Facili da digerire", "Gusti assortiti"]
  },
  {
    id: "electrolytes",
    category: "salute",
    name: "Elettroliti in Polvere (30 dosi)",
    price: 22.99,
    rating: 4.5,
    reviews: 512,
    image: "https://via.placeholder.com/300x300.png?text=Electrolytes",
    amazonLink: "#",
    features: ["Zero zuccheri", "Sodio, potassio, magnesio", "Gusto limone"]
  },
  {
    id: "protein-bars",
    category: "salute",
    name: "Barrette Proteiche Mix (20 pezzi)",
    price: 32.99,
    rating: 4.7,
    reviews: 2341,
    image: "https://via.placeholder.com/300x300.png?text=Bars",
    amazonLink: "#",
    features: ["20g proteine/bar", "Barebells quality", "5 gusti"]
  },

  // === ABBIGLIAMENTO ===
  {
    id: "nike-metcon",
    category: "abbigliamento",
    name: "Nike Metcon 9 (Outlet)",
    price: 94.99,
    priceOld: 139.99,
    rating: 4.8,
    reviews: 1876,
    image: "https://via.placeholder.com/300x300.png?text=NikeMetcon",
    amazonLink: "#",
    badge: "SCONTO -32%",
    features: ["Cross-training", "Stabile per squat", "Run-ready"]
  },
  {
    id: "reebok-nano",
    category: "abbigliamento",
    name: "Reebok Nano X3",
    price: 89.99,
    priceOld: 129.99,
    rating: 4.7,
    reviews: 1234,
    image: "https://via.placeholder.com/300x300.png?text=ReebokNano",
    amazonLink: "#",
    features: ["Iconic design", "Durevoli", "Wide toe box"]
  },
  {
    id: "tshirt-dri",
    category: "abbigliamento",
    name: "T-shirt Tecnica Dri-FIT (pack 3)",
    price: 34.99,
    rating: 4.6,
    reviews: 3421,
    image: "https://via.placeholder.com/300x300.png?text=Tshirt",
    amazonLink: "#",
    features: ["Quick-dry", "Anti-odore", "Taglio slim"]
  },
  {
    id: "shorts-run",
    category: "abbigliamento",
    name: "Pantaloncini Running (2 pezzi)",
    price: 27.99,
    rating: 4.5,
    reviews: 987,
    image: "https://via.placeholder.com/300x300.png?text=Shorts",
    amazonLink: "#",
    features: ["7 inch", "Tasche zipper", "Lightweight"]
  },
  {
    id: "sports-bra",
    category: "abbigliamento",
    name: "Sports Bra High Impact (2 pezzi)",
    price: 39.99,
    rating: 4.8,
    reviews: 2109,
    image: "https://via.placeholder.com/300x300.png?text=SportsBra",
    amazonLink: "#",
    features: ["Supporto massimo", "Removable pads", "Nike/Adidas"]
  },

  // === TECH ===
  {
    id: "amazfit-band",
    category: "tech",
    name: "Amazfit Band 7",
    price: 49.99,
    rating: 4.6,
    reviews: 8765,
    image: "https://via.placeholder.com/300x300.png?text=Amazfit",
    amazonLink: "#",
    badge: "BUDGET KING",
    features: ["HR monitor", "120 sport modes", "14 giorni batteria"]
  },
  {
    id: "polar-h10",
    category: "tech",
    name: "Polar H10 Heart Rate Monitor",
    price: 79.99,
    rating: 4.9,
    reviews: 3421,
    image: "https://via.placeholder.com/300x300.png?text=PolarH10",
    amazonLink: "#",
    badge: "PRO CHOICE",
    features: ["Precisione ECG", "Bluetooth + ANT+", "Waterproof"]
  },
  {
    id: "smart-scale",
    category: "tech",
    name: "Bilancia Impedenziometrica Smart",
    price: 39.99,
    rating: 4.5,
    reviews: 2341,
    image: "https://via.placeholder.com/300x300.png?text=Scale",
    amazonLink: "#",
    features: ["13 metriche", "App sync", "Max 180kg"]
  },
  {
    id: "earbuds-sport",
    category: "tech",
    name: "Auricolari Bluetooth Sport IP68",
    price: 44.99,
    priceOld: 59.99,
    rating: 4.6,
    reviews: 1876,
    image: "https://via.placeholder.com/300x300.png?text=Earbuds",
    amazonLink: "#",
    features: ["Resistenti sudore", "8h batteria", "Ganci orecchio"]
  },
  {
    id: "timer-gym",
    category: "tech",
    name: "Timer LED Palestra (Tabata/EMOM)",
    price: 49.99,
    rating: 4.7,
    reviews: 567,
    image: "https://via.placeholder.com/300x300.png?text=Timer",
    amazonLink: "#",
    features: ["Display 4 inch", "Programmabile", "Magnete + stand"]
  }
];

/* =========================
   RENDERING
   ========================= */

function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all" 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="emptyState">
        <p>Nessun prodotto trovato in questa categoria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(product => {
      const {
        id, name, price, priceOld, rating, reviews, 
        image, amazonLink, badge, features
      } = product;

      const discount = priceOld 
        ? Math.round(((priceOld - price) / priceOld) * 100)
        : 0;

      const stars = "⭐".repeat(Math.floor(rating));

      return `
        <article class="productCard" data-id="${id}">
          ${badge ? `<div class="productBadge">${badge}</div>` : ''}
          ${discount > 0 ? `<div class="productDiscount">-${discount}%</div>` : ''}
          
          <div class="productImage">
            <img src="${image}" alt="${name}" loading="lazy">
          </div>

          <div class="productBody">
            <h3 class="productName">${name}</h3>
            
            <div class="productRating">
              <span class="productStars">${stars}</span>
              <span class="productReviews">${rating} (${reviews.toLocaleString()})</span>
            </div>

            <ul class="productFeatures">
              ${features.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
            </ul>

            <div class="productFooter">
              <div class="productPrice">
                ${priceOld ? `<span class="productPriceOld">€${priceOld}</span>` : ''}
                <span class="productPriceNew">€${price}</span>
              </div>
              <a href="${amazonLink}" class="btn btn--primary" target="_blank" rel="noopener">
                Vedi su Amazon →
              </a>
            </div>

            <div class="productTrust">
              <span>✓ Consegna Prime</span>
              <span>✓ Reso gratuito 30gg</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

/* =========================
   FILTRI
   ========================= */

function initFilters() {
  const buttons = document.querySelectorAll('.filterBtn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter products
      const filter = btn.dataset.filter;
      renderProducts(filter);

      // Scroll to grid
      document.getElementById('productsGrid')?.scrollIntoView({ 
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
  renderProducts('all');
  initFilters();
});

