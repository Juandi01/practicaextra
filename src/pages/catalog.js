// ─── Data ─────────────────────────────────────────────────────────────────────

const COURSES = [
  {
    category:      'Programación',
    categoryColor: 'bg-blue-100 text-blue-700',
    thumb:         'bg-gradient-to-br from-blue-400 to-[#2563eb]',
    emoji:         '💻',
    title:         'Python desde Cero hasta Experto',
    instructor:    'Ana García',
    rating:        '4.8',
    reviews:       '2.4k',
    duration:      '24h',
    level:         'Principiante',
    price:         '49.99',
    free:          false,
  },
  {
    category:      'Diseño',
    categoryColor: 'bg-purple-100 text-purple-700',
    thumb:         'bg-gradient-to-br from-purple-400 to-violet-600',
    emoji:         '🎨',
    title:         'Diseño UI/UX con Figma: De Básico a Pro',
    instructor:    'Carlos López',
    rating:        '4.9',
    reviews:       '1.8k',
    duration:      '18h',
    level:         'Intermedio',
    price:         '39.99',
    free:          false,
  },
  {
    category:      'Marketing',
    categoryColor: 'bg-amber-100 text-amber-700',
    thumb:         'bg-gradient-to-br from-[#f59e0b] to-orange-500',
    emoji:         '📈',
    title:         'Marketing Digital Avanzado 2025',
    instructor:    'María Torres',
    rating:        '4.7',
    reviews:       '3.1k',
    duration:      '20h',
    level:         'Avanzado',
    price:         '44.99',
    free:          false,
  },
  {
    category:      'Datos',
    categoryColor: 'bg-teal-100 text-teal-700',
    thumb:         'bg-gradient-to-br from-teal-400 to-cyan-600',
    emoji:         '🤖',
    title:         'Machine Learning con Python: Fundamentos',
    instructor:    'Roberto Sanz',
    rating:        '4.9',
    reviews:       '987',
    duration:      '32h',
    level:         'Intermedio',
    price:         '59.99',
    free:          false,
  },
  {
    category:      'Programación',
    categoryColor: 'bg-blue-100 text-blue-700',
    thumb:         'bg-gradient-to-br from-yellow-400 to-orange-400',
    emoji:         '⚡',
    title:         'JavaScript Moderno: ES2024 y más allá',
    instructor:    'Laura Méndez',
    rating:        '4.6',
    reviews:       '5.2k',
    duration:      '15h',
    level:         'Principiante',
    price:         null,
    free:          true,
  },
  {
    category:      'Datos',
    categoryColor: 'bg-teal-100 text-teal-700',
    thumb:         'bg-gradient-to-br from-green-400 to-emerald-600',
    emoji:         '📊',
    title:         'Excel y Power BI para Análisis de Datos',
    instructor:    'Diego Ruiz',
    rating:        '4.5',
    reviews:       '4.3k',
    duration:      '12h',
    level:         'Principiante',
    price:         null,
    free:          true,
  },
];

// ─── Card renderer ────────────────────────────────────────────────────────────

function renderCard(course) {
  const { category, categoryColor, thumb, emoji, title,
          instructor, rating, reviews, duration, level, price, free } = course;

  const levelColor = {
    'Principiante': 'text-green-600',
    'Intermedio':   'text-amber-600',
    'Avanzado':     'text-red-500',
  }[level] ?? 'text-gray-500';

  const priceBlock = free
    ? `<span class="text-base font-bold text-green-600">Gratis</span>`
    : `<span class="text-base font-bold text-gray-900">$${price}</span>`;

  const freeBadge = free ? `
    <span class="absolute top-3 left-3
                 bg-green-500 text-white text-xs font-bold
                 px-2.5 py-1 rounded-full shadow-sm">
      GRATIS
    </span>` : '';

  return `
<article
  data-page="course"
  class="group bg-white rounded-2xl overflow-hidden border border-gray-100
         shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]
         transition-all duration-200 cursor-pointer flex flex-col">

  <!-- Thumbnail -->
  <div class="relative h-44 ${thumb} flex items-center justify-center shrink-0">
    <span class="text-7xl drop-shadow-sm
                 transition-transform duration-200 group-hover:scale-110">
      ${emoji}
    </span>
    ${freeBadge}
  </div>

  <!-- Body -->
  <div class="p-5 flex flex-col flex-1">

    <!-- Category badge -->
    <span class="self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3
                 ${categoryColor}">
      ${category}
    </span>

    <!-- Title -->
    <h3 class="font-[Sora] font-semibold text-gray-800 text-base leading-snug mb-2 flex-1">
      ${title}
    </h3>

    <!-- Instructor -->
    <p class="text-sm text-gray-400 mb-4">Por ${instructor}</p>

    <!-- Duration + Level -->
    <div class="flex items-center gap-4 text-xs mb-4">
      <span class="flex items-center gap-1 text-gray-500">
        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
        </svg>
        ${duration}
      </span>
      <span class="flex items-center gap-1 font-medium ${levelColor}">
        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0
                   2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0
                   0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 0-2 2h-2a2 2 0
                   0 0-2-2z"/>
        </svg>
        ${level}
      </span>
    </div>

    <!-- Footer: rating + price -->
    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
      <div class="flex items-center gap-1.5">
        <span class="text-[#f59e0b]">⭐</span>
        <span class="text-sm font-semibold text-gray-700">${rating}</span>
        <span class="text-sm text-gray-400">(${reviews})</span>
      </div>
      ${priceBlock}
    </div>

  </div>
</article>`.trim();
}

