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
    "project.sub": "Landing Page -<br>E-commerce",
    "project.viewBtn": "View site",
    "project.paletteTitle": "Fonts & Colors",
    "project.mainFont": "Main font", "project.secFonts": "Secondary fonts",
    "project.bold": "Bold", "project.medium": "Medium", "project.regular": "Regular",
    "grow.tag": "Organic & Healthy Food",
    "grow.desc": "This project is a website aimed at selling organic and healthy foods under the brand “Grow”. The design reflects values such as sustainability, freshness and healthy living, incorporating visual elements related to fruits, vegetables and natural colors that reinforce its ecological identity.<br><br>My participation in this project was not as the author of the original design, but as part of a practical exercise.",
    "plant.tag": "Indoor Plants for a Better Life",
    "plant.desc": "This project is a website for a fictitious brand called “Plant.io,” specializing in the sale of decorative and indoor plants. The design has a modern and elegant approach, with a background that evokes nature through green leaf textures.<br><br>It is aimed at highlighting popular products and trends in home plants, with well-defined sections such as “Trendy Plants,” “Best Sellers” and “Customer Reviews”.",
    "dashboard.tag": "Car Sales",
    "dashboard.sub": "Sales analytics<br>integration panel",
    "dashboard.desc": "The goal is to identify whether the problem of low sales is due to specific brands, cities, salespeople, or other unknown factors.",
    "colombia.tag": "UX/UI Analysis & Redesign",
    "colombia.sub": "Official Festival Website",
    "colombia.desc": "This project is a UX/UI redesign of the official website for “Colombia Canta y Encanta”, a folk festival celebrating Colombian culture through music and dance.<br><br>The goal was to modernize the visual identity and simplify the journey for participants, with clear sections to join the contest, browse past events, and share the experience on social media.",
    "techxpress.tag": "UX/UI Ecommerce Design",
    "techxpress.desc": "This project is a UX/UI design for “TechXpress”, a fictitious e-commerce platform specializing in tech components and gaming peripherals.<br><br>The design uses a bold dark theme with vivid pink accents to appeal to a tech-savvy audience, featuring clear product categories, secure checkout messaging, and a dedicated support section.",
    "coffeetour.tag": "A coffee experience in Chapinero, Bogotá",
    "coffeetour.desc": "This project is an original website designed in Wix that highlights a coffee tour in Chapinero, Bogotá, Colombia.<br><br>The website is focused on providing an immersive experience to users, integrating interactive elements such as audios that describe the tour, photos that capture the essence of the coffee shops and the vibe of the neighborhood, and a detailed review of the four coffee shops visited.",
  },
  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.tools": "Herramientas", "nav.projects": "Proyectos", "nav.background": "Trayectoria",
    "contact.title": "Contáctame", "backTop": "Volver arriba",
    "project.sub": "Landing Page -<br>E-commerce",
    "project.viewBtn": "Ver web",
    "project.paletteTitle": "Fuentes & Colores",
    "project.mainFont": "Fuente principal", "project.secFonts": "Fuentes secundarias",
    "project.bold": "Bold", "project.medium": "Medium", "project.regular": "Regular",
    "grow.tag": "Organic & Healthy Food",
    "grow.desc": "Este proyecto es un sitio web enfocado en la venta de alimentos orgánicos y saludables bajo la marca “Grow”. El diseño refleja valores como la sostenibilidad, la frescura y la vida saludable, incorporando elementos visuales relacionados con frutas, verduras y colores naturales que refuerzan su identidad ecológica.<br><br>Mi participación en este proyecto no fue como autora del diseño original, sino como parte de un ejercicio práctico.",
    "plant.tag": "Plantas de Interior para una Vida Mejor",
    "plant.desc": "Este proyecto es un sitio web para una marca ficticia llamada “Plant.io”, especializada en la venta de plantas decorativas y de interior. El diseño tiene un enfoque moderno y elegante, con un fondo que evoca la naturaleza a través de texturas de hojas verdes.<br><br>Está orientado a destacar productos populares y tendencias en plantas para el hogar, con secciones bien definidas como “Trendy Plants”, “Best Sellers” y “Customer Reviews”.",
    "dashboard.tag": "Car Sales",
    "dashboard.sub": "Panel de análisis<br>de ventas",
    "dashboard.desc": "El objetivo es identificar si el problema de las bajas ventas se debe a marcas específicas, ciudades, vendedores u otros factores desconocidos.",
    "colombia.tag": "Análisis y Rediseño UX/UI",
    "colombia.sub": "Sitio Web Oficial del Festival",
    "colombia.desc": "Este proyecto es un rediseño UX/UI del sitio web oficial de “Colombia Canta y Encanta”, un festival folclórico que celebra la cultura colombiana a través de la música y la danza.<br><br>El objetivo fue modernizar la identidad visual y simplificar el recorrido de los participantes, con secciones claras para inscribirse al concurso, ver eventos pasados y compartir la experiencia en redes sociales.",
    "techxpress.tag": "Diseño UX/UI de Ecommerce",
    "techxpress.desc": "Este proyecto es un diseño UX/UI para “TechXpress”, una plataforma de ecommerce ficticia especializada en componentes tecnológicos y periféricos gaming.<br><br>El diseño usa un tema oscuro y llamativo con acentos rosa vibrante para atraer a un público tecnológico, con categorías de producto claras, mensajes de pago seguro y una sección dedicada a soporte.",
    "coffeetour.tag": "Una experiencia cafetera en Chapinero, Bogotá",
    "coffeetour.desc": "Este proyecto es un sitio web original diseñado en Wix que destaca un recorrido cafetero en Chapinero, Bogotá, Colombia.<br><br>El sitio está enfocado en brindar una experiencia inmersiva a los usuarios, integrando elementos interactivos como audios que describen el recorrido, fotos que capturan la esencia de las cafeterías y el ambiente del barrio, y una reseña detallada de las cuatro cafeterías visitadas.",
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

