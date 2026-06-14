// ─── Data ─────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Introducción a Python',
    open:  true,
    lessons: [
      { title: 'Instalación y configuración del entorno', duration: '8 min',  type: 'video'    },
      { title: 'Hola Mundo y sintaxis básica',            duration: '12 min', type: 'video'    },
      { title: 'Variables y tipos de datos',              duration: '15 min', type: 'video'    },
      { title: 'Ejercicio: Tu primer programa',           duration: '10 min', type: 'exercise' },
    ],
  },
  {
    title: 'Estructuras de Datos',
    open:  false,
    lessons: [
      { title: 'Listas y tuplas',              duration: '18 min', type: 'video'    },
      { title: 'Diccionarios y conjuntos',     duration: '20 min', type: 'video'    },
      { title: 'Comprensión de listas',        duration: '14 min', type: 'video'    },
      { title: 'Proyecto: Gestor de contactos', duration: '25 min', type: 'exercise' },
    ],
  },
  {
    title: 'Programación Orientada a Objetos',
    open:  false,
    lessons: [
      { title: 'Clases y objetos',               duration: '22 min', type: 'video' },
      { title: 'Herencia y polimorfismo',        duration: '19 min', type: 'video' },
      { title: 'Métodos mágicos y decoradores',  duration: '17 min', type: 'video' },
    ],
  },
  {
    title: 'Proyectos Prácticos',
    open:  false,
    lessons: [
      { title: 'Scraper de noticias con BeautifulSoup', duration: '35 min', type: 'video'    },
      { title: 'API REST con FastAPI',                  duration: '40 min', type: 'video'    },
      { title: 'Proyecto final: Aplicación completa',   duration: '60 min', type: 'exercise' },
    ],
  },
];

const COURSE_REVIEWS = [
  {
    initial: 'J',
    color:   'bg-[#2563eb]',
    name:    'Javier Moreno',
    date:    'Hace 2 semanas',
    stars:   5,
    text:    'El mejor curso de Python que he tomado. Ana explica de forma muy clara y los proyectos prácticos son exactamente lo que necesitaba para afianzar los conocimientos.',
  },
  {
    initial: 'P',
    color:   'bg-violet-500',
    name:    'Patricia Solís',
    date:    'Hace 1 mes',
    stars:   5,
    text:    'Venía sin ninguna base en programación y en pocas semanas ya podía escribir scripts útiles. El ritmo del curso es perfecto y los ejercicios son fantásticos.',
  },
  {
    initial: 'R',
    color:   'bg-[#f59e0b]',
    name:    'Ricardo Fuentes',
    date:    'Hace 3 semanas',
    stars:   4,
    text:    'Muy buen contenido, especialmente la parte de POO. Echo en falta más ejercicios en estructuras de datos, pero en general es un curso excelente.',
  },
];