// ─── Public export ────────────────────────────────────────────────────────────

export function renderCatalog() {
  const cards = COURSES.map(renderCard).join('\n');

  return `
<main class="pt-16 bg-[#f8fafc] min-h-screen">

  <!-- ── Page Header ─────────────────────────────────────────────────────── -->
  <div class="bg-gradient-to-br from-[#2563eb] via-blue-600 to-indigo-600
              py-14 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
        Aprende a tu ritmo
      </p>
      <h1 class="font-[Sora] text-3xl sm:text-4xl md:text-5xl font-bold
                 text-white mb-4 tracking-tight">
        Catálogo de Cursos
      </h1>
      <p class="text-blue-100 text-lg max-w-xl mx-auto">
        Más de 200 cursos creados por expertos para impulsar tu carrera profesional
      </p>
    </div>
  </div>

  <!-- ── Filters ─────────────────────────────────────────────────────────── -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-2xl shadow-md border border-gray-100
                p-5 md:p-6 -mt-6 mb-10">
      <div class="flex flex-col md:flex-row gap-3 md:gap-4">

        <!-- Search -->
        <div class="relative flex-1">
          <svg class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2
                      w-4.5 h-4.5 text-gray-400"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
          <input
            type="search"
            placeholder="Buscar cursos, instructores..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl
                   border border-gray-200 bg-white
                   text-sm text-gray-700 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[#2563eb]/25
                   focus:border-[#2563eb] transition-colors duration-200"/>
        </div>

        <!-- Category -->
        <select
          class="py-2.5 pl-3.5 pr-9 rounded-xl border border-gray-200 bg-white
                 text-sm text-gray-700
                 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/25
                 focus:border-[#2563eb] transition-colors duration-200
                 md:w-48 cursor-pointer">
          <option value="">Todas las categorías</option>
          <option value="programacion">Programación</option>
          <option value="diseno">Diseño</option>
          <option value="marketing">Marketing</option>
          <option value="datos">Datos</option>
        </select>

        <!-- Price -->
        <select
          class="py-2.5 pl-3.5 pr-9 rounded-xl border border-gray-200 bg-white
                 text-sm text-gray-700
                 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/25
                 focus:border-[#2563eb] transition-colors duration-200
                 md:w-36 cursor-pointer">
          <option value="">Todos los precios</option>
          <option value="gratis">Gratis</option>
          <option value="pago">De pago</option>
        </select>

        <!-- Level -->
        <select
          class="py-2.5 pl-3.5 pr-9 rounded-xl border border-gray-200 bg-white
                 text-sm text-gray-700
                 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/25
                 focus:border-[#2563eb] transition-colors duration-200
                 md:w-40 cursor-pointer">
          <option value="">Todos los niveles</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

      </div>
    </div>
  </div>

  <!-- ── Course Grid ──────────────────────────────────────────────────────── -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">

    <p class="text-sm text-gray-500 mb-6">
      Mostrando
      <span class="font-semibold text-gray-700">${COURSES.length}</span>
      de
      <span class="font-semibold text-gray-700">18</span>
      cursos
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      ${cards}
    </div>

  </div>

  <!-- ── Pagination ───────────────────────────────────────────────────────── -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="flex items-center justify-center gap-2">

      <!-- Previous (disabled on page 1) -->
      <button
        disabled
        class="flex items-center gap-1.5 px-4 py-2.5 rounded-xl
               border border-gray-200 bg-white
               text-sm font-medium text-gray-300
               cursor-not-allowed select-none">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7"/>
        </svg>
        Anterior
      </button>

      <!-- Page 1 — active -->
      <button
        class="w-10 h-10 rounded-xl text-sm font-bold
               bg-[#2563eb] text-white border-0 cursor-pointer">
        1
      </button>

      <!-- Page 2 -->
      <button
        class="w-10 h-10 rounded-xl text-sm font-medium text-gray-600
               border border-gray-200 bg-white
               hover:border-[#2563eb] hover:text-[#2563eb]
               transition-colors duration-200 cursor-pointer">
        2
      </button>

      <!-- Page 3 -->
      <button
        class="w-10 h-10 rounded-xl text-sm font-medium text-gray-600
               border border-gray-200 bg-white
               hover:border-[#2563eb] hover:text-[#2563eb]
               transition-colors duration-200 cursor-pointer">
        3
      </button>

      <!-- Next -->
      <button
        class="flex items-center gap-1.5 px-4 py-2.5 rounded-xl
               border border-gray-200 bg-white
               text-sm font-medium text-gray-700
               hover:border-[#2563eb] hover:text-[#2563eb]
               transition-colors duration-200 cursor-pointer">
        Siguiente
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5l7 7-7 7"/>
        </svg>
      </button>

    </div>
  </div>

</main>
  `.trim();
}
