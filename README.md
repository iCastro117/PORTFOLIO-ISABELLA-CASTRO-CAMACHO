# Portfolio — Isabella Castro Camacho

Landing page en HTML + CSS + JavaScript puro (sin frameworks). Lista para publicar en Vercel.

## Estructura
```
portfolio/
├── index.html
├── css/styles.css
├── js/main.js            ← datos de proyectos, experiencia, awards y textos EN/ES
├── js/qrcode.min.js      ← generador de QR (local, sin CDN)
└── assets/
    ├── proyectos/        ← proyecto1.png … proyecto6.png  (1200×800 recomendado)
    ├── logos/            ← logo1.png, logo2.png, logo3.png (cuadrados, van en los círculos)
    ├── awards/           ← award1.png … award8.png (vertical 4:5)
    ├── yo/               ← isabella-cuerpo.png (hero) e isabella-cara.png (avatar)
    └── tools/            ← íconos SVG de herramientas (Devicon / Simple Icons)
```
Las imágenes de proyectos, logos y awards son **placeholders**: reemplázalas con el mismo nombre y listo.

## Qué editar
- **Proyectos / experiencia / awards**: arriba de `js/main.js` (arrays `PROJECTS`, `EXPERIENCE`, `AWARDS`).
- **Textos EN/ES**: objeto `I18N` en `js/main.js`.
- **Links de LinkedIn y GitHub**: en `index.html`, sección `.social-links`.
- **CV descargable**: coloca tu PDF en `assets/cv-isabella-castro.pdf` (botón *Download*).
- **Correo del botón DM**: ya apunta a Gmail con `isabellacastrocamacho117@gmail.com`.

## Funciones
- Efecto glass, sombras y blobs animados como en el diseño.
- Hover en nav, botones, herramientas, proyectos, timeline y awards (lightbox al hacer clic).
- Tarjeta *Turn over to share portfolio*: gira en 3D, genera un QR con la URL actual
  y copia el enlace al portapapeles automáticamente (en móvil también abre el menú nativo de compartir).
  Al publicar en Vercel el QR usará automáticamente la URL de tu dominio.
- Pestañas de experiencia (UX/UI, LLM & LMM, Data Entry, QA) con timeline.
- Paginación de proyectos (6 por página).
- Modo claro/oscuro y cambio de idioma EN/ES (se recuerdan en el navegador).
- Responsive (escritorio, tablet y móvil).

## Publicar en Vercel
1. Sube la carpeta a un repositorio de GitHub.
2. En vercel.com → *New Project* → importa el repo → Framework: **Other** → Deploy.
No requiere build; es un sitio estático.
