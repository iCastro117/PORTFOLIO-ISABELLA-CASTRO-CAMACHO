/* =========================================================
   Isabella Castro Camacho — Portfolio · main.js
   ========================================================= */

/* ---------- DATA (edit freely) ---------- */
const TOOL = (name) => name === "wix" ? "assets/proyectos/wix.png" : `assets/tools/${name}.svg`;

// 22 projects → 4 pages of 6. Tools per project are the real stack of each one.
// Projects 8/9/10 and 13/14/15 were swapped (with their thumbnail images in
// assets/proyectos/) per request; then Psychological Monitor (originally
// #13) moved #8 → #11 → #13, swapping each time with whatever was there.
const PROJECT_TAGS = [
  ["figma"],
  ["figma"],
  ["figma"],
  ["figma", "react", "nodejs", "neon", "postgresql", "css", "java"],
  ["figma"],
  ["wix"],
  ["figma"],
  ["figma", "java", "springboot", "postgresql", "html", "css", "javascript", "docker"],
  ["figma", "nodejs", "postgresql", "javascript", "brevo", "railway", "html", "css", "java"],
  ["sql", "java"],
  ["java"],
  ["java"],
  ["java"],
  ["java"],
  ["java"],
  ["illustrator"],
  ["illustrator"],
  ["illustrator"],
  ["photoshop"],
  ["photoshop"],
  ["photoshop"],
  ["indesign"],
];
// projects with their own case-study page — everything else falls back to
// the generic Grow placeholder title/link until it gets its own page too
const PROJECT_PAGES = {
  0: { title: "Grow, Organic & Healthy Food", titleEs: "Grow, Alimentos Orgánicos y Saludables", link: "project-grow.html" },
  1: { title: "Plant.io, Indoor Plants for a Better Life", titleEs: "Plant.io, Plantas de Interior para una Vida Mejor", link: "project-plant.html" },
  2: { title: "Dashboard, Car Sales", titleEs: "Dashboard, Ventas de Vehículos", link: "project-dashboard.html" },
  3: { title: "Colombia Canta y Encanta, UX/UI Analysis & Redesign", titleEs: "Colombia Canta y Encanta, Análisis y Rediseño UX/UI", link: "project-colombia.html" },
  4: { title: "TechXpress, UX/UI Ecommerce Design", titleEs: "TechXpress, Diseño UX/UI de Ecommerce", link: "project-techxpress.html" },
  5: { title: "Coffee Tour, A coffee experience in Chapinero, Bogotá", titleEs: "Coffee Tour, Una experiencia cafetera en Chapinero, Bogotá", link: "project-coffeetour.html" },
  6: { title: "ExpoKonrad, Expo Konrad corporate website", titleEs: "ExpoKonrad, Sitio web corporativo de Expo Konrad", link: "project-expokonrad.html" },
  7: { title: "Psychological Monitor, USAR-COL 13", titleEs: "Monitor Psicológico, USAR-COL 13", link: "project-psychmonitor.html" },
  8: { title: "USS Sello Editorial, University Book Publishing & Sales Platform", titleEs: "USS Sello Editorial, Plataforma de Publicación y Venta de Libros Universitarios", link: "project-usssello.html" },
  9: { title: "Literary Manager, Relational Database Design", titleEs: "Literary Manager, Diseño de Base de Datos Relacional", link: "project-literarydb.html" },
  10: { title: "Bomberman, Game with MVC Design Pattern", titleEs: "Bomberman, Juego con Patrón de Diseño MVC", link: "project-bomberman.html" },
  11: { title: "Medical Appointment Management System with FIFO and LIFO Data Structure", titleEs: "Sistema de Gestión de Citas Médicas con Estructuras de Datos FIFO y LIFO", link: "project-citasmedicas.html" },
  12: { title: "Sales and Vehicle Cost Management with MVC Pattern", titleEs: "Gestión de Ventas y Costos Vehiculares con Patrón MVC", link: "project-vehiculos.html" },
  13: { title: "Payroll Management by Roles with MVC Pattern", titleEs: "Gestión de Nómina por Roles con Patrón MVC", link: "project-nomina.html" },
  14: { title: "Vehicle Cost Simulator with MVC Pattern", titleEs: "Simulador de Costos Vehiculares con Patrón MVC", link: "project-simuladorvehiculos.html" },
  15: { title: "Geographic Isolation and Application in Production", titleEs: "Aislamiento Geográfico y Aplicación en Producción", link: "project-geoisolation.html" },
  16: { title: "Hamburger Packaging Design Mockup", titleEs: "Mockup de Diseño de Empaque para Hamburguesa", link: "project-burgerpackaging.html" },
  17: { title: "Design and Construction of the Automata Structure Mechanism", titleEs: "Diseño y Construcción del Mecanismo de una Estructura Autómata", link: "project-automata.html" },
  18: { title: "Painting, Drawing and Photo Retouching", titleEs: "Pintura, Dibujo y Retoque Fotográfico", link: "project-photoretouch.html" },
  19: { title: "Photo Retouching", titleEs: "Retoque Fotográfico", link: "project-photomontage.html" },
  20: { title: "Photo Montage", titleEs: "Fotomontaje", link: "project-ecofarm.html" },
  21: { title: "Coffee Magazine Design", titleEs: "Diseño de Revista de Café", link: "project-coffeemag.html" },
};
const PROJECT_SUB = { en: "E-commerce Web Site", es: "Sitio Web de Comercio Electrónico" };
// rebuilt on every render (not just once) so it always reflects the
// current language — see renderProjects() below
function buildProjects() {
  return PROJECT_TAGS.map((tags, i) => ({
    title: (lang === "es" ? PROJECT_PAGES[i]?.titleEs : PROJECT_PAGES[i]?.title) ?? PROJECT_PAGES[0].title,
    sub: PROJECT_SUB[lang],
    img: `assets/proyectos/proyecto${i + 1}.png`,
    link: PROJECT_PAGES[i]?.link ?? "#",
    tags,
  }));
}

