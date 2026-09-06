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
    "project.shotsTitle": "Project images",
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
    "expokonrad.tag": "Expo Konrad corporate website",
    "expokonrad.desc": "The website belongs to an international logistics company called Expo Konrad, which offers export, import, customs clearance, warehousing, and transportation services with real-time digital tracking.<br><br>Its UI design uses a blue corporate color palette, modular cards, icons, and badges to organize the information.",
    "psychmonitor.tag": "USAR-COL 13",
    "psychmonitor.desc": "A web application that digitizes psychological risk assessment for USAR COL-13 rescue personnel through a 23-question survey with automated color-coded risk scoring.<br><br>Built with Java Spring Boot and PostgreSQL on the backend, HTML, CSS, and JavaScript on the frontend, email alerts via Spring Mail, and Docker for deployment.",
    "project.videoTitle": "Video Demo",
    "project.watchOnYoutube": "Watch on YouTube",
    "usssello.tag": "University Book Publishing & Sales Platform",
    "usssello.desc": "A full-stack web platform for managing and selling university publications, featuring a catalog with dynamic filters, shopping cart and checkout flow, blog/review system, and an admin dashboard with sales analytics.<br><br>Built with Node.js and Express on the backend, PostgreSQL (Neon) as the database, HTML, CSS, and JavaScript on the frontend, Brevo for email integration, and deployed on Railway.",
    "usssello.srs": "SRS",
    "literarydb.tag": "Relational Database Design",
    "literarydb.heroDesc": "A relational database designed and implemented in MySQL, integrated with a NetBeans desktop application built in Java.",
    "literarydb.desc1": "This project consisted of the design and implementation of a relational database in MySQL, integrated with a NetBeans application using Java.",
    "literarydb.desc2": "The system allows managing information on authors, publishers and books, establishing relationships between these entities to perform queries such as books written by a specific author and publishers responsible for each publication.",
    "bomberman.tag": "Game with MVC Design Pattern",
    "bomberman.heroDesc": "A classic Bomberman game built with the MVC (Model-View-Controller) design pattern.",
    "bomberman.desc1": "This project consists of a game based on the classic Bomberman, developed using the MVC (Model-View-Controller) design pattern.",
    "bomberman.desc2": "The game features a graphical interface that includes a board of squares with different elements such as a player (represented by a blue square), an enemy (red square) and bombs (black circles). Both characters have three lives, and the goal of the game is to dodge bombs and defeat the enemy.",
    "citasmedicas.tag": "System with FIFO and LIFO Data Structure",
    "citasmedicas.heroDesc": "An interactive system to register, manage and consult medical appointments using FIFO and LIFO data structures.",
    "citasmedicas.desc1": "In this project, an interactive system was developed to register, manage and consult medical appointments, implementing data structures such as stacks (LIFO) and queues (FIFO) to ensure efficient handling of operations and appointments.",
    "citasmedicas.desc2": "Users could register accounts, log in, manage appointments (registration, consultation, deletion) and select doctors and locations.",
    "vehiculos.tag": "with MVC Pattern",
    "vehiculos.heroDesc": "An application to manage a vehicle catalogue and automatically calculate taxes, SOAT, VAT, and final sale costs.",
    "vehiculos.desc1": "An application was developed to manage a catalogue of vehicles and calculate their associated costs. The tool allowed the recording of information such as the license plate, brand, type of vehicle, and base price, and automatically performed the calculations of taxes, SOAT, VAT, and the final sale value.",
    "vehiculos.desc2": "The system managed different categories of vehicles, including cars, motorcycles, and mopeds, allowing the customization of the calculations according to the characteristics of each type.",
  },
  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.tools": "Herramientas", "nav.projects": "Proyectos", "nav.background": "Trayectoria",
    "contact.title": "Contáctame", "backTop": "Volver arriba",
    "project.sub": "Landing Page -<br>E-commerce",
    "project.viewBtn": "Ver web",
    "project.paletteTitle": "Fuentes & Colores",
    "project.shotsTitle": "Imágenes del proyecto",
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
    "expokonrad.tag": "Sitio web corporativo de Expo Konrad",
    "expokonrad.desc": "El sitio web pertenece a una empresa de logística internacional llamada Expo Konrad, que ofrece servicios de exportación, importación, despacho aduanero, almacenamiento y transporte con seguimiento digital en tiempo real.<br><br>Su diseño de interfaz usa una paleta de colores corporativa azul, tarjetas modulares, íconos y badges para organizar la información.",
    "psychmonitor.tag": "USAR-COL 13",
    "psychmonitor.desc": "Una aplicación web que digitaliza la evaluación de riesgo psicológico para el personal de rescate USAR COL-13 mediante una encuesta de 23 preguntas con puntuación de riesgo codificada por colores de forma automática.<br><br>Construida con Java Spring Boot y PostgreSQL en el backend, HTML, CSS y JavaScript en el frontend, alertas por correo vía Spring Mail, y Docker para el despliegue.",
    "project.videoTitle": "Video de Demostración",
    "project.watchOnYoutube": "Ver en YouTube",
    "usssello.tag": "Plataforma de Publicación y Venta de Libros Universitarios",
    "usssello.desc": "Una plataforma web full-stack para gestionar y vender publicaciones universitarias, con un catálogo con filtros dinámicos, carrito de compras y flujo de pago, sistema de blog/reseñas, y un panel de administración con analíticas de ventas.<br><br>Construida con Node.js y Express en el backend, PostgreSQL (Neon) como base de datos, HTML, CSS y JavaScript en el frontend, Brevo para integración de correo, y desplegada en Railway.",
    "usssello.srs": "SRS",
    "literarydb.tag": "Diseño de Base de Datos Relacional",
    "literarydb.heroDesc": "Una base de datos relacional diseñada e implementada en MySQL, integrada con una aplicación de escritorio en NetBeans construida en Java.",
    "literarydb.desc1": "Este proyecto consistió en el diseño e implementación de una base de datos relacional en MySQL, integrada con una aplicación en NetBeans usando Java.",
    "literarydb.desc2": "El sistema permite gestionar información de autores, editoriales y libros, estableciendo relaciones entre estas entidades para realizar consultas como los libros escritos por un autor específico y las editoriales responsables de cada publicación.",
    "bomberman.tag": "Juego con Patrón de Diseño MVC",
    "bomberman.heroDesc": "Un juego clásico de Bomberman construido con el patrón de diseño MVC (Modelo-Vista-Controlador).",
    "bomberman.desc1": "Este proyecto consiste en un juego basado en el clásico Bomberman, desarrollado usando el patrón de diseño MVC (Modelo-Vista-Controlador).",
    "bomberman.desc2": "El juego cuenta con una interfaz gráfica que incluye un tablero de casillas con distintos elementos como un jugador (representado por un cuadrado azul), un enemigo (cuadrado rojo) y bombas (círculos negros). Ambos personajes tienen tres vidas, y el objetivo del juego es esquivar las bombas y derrotar al enemigo.",
    "citasmedicas.tag": "Sistema con Estructuras de Datos FIFO y LIFO",
    "citasmedicas.heroDesc": "Un sistema interactivo para registrar, gestionar y consultar citas médicas usando estructuras de datos FIFO y LIFO.",
    "citasmedicas.desc1": "En este proyecto se desarrolló un sistema interactivo para registrar, gestionar y consultar citas médicas, implementando estructuras de datos como pilas (LIFO) y colas (FIFO) para garantizar un manejo eficiente de las operaciones y citas.",
    "citasmedicas.desc2": "Los usuarios podían registrar cuentas, iniciar sesión, gestionar citas (registro, consulta, eliminación) y seleccionar médicos y sedes.",
    "vehiculos.tag": "con Patrón MVC",
    "vehiculos.heroDesc": "Una aplicación para gestionar un catálogo de vehículos y calcular automáticamente impuestos, SOAT, IVA y el valor final de venta.",
    "vehiculos.desc1": "Se desarrolló una aplicación para gestionar un catálogo de vehículos y calcular sus costos asociados. La herramienta permitía registrar información como la placa, la marca, el tipo de vehículo y el precio base, y realizaba automáticamente los cálculos de impuestos, SOAT, IVA y el valor final de venta.",
    "vehiculos.desc2": "El sistema manejaba distintas categorías de vehículos, incluyendo carros, motocicletas y motocarros, permitiendo personalizar los cálculos según las características de cada tipo.",
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
const REVEAL = ".project-hero-card, .project-mockup, .project-info, h2, .font-card, .swatch, .contact-card, .project-video-frame";
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
