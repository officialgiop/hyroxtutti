// navbar.js
(function () {
  function initNavbar() {
    // Adatta questi selettori alle tue classi HTML
    const nav = document.querySelector(".navbar");
    const toggle = document.querySelector(".navbar__toggle");
    const menu = document.querySelector(".navbar__menu");

    if (!nav || !toggle || !menu) return;

    const OPEN_CLASS = "is-open";
    const ACTIVE_CLASS = "active";

    const setOpen = (open) => {
      menu.classList.toggle(OPEN_CLASS, open);
      toggle.classList.toggle(OPEN_CLASS, open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    // Stato iniziale accessibilità
    if (!toggle.hasAttribute("aria-expanded")) toggle.setAttribute("aria-expanded", "false");
    if (!toggle.hasAttribute("aria-controls")) {
      // se il menu ha id lo usiamo, altrimenti niente
      if (menu.id) toggle.setAttribute("aria-controls", menu.id);
    }

    // Toggle menu (tap/click)
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpen(!menu.classList.contains(OPEN_CLASS));
    });

    // Chiudi cliccando fuori
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!menu.contains(target) && !toggle.contains(target)) setOpen(false);
    });

    // Chiudi con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    // Chiudi dopo click su un link del menu (mobile)
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Imposta link attivo in base alla pagina corrente (works on GitHub Pages subpaths)
    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    nav.querySelectorAll("a").forEach((link) => {
      const href = (link.getAttribute("href") || "").trim();
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const linkFile = href.split("?")[0].split("#")[0].split("/").pop().toLowerCase();
      if (linkFile === currentFile) link.classList.add(ACTIVE_CLASS);
      else link.classList.remove(ACTIVE_CLASS);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();