const EXPERIENCE = {
  ux: [
    { logo: "assets/logos/ux/logo1.png", date: "2026", role: "Research Assistant · Delfín Program", sub: "UX design + front-end for a university e-commerce", org: "Señor de Sipán University (Peru)", inst: "Remote from Colombia", tags: ["Figma", "HTML", "CSS", "Node.js", "SRS docs", "SCRUM"] },
    { logo: "assets/logos/ux/logo2.png", date: "2024 — Present", role: "Freelance UX/UI Designer", sub: "End-to-end product & interface design", org: "Independent", inst: "Remote", tags: ["Figma", "Prototyping", "Design systems", "User research"] },
  ],
  llm: [
    { logo: "assets/logos/ai-trainer/logo1.png", date: "2026", role: "AI Trainer · Video Robot Evaluation", sub: "Paired rollout comparison against quality rubrics", org: "Micro1", inst: "Remote", tags: ["Video evaluation", "Physical plausibility", "Cross-camera QA", "Annotation"] },
    { logo: "assets/logos/ai-trainer/logo2.png", date: "2026", role: "AI Trainer · Code Response Verifier", sub: "Labeling AI answers for coding tasks", org: "Alignerr", inst: "Remote", tags: ["Code evaluation", "Reasoning quality", "Instruction adherence"] },
    { logo: "assets/logos/ai-trainer/logo3.png", date: "2026", role: "AI Trainer · Video Annotation", sub: "Events, timestamps and multi-level descriptions", org: "Crossing Hurdles", inst: "Remote", tags: ["Video annotation", "Timestamps", "Computer vision", "Multimodal"] },
    { logo: "assets/logos/ai-trainer/logo4.png", date: "2026", role: "AI Trainer · Data Input & Audio Verifier", sub: "Comparing and ranking model responses", org: "T-Maxx", inst: "Remote", tags: ["Prompt analysis", "Response ranking", "Guidelines"] },
    { logo: "assets/logos/ai-trainer/logo5.png", date: "2025", role: "AI Trainer · Audio Data Annotator", sub: "Cardamom Project — LLM & speech", org: "DataForce by TransPerfect", inst: "Remote", tags: ["LatAm Spanish", "Voice & tone", "Noise detection"] },
  ],
  data: [
    { logo: "assets/logos/data-entry/logo1.png", date: "2026", role: "Medical & Multilingual Data Entry Specialist", sub: "Records digitization and CRM data", org: "The Language Doctors", inst: "Remote", tags: ["Word & Excel", "CRM", "EN · ES · IT · DE", "Confidentiality"] },
    { logo: "assets/logos/data-entry/logo2.png", date: "2026", role: "Data Entry Assistant & Business Research", sub: "Company data from international registries", org: "Global Advance", inst: "Remote", tags: ["Public registries", "Databases", "Data QC"] },
  ],
  qa: [
    { logo: "assets/logos/qa/logo1.png", date: "December 2025", role: "QA Reviewer & Data Annotator", sub: "100+ audio annotation tasks reviewed per day", org: "DataForce by TransPerfect", inst: "Remote", tags: ["Transcription QA", "Formatting rules", "Written feedback"] },
  ],
};