/* ---------- Mockup image: one 360° spin + bounce, on hover-enter or click ----------
   Triggered from JS (not CSS :hover) and guarded by `spinning`, because the
   rotateY transform changes the element's painted shape as it turns, which
   can make the cursor drift in and out of its hit-area and re-trigger a
   plain :hover animation several times in a row instead of playing once. */
const mockupImg = $(".project-mockup img");
if (mockupImg) {
  let spinning = false;
  const triggerSpin = () => {
    if (spinning || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    spinning = true;
    mockupImg.classList.add("spin-once");
  };
  mockupImg.addEventListener("animationend", (e) => {
    if (e.animationName !== "mockupSpin") return;
    mockupImg.classList.remove("spin-once");
    spinning = false;
  });
  mockupImg.addEventListener("mouseenter", triggerSpin);
  mockupImg.addEventListener("click", triggerSpin);
}

/* ---------- Scroll reveal ---------- */
const REVEAL = ".project-hero-card, .project-mockup, .project-info, h2, .font-card, .swatch, .contact-card";
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in-view");
    revealObs.unobserve(en.target);
  });
}, { threshold: .1, rootMargin: "0px 0px -6% 0px" });
$$(REVEAL).forEach((el, i) => {
  el.setAttribute("data-reveal", "");
  el.style.setProperty("--reveal-i", i % 8);
  revealObs.observe(el);
});

/* ---------- Click ripples ---------- */
const rippleLayer = document.createElement("div");
rippleLayer.id = "ripples";
document.body.prepend(rippleLayer);

const RIPPLE_TONES = ["#3f6fb5", "#5a8bd6", "#8fb4ee", "#2f5a98", "#7ea6e6"];
const NO_RIPPLE = "a, button, input, textarea, select, label";

document.addEventListener("click", (e) => {
  if (e.target.closest(NO_RIPPLE)) return;          // let real controls do their job
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = document.createElement("span");
  r.className = "ripple";
  r.style.left = `${e.clientX}px`;
  r.style.top = `${e.clientY}px`;
  r.style.setProperty("--tone", RIPPLE_TONES[Math.floor(Math.random() * RIPPLE_TONES.length)]);
  r.addEventListener("animationend", () => r.remove());
  rippleLayer.appendChild(r);
});
