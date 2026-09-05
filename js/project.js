/* =========================================================
   Isabella Castro Camacho — Portfolio · project.js
   Small standalone script for individual project pages
   (nav, theme, language). Kept separate from main.js so a
   page missing homepage-only elements never throws.
   ========================================================= */

const I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About Me", "nav.tools": "Tools & Skills", "nav.projects": "Projects", "nav.background": "Background",
    "contact.title": "Contact Me", "backTop": "Back to top",
    "project.tag": "Organic & Healthy Food",
    "project.sub": "Landing Page -<br>E-commerce",
    "project.desc": "This project is a website aimed at selling organic and healthy foods under the brand “Grow”. The design reflects values such as sustainability, freshness and healthy living, incorporating visual elements related to fruits, vegetables and natural colors that reinforce its ecological identity.<br><br>My participation in this project was not as the author of the original design, but as part of a practical exercise.",
    "project.viewBtn": "View site",
    "project.paletteTitle": "Fonts & Colors",
    "project.mainFont": "Main font", "project.secFonts": "Secondary fonts",
    "project.bold": "Bold", "project.medium": "Medium", "project.regular": "Regular",
  },
  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.tools": "Herramientas", "nav.projects": "Proyectos", "nav.background": "Trayectoria",
    "contact.title": "Contáctame", "backTop": "Volver arriba",
    "project.tag": "Organic & Healthy Food",
    "project.sub": "Landing Page -<br>E-commerce",
    "project.desc": "Este proyecto es un sitio web enfocado en la venta de alimentos orgánicos y saludables bajo la marca “Grow”. El diseño refleja valores como la sostenibilidad, la frescura y la vida saludable, incorporando elementos visuales relacionados con frutas, verduras y colores naturales que refuerzan su identidad ecológica.<br><br>Mi participación en este proyecto no fue como autora del diseño original, sino como parte de un ejercicio práctico.",
    "project.viewBtn": "Ver web",
    "project.paletteTitle": "Fuentes & Colores",
    "project.mainFont": "Fuente principal", "project.secFonts": "Fuentes secundarias",
    "project.bold": "Bold", "project.medium": "Medium", "project.regular": "Regular",
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Navbar ---------- */
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });
  $$(".nav-links a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
}

/* ---------- Theme ---------- */
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
root.dataset.theme = savedTheme;
const themeBtn = $("#themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
  });
}

/* ---------- Language ---------- */
let lang = localStorage.getItem("lang") || "en";
function applyLang(l) {
  lang = l;
  root.lang = l;
  localStorage.setItem("lang", l);
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[l][key] !== undefined) el.innerHTML = I18N[l][key];
  });
  const langBtn = $("#langBtn");
  if (langBtn) langBtn.title = l === "en" ? "Cambiar a español" : "Switch to English";
}
const langBtn = $("#langBtn");
if (langBtn) langBtn.addEventListener("click", () => applyLang(lang === "en" ? "es" : "en"));
applyLang(lang);

/* ---------- Image slots (placeholders until the real image is dropped in) ---------- */
$$(".img-slot img").forEach((img) => {
  const slot = img.closest(".img-slot");
  const markEmpty = () => slot.classList.add("is-empty");
  img.addEventListener("error", markEmpty);
  if (img.complete && img.naturalWidth === 0) markEmpty();
});