const AWARDS = Array.from({ length: 8 }, (_, i) => ({
  img: `assets/awards/award${i + 1}.png`,
  key: `awards.${i}`,                    // caption text lives in I18N, see below
}));

/* ---------- i18n ---------- */
const I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About Me", "nav.tools": "Tools & Skills", "nav.projects": "Projects", "nav.background": "Background",
    "hero.notHow": "It's not how", "hero.looks": "IT LOOKS", "hero.itsHow": "It's how", "hero.works": "IT WORKS",
    "hero.desc": "Systems engineering professional with strong passion for UX/UI design and the creation of user centered digital experiences.",
    "hero.projectsBtn": "Projects", "hero.companies": "Companies", "hero.workedFor": "I have worked for.", "hero.profile": "Profile",
    "flip.turn": "Turn over to", "flip.share": "Share portfolio", "flip.download": "Download", "flip.scan": "Scan or share", "flip.copied": "Link copied!", "flip.back": "Turn back",
    "stats.years": "Years of<br>experience", "stats.certs": "Certifications", "stats.tools": "Tools",
    "quotes.0": "I apply Nielsen's heuristics and the Laws of UX to build practical, user-centered products — with hands-on experience training and evaluating AI systems.",
    "quotes.1": "I design interfaces that are accessible, consistent and measurable, validating every decision with real users before shipping.",
    "quotes.2": "From wireframe to code: I prototype in Figma and bring designs to life with HTML, CSS, JavaScript and Java.",
    "quotes.3": "Curious by nature, I combine systems engineering with a designer's eye to solve real problems in Latin America.",
    "quotes.role": "UX/UI Designer",
    "edu.0.t": "Bachelor´s in Systems Engineering", "edu.1.t": "Associate in Audiovisual Graphic Media",
    "tools.eyebrow": "TOOLS & SKILLS", "tools.languages": "Languages", "tools.spanish": "Spanish", "tools.english": "English", "tools.korean": "Korean", "tools.french": "French",
    "projects.eyebrow": "FEATURE PROJECTS", "projects.title": "Selected Work",
    "exp.eyebrow": "BACKGROUND", "exp.title": "Experience",
    "awards.eyebrow": "Along the way", "awards.title": "Awards",
    "awards.0": "Honor Mention for Best GPA — School of Systems Engineering (2025-1)",
    "awards.1": "Honor Mention for Best GPA — School of Systems Engineering (2025-2)",
    "awards.2": "Honor Mention for Best GPA — School of Systems Engineering (2023-1)",
    "awards.3": "Artificial Intelligence Certificate",
    "awards.4": "Cisco Networking Academy — Introduction to Networks",
    "awards.5": "Cisco Networking Academy — Switching, Routing, and Wireless Essentials",
    "awards.6": "Best Research Assistant in Virtual Reality (2026)",
    "awards.7": "Coming Soon",
    "contact.title": "Contact Me", "backTop": "Back to top",
  },
  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.tools": "Herramientas", "nav.projects": "Proyectos", "nav.background": "Trayectoria",
    "hero.notHow": "No es cómo", "hero.looks": "SE VE", "hero.itsHow": "Es cómo", "hero.works": "FUNCIONA",
    "hero.desc": "Profesional en ingeniería de sistemas con gran pasión por el diseño UX/UI y la creación de experiencias digitales centradas en el usuario.",
    "hero.projectsBtn": "Proyectos", "hero.companies": "Empresas", "hero.workedFor": "con las que he trabajado.", "hero.profile": "Perfil",
    "flip.turn": "Gira para", "flip.share": "compartir el portafolio", "flip.download": "Descargar", "flip.scan": "Escanea o comparte", "flip.copied": "¡Enlace copiado!", "flip.back": "Volver",
    "stats.years": "Años de<br>experiencia", "stats.certs": "Certificaciones", "stats.tools": "Herramientas",
    "quotes.0": "Aplico las heurísticas de Nielsen y las Leyes de UX para crear productos prácticos y centrados en el usuario, con experiencia práctica entrenando y evaluando sistemas de IA.",
    "quotes.1": "Diseño interfaces accesibles, consistentes y medibles, validando cada decisión con usuarios reales antes de lanzar.",
    "quotes.2": "Del wireframe al código: prototipo en Figma y doy vida a los diseños con HTML, CSS, JavaScript y Java.",
    "quotes.3": "Curiosa por naturaleza, combino la ingeniería de sistemas con ojo de diseñadora para resolver problemas reales en Latinoamérica.",
    "quotes.role": "Diseñadora UX/UI",
    "edu.0.t": "Ingeniería de Sistemas", "edu.1.t": "Tecnología en Medios Gráficos Audiovisuales",
    "tools.eyebrow": "HERRAMIENTAS Y HABILIDADES", "tools.languages": "Idiomas", "tools.spanish": "Español", "tools.english": "Inglés", "tools.korean": "Coreano", "tools.french": "Francés",
    "projects.eyebrow": "PROYECTOS DESTACADOS", "projects.title": "Trabajos seleccionados",
    "exp.eyebrow": "TRAYECTORIA", "exp.title": "Experiencia",
    "awards.eyebrow": "En el camino", "awards.title": "Reconocimientos",
    "awards.0": "Mención de Honor por Mejor Promedio — Facultad de Ingeniería de Sistemas (2025-1)",
    "awards.1": "Mención de Honor por Mejor Promedio — Facultad de Ingeniería de Sistemas (2025-2)",
    "awards.2": "Mención de Honor por Mejor Promedio — Facultad de Ingeniería de Sistemas (2023-1)",
    "awards.3": "Certificado en Inteligencia Artificial",
    "awards.4": "Cisco Networking Academy — Introducción a Redes",
    "awards.5": "Cisco Networking Academy — Switching, Routing, and Wireless Essentials",
    "awards.6": "Mejor Asistente de Investigación en Realidad Virtual (2026)",
    "awards.7": "Próximamente",
    "contact.title": "Contáctame", "backTop": "Volver arriba",
  },
};

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Navbar ---------- */
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
$$(".nav-links a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Active link on scroll
const sections = ["home", "about", "tools", "projects", "background"].map((id) => document.getElementById(id)).filter(Boolean);
function updateActiveLink() {
  const y = window.scrollY + window.innerHeight * 0.4;
  let current = sections[0];
  sections.forEach((s) => { if (s.offsetTop <= y) current = s; });
  $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`));
}
window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

/* ---------- Theme ---------- */
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
root.dataset.theme = savedTheme;
$("#themeBtn").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
});

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
  $("#langBtn").title = l === "en" ? "Cambiar a español" : "Switch to English";
}
$("#langBtn").addEventListener("click", () => applyLang(lang === "en" ? "es" : "en"));
applyLang(lang);

/* ---------- Counters ---------- */
function animateCounters() {
  $$(".stat-num").forEach((el) => {
    const target = +el.dataset.count;
    let n = 0;
    const step = Math.max(1, Math.round(target / 30));
    const tick = () => {
      n = Math.min(target, n + step);
      el.textContent = `+${n}`;
      if (n < target) requestAnimationFrame(tick);
    };
    tick();
  });
}
const statsObs = new IntersectionObserver((e) => { if (e[0].isIntersecting) { animateCounters(); statsObs.disconnect(); } }, { threshold: .4 });
statsObs.observe($(".stats"));

/* ---------- Language bars ---------- */
const barObs = new IntersectionObserver((e) => { if (e[0].isIntersecting) { $$(".bar").forEach((b) => b.classList.add("animate")); barObs.disconnect(); } }, { threshold: .3 });
barObs.observe($(".languages"));

/* ---------- Quotes carousel ---------- */
const quotes = $$(".quote-text");
const dotsBox = $("#quoteDots");
let qi = 0, qTimer;
quotes.forEach((_, i) => {
  const b = document.createElement("button");
  b.setAttribute("aria-label", `Quote ${i + 1}`);
  b.addEventListener("click", () => { showQuote(i); restartQuotes(); });
  dotsBox.appendChild(b);
});
function showQuote(i) {
  qi = i;
  quotes.forEach((q, k) => q.classList.toggle("active", k === i));
  $$("button", dotsBox).forEach((d, k) => d.classList.toggle("active", k === i));
}
function restartQuotes() { clearInterval(qTimer); qTimer = setInterval(() => showQuote((qi + 1) % quotes.length), 3000); }
showQuote(0); restartQuotes();

/* ---------- Projects + pagination ---------- */
const PER_PAGE = 6;
const grid = $("#projectGrid");
const pag = $("#pagination");
let page = 1;
const extIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>`;

function renderProjects() {
  const projects = buildProjects();
  const start = (page - 1) * PER_PAGE;
  grid.innerHTML = projects.slice(start, start + PER_PAGE).map((p) => `
    <a class="project" href="${p.link}" aria-label="Open ${p.title}">
      <div class="project-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
      <div class="project-body">
        <div class="project-head">
          <span class="project-title">${p.title}</span>
          <span class="project-head-icon">${extIcon}</span>
        </div>
        <p class="project-sub">${p.sub}</p>
        <span class="project-tags">${p.tags.map((t) => `<img src="${TOOL(t)}" alt="${t}" title="${t}">`).join("")}</span>
      </div>
    </a>`).join("");

  const pages = Math.ceil(projects.length / PER_PAGE);
  pag.innerHTML = Array.from({ length: pages }, (_, i) => `<button class="${i + 1 === page ? "active" : ""}" data-page="${i + 1}">${i + 1}</button>`).join("");
}
pag.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  page = +b.dataset.page;
  renderProjects();
  observeReveals(grid);          // the new cards fade in too
  $("#projects").scrollIntoView({ behavior: "smooth", block: "start" });
});
renderProjects();
// re-render the project cards (title + subtitle) whenever the language
// toggles — applyLang() only updates elements with [data-i18n], and the
// cards are built dynamically, so they need their own refresh here
$("#langBtn").addEventListener("click", renderProjects);