const RELATED = [
  {
    thumb:         'bg-gradient-to-br from-yellow-400 to-orange-400',
    emoji:         '⚡',
    category:      'Programación',
    categoryColor: 'bg-blue-100 text-blue-700',
    title:         'JavaScript Moderno: ES2024 y más allá',
    instructor:    'Laura Méndez',
    rating:        '4.6',
    price:         null,
    free:          true,
  },
  {
    thumb:         'bg-gradient-to-br from-teal-400 to-cyan-600',
    emoji:         '🤖',
    category:      'Datos',
    categoryColor: 'bg-teal-100 text-teal-700',
    title:         'Machine Learning con Python: Fundamentos',
    instructor:    'Roberto Sanz',
    rating:        '4.9',
    price:         '59.99',
    free:          false,
  },
  {
    thumb:         'bg-gradient-to-br from-purple-400 to-violet-600',
    emoji:         '🎨',
    category:      'Diseño',
    categoryColor: 'bg-purple-100 text-purple-700',
    title:         'Diseño UI/UX con Figma: De Básico a Pro',
    instructor:    'Carlos López',
    rating:        '4.9',
    price:         '39.99',
    free:          false,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function starsHtml(n) {
  return '⭐'.repeat(n) + '<span class="opacity-30">⭐</span>'.repeat(5 - n);
}

function videoIcon() {
  return `<svg class="w-4 h-4 text-[#2563eb] shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7L8 5z"/>
  </svg>`;
}

function exerciseIcon() {
  return `<svg class="w-4 h-4 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0
             0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/>
  </svg>`;
}

function chevronSvg(isOpen) {
  return `<svg data-accordion-icon
               class="w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0"
               style="${isOpen ? 'transform:rotate(180deg)' : ''}"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>`;
}

// ─── Tab: Contenido ───────────────────────────────────────────────────────────

function renderCurriculumTab() {
  const totalLessons = CURRICULUM.reduce((a, s) => a + s.lessons.length, 0);
  const totalMins    = CURRICULUM.reduce((a, s) =>
    a + s.lessons.reduce((b, l) => b + parseInt(l.duration), 0), 0);
  const totalH = Math.floor(totalMins / 60);
  const remMin = totalMins % 60;

  const sections = CURRICULUM.map((section, i) => {
    const sectionMins = section.lessons.reduce((a, l) => a + parseInt(l.duration), 0);
    const bodyClass   = section.open ? '' : 'hidden';

    const lessonRows = section.lessons.map(({ title, duration, type }) => `
      <div class="flex items-center gap-3 py-3.5 border-b border-gray-50 last:border-0">
        ${type === 'video' ? videoIcon() : exerciseIcon()}
        <span class="flex-1 text-sm text-gray-700 min-w-0">${title}</span>
        <span class="text-xs text-gray-400 whitespace-nowrap shrink-0">${duration}</span>
      </div>`).join('');

    return `
    <div class="border border-gray-200 rounded-xl overflow-hidden${i > 0 ? ' mt-3' : ''}">
      <button
        data-accordion-header
        class="w-full flex items-center justify-between gap-4
               px-5 py-4 bg-gray-50 hover:bg-gray-100
               text-left transition-colors duration-150 cursor-pointer border-0">
        <div class="min-w-0">
          <p class="font-[Sora] font-semibold text-gray-800 text-sm">${section.title}</p>
          <p class="text-xs text-gray-400 mt-0.5">
            ${section.lessons.length} lecciones · ${sectionMins} min
          </p>
        </div>
        ${chevronSvg(section.open)}
      </button>
      <div class="${bodyClass} px-5 divide-y divide-gray-50">
        ${lessonRows}
      </div>
    </div>`;
  }).join('');

  return `
<div data-panel="content" class="pt-6">
  <div class="flex items-center justify-between mb-5">
    <h3 class="font-[Sora] font-semibold text-gray-800">Contenido del curso</h3>
    <span class="text-xs text-gray-400 whitespace-nowrap">
      ${totalLessons} lecciones · ${totalH}h ${remMin}min
    </span>
  </div>
  ${sections}
</div>`;
}

// ─── Tab: Descripción ─────────────────────────────────────────────────────────

function renderDescriptionTab() {
  const learns = [
    'Fundamentos sólidos de Python desde cero',
    'Estructuras de datos: listas, diccionarios, conjuntos',
    'Programación orientada a objetos (POO) completa',
    'Creación de APIs REST con FastAPI',
    'Web scraping con BeautifulSoup',
    'Buenas prácticas y código limpio (PEP 8)',
    'Gestión de entornos virtuales y paquetes',
    'Proyectos reales para tu portafolio',
  ];

  const requirements = [
    'Ordenador con Windows, macOS o Linux',
    'Conexión a Internet para descargar herramientas',
    'Sin experiencia previa en programación',
    'Ganas de aprender y practicar cada día',
  ];

  const learnsHtml = learns.map(l =>
    `<li class="flex items-start gap-2.5 text-sm text-gray-700">
       <span class="shrink-0 mt-0.5">✅</span>${l}
     </li>`).join('');

  const reqHtml = requirements.map(r =>
    `<li class="flex items-start gap-2.5 text-sm text-gray-600">
       <span class="shrink-0 mt-0.5 text-[#2563eb] font-bold">→</span>${r}
     </li>`).join('');

  return `
<div data-panel="description" class="hidden pt-6 space-y-8">

  <div>
    <h3 class="font-[Sora] font-semibold text-gray-800 text-lg mb-3">Sobre este curso</h3>
    <div class="space-y-3 text-sm text-gray-600 leading-relaxed">
      <p>
        Este curso ha sido diseñado para llevarte desde cero hasta un nivel intermedio-avanzado
        en Python, uno de los lenguajes más demandados del mundo. Con más de 24 horas de
        contenido en vídeo, ejercicios prácticos y proyectos reales, aprenderás todo lo que
        necesitas para trabajar como desarrollador Python.
      </p>
      <p>
        Construirás proyectos reales que podrás añadir a tu portafolio: un scraper de noticias,
        una API REST funcional con FastAPI y una aplicación completa. Cada sección incluye
        ejercicios resueltos y acceso a los repositorios de código en GitHub.
      </p>
      <p>
        El enfoque es 100% práctico. No memorizarás sintaxis, aprenderás a pensar como
        programador y a resolver problemas reales. Al finalizar estarás listo para proyectos
        profesionales y para seguir aprendiendo de forma autónoma.
      </p>
    </div>
  </div>

  <div>
    <h3 class="font-[Sora] font-semibold text-gray-800 text-lg mb-3">¿Qué aprenderás?</h3>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${learnsHtml}</ul>
  </div>

  <div>
    <h3 class="font-[Sora] font-semibold text-gray-800 text-lg mb-3">Requisitos</h3>
    <ul class="space-y-2">${reqHtml}</ul>
  </div>

</div>`;
}

// ─── Tab: Instructor ──────────────────────────────────────────────────────────

function renderInstructorTab() {
  const stats = [
    { value: '4.8 ⭐', label: 'Valoración'   },
    { value: '12.4k',  label: 'Estudiantes'  },
    { value: '8',      label: 'Cursos'       },
    { value: '7 años', label: 'Experiencia'  },
  ];

  const statsHtml = stats.map(({ value, label }) =>
    `<div class="text-center">
       <p class="font-[Sora] font-bold text-gray-800 text-xl leading-tight">${value}</p>
       <p class="text-xs text-gray-400 mt-0.5">${label}</p>
     </div>`).join('');

  return `
<div data-panel="instructor" class="hidden pt-6">
  <div class="flex flex-col sm:flex-row gap-6">

    <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-[#2563eb]
                rounded-2xl flex items-center justify-center text-5xl shrink-0 shadow-md">
      👩‍💻
    </div>

    <div class="flex-1 min-w-0">
      <h3 class="font-[Sora] font-bold text-gray-800 text-xl mb-1">Ana García</h3>
      <p class="text-[#2563eb] text-sm font-medium mb-5">
        Ingeniera de Software · Especialista en Python y Machine Learning
      </p>

      <div class="flex flex-wrap gap-8 mb-6 pb-6 border-b border-gray-100">
        ${statsHtml}
      </div>

      <div class="space-y-2.5 text-sm text-gray-600 leading-relaxed">
        <p>
          Ingeniera de software con más de 7 años de experiencia, habiendo trabajado en
          empresas como Google y startups del sector fintech. Especialista en Python,
          ciencia de datos y desarrollo backend.
        </p>
        <p>
          Apasionada de la educación online, ha formado a más de 12.000 estudiantes en
          todo el mundo hispanohablante. Su metodología se centra en el aprendizaje práctico:
          menos teoría, más código real desde el primer día.
        </p>
      </div>
    </div>

  </div>
</div>`;
}

// ─── Tab: Reseñas ─────────────────────────────────────────────────────────────

function renderReviewsTab() {
  const avgStars = (
    COURSE_REVIEWS.reduce((a, r) => a + r.stars, 0) / COURSE_REVIEWS.length
  ).toFixed(1);

  const distribution = [
    { n: 5, pct: 72 },
    { n: 4, pct: 20 },
    { n: 3, pct: 6  },
    { n: 2, pct: 1  },
    { n: 1, pct: 1  },
  ];

  const barsHtml = distribution.map(({ n, pct }) => `
    <div class="flex items-center gap-2">
      <span class="text-xs text-gray-500 shrink-0 w-3 text-right">${n}</span>
      <span class="text-[#f59e0b] text-xs shrink-0">⭐</span>
      <div class="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-1.5 bg-[#f59e0b] rounded-full" style="width:${pct}%"></div>
      </div>
      <span class="text-xs text-gray-400 shrink-0 w-7 text-right">${pct}%</span>
    </div>`).join('');

  const reviewCards = COURSE_REVIEWS.map(({ initial, color, name, date, stars: n, text }) => `
    <div class="border border-gray-100 rounded-xl p-5">
      <div class="flex items-start gap-3 mb-3">
        <div class="w-10 h-10 ${color} rounded-full flex items-center justify-center
                    text-white font-bold text-sm shrink-0">
          ${initial}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm leading-tight">${name}</p>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-sm">${starsHtml(n)}</span>
            <span class="text-xs text-gray-400">${date}</span>
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-600 leading-relaxed">${text}</p>
    </div>`).join('');

  return `
<div data-panel="reviews" class="hidden pt-6">

  <!-- Rating summary -->
  <div class="flex items-center gap-6 p-5 bg-blue-50 rounded-xl mb-6">
    <div class="text-center shrink-0">
      <p class="font-[Sora] font-bold text-5xl text-gray-800 leading-none">${avgStars}</p>
      <p class="text-xl mt-2">${starsHtml(Math.round(Number(avgStars)))}</p>
      <p class="text-xs text-gray-500 mt-1">Valoración media</p>
    </div>
    <div class="flex-1 space-y-1.5">${barsHtml}</div>
  </div>

  <!-- Review cards -->
  <div class="space-y-4">${reviewCards}</div>

</div>`;
}

// ─── Purchase card ────────────────────────────────────────────────────────────

function renderPurchaseCard() {
  const includes = [
    { icon: '⏱️', text: '24 horas de vídeo HD'         },
    { icon: '📱', text: 'Acceso en móvil y tablet'     },
    { icon: '♾️', text: 'Acceso de por vida'            },
    { icon: '📜', text: 'Certificado de finalización'  },
    { icon: '💬', text: 'Foro de preguntas activo'     },
    { icon: '📁', text: 'Recursos y código fuente'     },
  ];

  const includesHtml = includes.map(({ icon, text }) =>
    `<li class="flex items-center gap-2.5 text-sm text-gray-600">
       <span class="text-base shrink-0">${icon}</span>${text}
     </li>`).join('');

  return `
<aside class="lg:w-80 lg:shrink-0 lg:order-2">
  <div class="lg:sticky lg:top-20">
    <div class="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">

      <!-- Thumb -->
      <div class="h-36 bg-gradient-to-br from-blue-400 to-[#2563eb]
                  flex items-center justify-center">
        <span class="text-6xl drop-shadow-sm">💻</span>
      </div>

      <div class="p-6">

        <!-- Price -->
        <div class="flex items-baseline gap-3 mb-1">
          <span class="font-[Sora] text-4xl font-bold text-gray-900">29,99€</span>
          <span class="text-lg text-gray-400 line-through">89,99€</span>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
            -67%
          </span>
        </div>
        <p class="text-xs text-red-500 font-medium mb-5">⏰ ¡Oferta acaba en 2 días!</p>

        <!-- CTAs -->
        <div class="flex flex-col gap-3 mb-5">
          <button
            class="w-full bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800
                   text-white font-bold text-base
                   py-3.5 rounded-xl transition-colors duration-200
                   cursor-pointer border-0">
            Comprar ahora
          </button>
          <button
            class="w-full border-2 border-[#2563eb] text-[#2563eb]
                   hover:bg-blue-50 active:bg-blue-100
                   font-semibold text-base
                   py-3.5 rounded-xl transition-colors duration-200
                   cursor-pointer bg-transparent">
            Añadir al carrito
          </button>
        </div>

        <!-- Guarantee -->
        <p class="text-xs text-center text-gray-400 mb-6">
          🛡️ Garantía de devolución de 30 días sin preguntas
        </p>

        <!-- Includes -->
        <div class="pt-5 border-t border-gray-100">
          <p class="font-semibold text-gray-700 text-sm mb-3">Este curso incluye:</p>
          <ul class="space-y-2.5">${includesHtml}</ul>
        </div>

        <!-- Share row -->
        <div class="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gray-100">
          <button class="text-xs text-gray-400 hover:text-[#2563eb]
                         transition-colors cursor-pointer border-0 bg-transparent p-0">
            Compartir
          </button>
          <span class="text-gray-200 select-none">|</span>
          <button class="text-xs text-gray-400 hover:text-[#2563eb]
                         transition-colors cursor-pointer border-0 bg-transparent p-0">
            Regalar
          </button>
          <span class="text-gray-200 select-none">|</span>
          <button class="text-xs text-gray-400 hover:text-[#2563eb]
                         transition-colors cursor-pointer border-0 bg-transparent p-0">
            Aplicar cupón
          </button>
        </div>

      </div>
    </div>
  </div>
</aside>`;
}

// ─── Related courses ──────────────────────────────────────────────────────────

function renderRelated() {
  const cards = RELATED.map(({ thumb, emoji, category, categoryColor,
                               title, instructor, rating, price, free }) => `
    <article
      data-page="course"
      class="group bg-white rounded-2xl overflow-hidden border border-gray-100
             shadow-sm hover:shadow-lg hover:-translate-y-0.5
             transition-all duration-200 cursor-pointer flex flex-col">
      <div class="h-36 ${thumb} flex items-center justify-center shrink-0">
        <span class="text-6xl transition-transform duration-200 group-hover:scale-110">
          ${emoji}
        </span>
      </div>
      <div class="p-4 flex flex-col flex-1">
        <span class="self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-2
                     ${categoryColor}">
          ${category}
        </span>
        <h3 class="font-[Sora] font-semibold text-gray-800 text-sm leading-snug mb-1 flex-1">
          ${title}
        </h3>
        <p class="text-xs text-gray-400 mb-3">Por ${instructor}</p>
        <div class="flex items-center justify-between pt-3 border-t border-gray-100">
          <span class="text-sm">
            ⭐ <span class="font-semibold text-gray-700 text-sm">${rating}</span>
          </span>
          ${free
            ? `<span class="text-sm font-bold text-green-600">Gratis</span>`
            : `<span class="text-sm font-bold text-gray-900">$${price}</span>`}
        </div>
      </div>
    </article>`).join('');

  return `
<section class="bg-white py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-[Sora] text-2xl md:text-3xl font-bold text-gray-900 mb-8">
      También te puede interesar
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cards}
    </div>
  </div>
</section>`;
}

// ─── Public exports ───────────────────────────────────────────────────────────

export function renderCourse() {
  return `
<main class="pt-16 bg-[#f8fafc] min-h-screen">

  <!-- ── Course Header ───────────────────────────────────────────────────── -->
  <div class="bg-[#1e293b] py-10 md:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Breadcrumb -->
      <nav class="flex items-center flex-wrap gap-1.5 text-xs text-blue-300 mb-6">
        <button data-page="home"
                class="hover:text-white transition-colors cursor-pointer
                       border-0 bg-transparent text-blue-300 p-0">
          Inicio
        </button>
        <span class="text-blue-600 select-none">›</span>
        <button data-page="catalog"
                class="hover:text-white transition-colors cursor-pointer
                       border-0 bg-transparent text-blue-300 p-0">
          Catálogo
        </button>
        <span class="text-blue-600 select-none">›</span>
        <span class="text-blue-100">Python para Todos</span>
      </nav>

      <div class="max-w-3xl">

        <!-- Title -->
        <h1 class="font-[Sora] text-2xl sm:text-3xl md:text-4xl font-bold
                   text-white leading-tight mb-4">
          Python para Todos: De Cero a Experto
        </h1>

        <!-- Subtitle -->
        <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
          Aprende Python desde cero con proyectos reales, POO, APIs REST y web scraping.
          El curso más completo en español para convertirte en desarrollador Python.
        </p>

        <!-- Rating row -->
        <div class="flex flex-wrap items-center gap-2 mb-5">
          <span class="font-bold text-[#f59e0b] text-lg">4.8</span>
          <span class="text-[#f59e0b] text-base">⭐⭐⭐⭐⭐</span>
          <span class="text-slate-400 text-sm">(2.456 valoraciones)</span>
          <span class="text-slate-600 select-none">·</span>
          <span class="text-slate-300 text-sm">12.400 estudiantes</span>
        </div>

        <!-- Meta row -->
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/>
            </svg>
            Ana García
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0
                       0-2 2v12a2 2 0 0 0 2 2z"/>
            </svg>
            Actualizado enero 2025
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11
                       21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
            </svg>
            Español
          </span>
        </div>

      </div>
    </div>
  </div>

  <!-- ── Main two-column layout ───────────────────────────────────────────── -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
    <div class="flex flex-col lg:flex-row lg:items-start gap-8">

      ${renderPurchaseCard()}

      <!-- Left: content (order-1 on desktop so it sits left of the card) -->
      <div class="flex-1 min-w-0 lg:order-1">

        <!-- Video player placeholder -->
        <div class="relative bg-[#1e293b] rounded-2xl overflow-hidden aspect-video mb-8 shadow-xl">
          <div class="absolute inset-0 flex items-center justify-center
                      pointer-events-none select-none">
            <span class="text-[160px] opacity-10">💻</span>
          </div>
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <button
              class="w-20 h-20 bg-white/20 hover:bg-white/35 backdrop-blur-sm
                     rounded-full border-2 border-white/40
                     flex items-center justify-center
                     transition-all duration-200 cursor-pointer">
              <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z"/>
              </svg>
            </button>
            <p class="text-white/70 text-sm">Vista previa gratuita · 3 min</p>
          </div>
        </div>

        <!-- Tab buttons -->
        <div class="border-b border-gray-200 overflow-x-auto">
          <div class="flex min-w-max">
            <button data-tab="content"
                    class="tab-btn px-5 py-3.5 text-sm font-semibold whitespace-nowrap
                           border-b-2 border-[#2563eb] text-[#2563eb]
                           bg-transparent cursor-pointer transition-colors duration-150">
              Contenido
            </button>
            <button data-tab="description"
                    class="tab-btn px-5 py-3.5 text-sm font-medium whitespace-nowrap
                           border-b-2 border-transparent text-gray-500
                           hover:text-gray-700 bg-transparent cursor-pointer
                           transition-colors duration-150">
              Descripción
            </button>
            <button data-tab="instructor"
                    class="tab-btn px-5 py-3.5 text-sm font-medium whitespace-nowrap
                           border-b-2 border-transparent text-gray-500
                           hover:text-gray-700 bg-transparent cursor-pointer
                           transition-colors duration-150">
              Instructor
            </button>
            <button data-tab="reviews"
                    class="tab-btn px-5 py-3.5 text-sm font-medium whitespace-nowrap
                           border-b-2 border-transparent text-gray-500
                           hover:text-gray-700 bg-transparent cursor-pointer
                           transition-colors duration-150">
              Reseñas
            </button>
          </div>
        </div>

        <!-- Tab panels -->
        ${renderCurriculumTab()}
        ${renderDescriptionTab()}
        ${renderInstructorTab()}
        ${renderReviewsTab()}

      </div>
    </div>
  </div>

  ${renderRelated()}

</main>
  `.trim();
}

// Called by main.js after innerHTML is set — scripts injected via innerHTML don't execute.
export function initCourse() {
  // ── Tabs ───────────────────────────────────────────────────────────────────
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('[data-panel]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => {
        const active = b.dataset.tab === target;
        b.classList.toggle('border-[#2563eb]',   active);
        b.classList.toggle('text-[#2563eb]',     active);
        b.classList.toggle('font-semibold',      active);
        b.classList.toggle('border-transparent', !active);
        b.classList.toggle('text-gray-500',      !active);
        b.classList.toggle('font-medium',        !active);
      });

      tabPanels.forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.panel !== target);
      });
    });
  });

  // ── Accordion ──────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-accordion-header]').forEach(header => {
    header.addEventListener('click', () => {
      const body   = header.nextElementSibling;
      const icon   = header.querySelector('[data-accordion-icon]');
      const isOpen = !body.classList.contains('hidden');

      body.classList.toggle('hidden', isOpen);
      if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
}