/* ---------- Experience tabs ---------- */
const timeline = $("#timeline");
const STOP = ["the", "by", "and", "of", "de", "del", "la", "el"];
function initials(name) {
  const words = name.replace(/[^A-Za-zÁ-ú ]/g, " ").split(/\s+/)
    .filter(w => w.length > 2 && !STOP.includes(w.toLowerCase()));
  if (!words.length) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).replace(/^./, c => c.toUpperCase());
  return words.slice(0, 2).map(w => w[0].toUpperCase()).join("");
}
function renderTimeline(key) {
  timeline.innerHTML = EXPERIENCE[key].map((x) => `
    <div class="tl-item">
      <span class="tl-marker">
        <span class="tl-logo">${x.logo ? `<img src="${x.logo}" alt="${x.org}" data-initials="${initials(x.org)}">` : `<b class="tl-initials">${initials(x.org)}</b>`}</span>
        <span class="tl-line"></span>
      </span>
      <div class="tl-card">
        <div class="tl-head">
          <div>
            <div class="tl-role">${x.role}</div>
            <div class="tl-sub">${x.sub}</div>
          </div>
          <span class="tl-date">${x.date}</span>
        </div>
        <div class="tl-org">${x.org}<span>·</span>${x.inst}</div>
        <div class="tl-tags">${x.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <span class="tl-dots" aria-hidden="true"></span>
      </div>
    </div>`).join("");

  // logo not dropped in the folder yet → show the company initials instead
  $$(".tl-logo img", timeline).forEach((img) => {
    img.addEventListener("error", () => {
      img.parentElement.innerHTML = `<b class="tl-initials">${img.dataset.initials}</b>`;
    });
  });
}
$("#expTabs").addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (!t) return;
  $$(".tab").forEach((b) => b.classList.toggle("active", b === t));
  renderTimeline(t.dataset.tab);
});
renderTimeline("ux");

/* ---------- Awards carousel + lightbox ---------- */
const awardGrid = $("#awardGrid");
awardGrid.innerHTML = AWARDS.map((a, i) => `
  <figure class="award" data-i="${i}">
    <img src="${a.img}" alt="" loading="lazy">
    <p data-i18n="${a.key}">${I18N.en[a.key]}</p>
  </figure>`).join("");
applyLang(lang);          // the captions were injected after the first pass

/* arrow-driven scrolling (no auto-play, no drag) */
const awardCarousel = $("#awardCarousel");
const awardPrev = $("#awardPrev");
const awardNext = $("#awardNext");
function updateAwardArrows() {
  const max = awardCarousel.scrollWidth - awardCarousel.clientWidth - 1;
  awardPrev.disabled = awardCarousel.scrollLeft <= 0;
  awardNext.disabled = awardCarousel.scrollLeft >= max;
}
awardPrev.addEventListener("click", () => awardCarousel.scrollBy({ left: -awardCarousel.clientWidth, behavior: "smooth" }));
awardNext.addEventListener("click", () => awardCarousel.scrollBy({ left: awardCarousel.clientWidth, behavior: "smooth" }));
awardCarousel.addEventListener("scroll", updateAwardArrows);
window.addEventListener("resize", updateAwardArrows);
updateAwardArrows();

const lb = $("#lightbox");
awardGrid.addEventListener("click", (e) => {
  const f = e.target.closest(".award");
  if (!f) return;
  const a = AWARDS[+f.dataset.i];
  $("#lightboxImg").src = a.img;
  $("#lightboxCaption").textContent = I18N[lang][a.key];
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
});
function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }
$("#lightboxClose").addEventListener("click", closeLb);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

/* ---------- Flip card: QR + copy link ---------- */
// The URL shared is always the page's own URL, so it works automatically on Vercel.
const SHARE_URL = window.location.origin + window.location.pathname;
const flipCard = $("#flipCard");
let qrMade = false;

function makeQR() {
  if (qrMade || typeof QRCode === "undefined") return;
  new QRCode($("#qrBox"), { text: SHARE_URL, width: 116, height: 116, colorDark: "#1f2a3f", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M });
  qrMade = true;
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(SHARE_URL);
  } catch {
    // off-screen so the fallback never scrolls or moves the page
    const ta = document.createElement("textarea");
    ta.value = SHARE_URL;
    ta.style.cssText = "position:fixed;top:-9999px;opacity:0";
    document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  const msg = $("#copiedMsg");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2500);
  toast(lang === "es" ? "Enlace del portafolio copiado ✓" : "Portfolio link copied ✓");
}

const flipScene = flipCard.closest(".flip-scene");
let flipLocked = false; // a click keeps the card turned until "Turn back"

function showBack(fromClick, e) {
  // the card must only turn — never navigate or submit anything
  if (e) { e.preventDefault(); e.stopPropagation(); }
  makeQR();
  flipCard.classList.add("flipped");
  if (!fromClick) return;
  flipLocked = true;
  copyLink();
}
function showFront() { flipCard.classList.remove("flipped"); flipLocked = false; }

const canHoverFlip = matchMedia("(hover: hover) and (pointer: fine)").matches;
const flipTrigger = $("#flipTrigger");

// Hovering the "Turn over to / Share portfolio" title turns the card…
if (canHoverFlip) {
  flipTrigger.addEventListener("mouseenter", () => showBack(false));
  flipTrigger.addEventListener("focus", () => showBack(false));
  // …and it turns back when the pointer leaves the whole card (unless clicked).
  flipScene.addEventListener("mouseleave", () => { if (!flipLocked) showFront(); });
}
// …clicking it (title or icon) turns it and copies/shares the link.
flipTrigger.addEventListener("click", (e) => showBack(true, e));
$("#flipBtn").addEventListener("click", (e) => showBack(true, e));
$("#flipBackBtn").addEventListener("click", (e) => { e.preventDefault(); showFront(); });


/* ---------- Scroll reveal ---------- */
const REVEAL = ".eyebrow, .section h2, h2, .stats, .quote-card, .education, .languages, .tool-grid li, .project, .award-carousel-wrap, .contact-card, .tabs, .pagination";
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in-view");
    revealObs.unobserve(en.target);
  });
}, { threshold: .1, rootMargin: "0px 0px -6% 0px" });

function observeReveals(root = document) {
  $$(REVEAL, root).forEach((el, i) => {
    if (el.hasAttribute("data-reveal")) return;
    el.setAttribute("data-reveal", "");
    el.style.setProperty("--reveal-i", i % 8);
    revealObs.observe(el);
  });
}
observeReveals();

/* ---------- Click ripples ---------- */
const rippleLayer = document.createElement("div");
rippleLayer.id = "ripples";
document.body.prepend(rippleLayer);

const RIPPLE_TONES = ["#3f6fb5", "#5a8bd6", "#8fb4ee", "#2f5a98", "#7ea6e6"];
const NO_RIPPLE = "a, button, input, textarea, select, label, .lightbox, .flip-card, .award, .project";

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

/* ---------- Image fallback (logo not dropped in its folder yet) ---------- */
function useFallback(img) {
  if (img.src.endsWith(img.dataset.fallback)) return;     // fallback failed too — give up
  img.src = img.dataset.fallback;
}
$$("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => useFallback(img));
  // the script runs after <body>, so a broken image may have failed already
  if (img.complete && img.naturalWidth === 0) useFallback(img);
});
