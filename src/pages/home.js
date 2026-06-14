// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '200+', label: 'Cursos' },
  { value: '50+',  label: 'Instructores' },
  { value: '98%',  label: 'Satisfacción' },
];

const CATEGORIES = [
  { emoji: '💻', name: 'Programación', count: '80+ cursos' },
  { emoji: '🎨', name: 'Diseño',        count: '45+ cursos' },
  { emoji: '📈', name: 'Marketing',     count: '35+ cursos' },
  { emoji: '📊', name: 'Datos',         count: '40+ cursos' },
];

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
    price:         '49.99',
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
    price:         '39.99',
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
    price:         '44.99',
  },
];

// ─── Section renderers ────────────────────────────────────────────────────────

function renderHero() {
  return `
<section class="relative overflow-hidden bg-white">
  <!-- Background blobs -->
  <div class="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px]
              rounded-full bg-gradient-to-bl from-blue-100 to-indigo-100 opacity-60"></div>
  <div class="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80
              rounded-full bg-gradient-to-tr from-blue-50 to-sky-100 opacity-50"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <!-- ── Left: copy ─────────────────────────────── -->
      <div class="text-center md:text-left">

        <!-- Badge -->
        <div class="flex justify-center md:justify-start mb-6">
          <span class="inline-flex items-center gap-2
                       bg-blue-50 text-[#2563eb] border border-blue-100
                       text-sm font-medium px-4 py-2 rounded-full">
            🚀 +10.000 estudiantes activos
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-[Sora] text-4xl sm:text-5xl lg:text-6xl font-bold
                   text-gray-900 leading-[1.1] tracking-tight mb-6">
          Aprende sin límites,<br>
          <span class="text-[#2563eb]">crece sin parar</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          Accede a más de 200 cursos con instructores expertos, aprende a tu ritmo
          y obtén certificados que impulsan tu carrera profesional.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            data-page="catalog"
            class="w-full sm:w-auto
                   bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800
                   text-white font-semibold text-base
                   px-8 py-3.5 rounded-xl
                   transition-colors duration-200 cursor-pointer border-0">
            Ver catálogo
          </button>
          <button
            data-page="why-us"
            class="w-full sm:w-auto
                   border-2 border-[#2563eb] text-[#2563eb]
                   hover:bg-blue-50 active:bg-blue-100
                   font-semibold text-base
                   px-8 py-3.5 rounded-xl
                   transition-colors duration-200 cursor-pointer bg-transparent">
            Por qué elegirnos
          </button>
        </div>

        <!-- Trust row -->
        <div class="mt-10 flex items-center justify-center md:justify-start gap-6
                    text-sm text-gray-400">
          <span class="flex items-center gap-1.5">✅ Sin tarjeta de crédito</span>
          <span class="flex items-center gap-1.5">✅ Cancela cuando quieras</span>
        </div>
      </div>

      <!-- ── Right: decorative mockup (desktop only) ── -->
      <div class="hidden md:flex justify-center items-center">
        <div class="relative w-full max-w-sm">

          <!-- Main card -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
            <!-- Card header -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-11 h-11 bg-[#2563eb] rounded-xl
                          flex items-center justify-center text-xl shrink-0">💻</div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-gray-800 truncate">Python para Todos</p>
                <p class="text-xs text-gray-500">Por Ana García</p>
              </div>
              <span class="ml-auto shrink-0 text-xs font-bold text-[#f59e0b]">4.8 ⭐</span>
            </div>

            <!-- Progress bar -->
            <div class="mb-5">
              <div class="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Tu progreso</span>
                <span class="font-semibold text-[#2563eb]">68%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-2 bg-[#2563eb] rounded-full" style="width:68%"></div>
              </div>
            </div>

            <!-- Mini stats -->
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-blue-50 rounded-xl p-3 text-center">
                <div class="text-xl mb-0.5">⏱️</div>
                <div class="text-xs font-bold text-gray-700">24h</div>
                <div class="text-[10px] text-gray-400">Duración</div>
              </div>
              <div class="bg-amber-50 rounded-xl p-3 text-center">
                <div class="text-xl mb-0.5">📚</div>
                <div class="text-xs font-bold text-gray-700">48</div>
                <div class="text-[10px] text-gray-400">Lecciones</div>
              </div>
              <div class="bg-green-50 rounded-xl p-3 text-center">
                <div class="text-xl mb-0.5">🏆</div>
                <div class="text-xs font-bold text-gray-700">Cert.</div>
                <div class="text-[10px] text-gray-400">Incluido</div>
              </div>
            </div>
          </div>

          <!-- Floating badge: students -->
          <div class="absolute -top-5 -left-6 bg-white rounded-2xl shadow-lg
                      border border-gray-100 px-4 py-3 flex items-center gap-2.5">
            <span class="text-2xl">👥</span>
            <div>
              <p class="text-[10px] text-gray-400 leading-none mb-0.5">Estudiantes activos</p>
              <p class="text-sm font-bold text-gray-800 leading-none">10.234</p>
            </div>
          </div>

          <!-- Floating badge: rating -->
          <div class="absolute -bottom-5 -right-6 bg-white rounded-2xl shadow-lg
                      border border-gray-100 px-4 py-3">
            <div class="flex items-center gap-1.5 mb-0.5">
              <span class="text-[#f59e0b] text-lg leading-none">⭐</span>
              <span class="text-lg font-bold text-gray-800 leading-none">4.9</span>
            </div>
            <p class="text-[10px] text-gray-400">Calificación promedio</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderStats() {
  const items = STATS.map(({ value, label }) => `
    <div class="flex flex-col items-center justify-center py-8 md:py-12
                border-b md:border-b-0 md:border-r border-white/10 last:border-0">
      <span class="font-[Sora] text-4xl md:text-5xl font-bold text-white mb-1">
        ${value}
      </span>
      <span class="text-blue-300 text-sm md:text-base tracking-wide uppercase">
        ${label}
      </span>
    </div>`).join('');

  return `
<section class="bg-[#1e293b]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-3 divide-x divide-white/10">
      ${items}
    </div>
  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderCategories() {
  const cards = CATEGORIES.map(({ emoji, name, count }) => `
    <button
      data-page="catalog"
      class="group bg-white rounded-2xl border border-gray-100 p-6 text-center
             cursor-pointer transition-all duration-200
             hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5
             active:scale-95">
      <div class="text-5xl mb-3 transition-transform duration-200 group-hover:scale-110">
        ${emoji}
      </div>
      <h3 class="font-[Sora] font-semibold text-gray-800 text-base mb-1">${name}</h3>
      <p class="text-sm text-gray-400">${count}</p>
    </button>`).join('');

  return `
<section class="py-16 md:py-24 bg-[#f8fafc]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Heading -->
    <div class="text-center mb-10 md:mb-14">
      <h2 class="font-[Sora] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Explora por categoría
      </h2>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Elige el área que más te apasiona y empieza a aprender hoy mismo
      </p>
    </div>

    <!-- Grid 2 cols → 4 cols -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      ${cards}
    </div>

  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderCourses() {
  const cards = COURSES.map(({ category, categoryColor, thumb, emoji,
                               title, instructor, rating, reviews, price }) => `
    <article class="bg-white rounded-2xl overflow-hidden border border-gray-100
                    shadow-sm hover:shadow-md transition-shadow duration-200
                    flex flex-col">
      <!-- Thumbnail placeholder -->
      <div class="h-44 ${thumb} flex items-center justify-center shrink-0">
        <span class="text-7xl drop-shadow-sm">${emoji}</span>
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

        <!-- Footer: rating + price -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex items-center gap-1.5">
            <span class="text-[#f59e0b]">⭐</span>
            <span class="text-sm font-semibold text-gray-700">${rating}</span>
            <span class="text-sm text-gray-400">(${reviews})</span>
          </div>
          <span class="text-base font-bold text-gray-900">$${price}</span>
        </div>
      </div>
    </article>`).join('');

  return `
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Heading -->
    <div class="text-center mb-10 md:mb-14">
      <h2 class="font-[Sora] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Cursos destacados
      </h2>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Seleccionados por nuestros expertos para impulsar tu carrera profesional
      </p>
    </div>

    <!-- Grid 1 col → 3 cols -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
      ${cards}
    </div>

    <!-- CTA -->
    <div class="text-center">
      <button
        data-page="catalog"
        class="bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800
               text-white font-semibold text-base
               px-8 py-3.5 rounded-xl
               transition-colors duration-200 cursor-pointer border-0">
        Ver todos los cursos
      </button>
    </div>

  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderCTA() {
  return `
<section class="relative overflow-hidden
                bg-gradient-to-r from-[#2563eb] via-blue-600 to-indigo-600
                py-20 md:py-28">
  <!-- Decorative circles -->
  <div class="pointer-events-none absolute -top-20 -right-20
              h-72 w-72 rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute -bottom-16 -left-16
              h-56 w-56 rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              h-96 w-96 rounded-full bg-white/[0.03]"></div>

  <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
    <p class="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
      Empieza hoy
    </p>
    <h2 class="font-[Sora] text-3xl md:text-5xl font-bold text-white
               leading-tight tracking-tight mb-6">
      ¿Listo para dar el siguiente paso?
    </h2>
    <p class="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
      Únete a más de 10.000 estudiantes que ya están transformando su carrera
      con EduStream. Sin compromisos, cancela cuando quieras.
    </p>
    <button
      data-page="catalog"
      class="bg-white hover:bg-gray-50 active:bg-gray-100
             text-[#2563eb] font-bold text-base
             px-10 py-4 rounded-xl
             transition-colors duration-200 cursor-pointer border-0
             shadow-lg shadow-blue-900/20">
      Empezar gratis ahora
    </button>
  </div>
</section>`;
}

// ─── Public export ────────────────────────────────────────────────────────────

export function renderHome() {
  return `
<main class="pt-16">
  ${renderHero()}
  ${renderStats()}
  ${renderCategories()}
  ${renderCourses()}
  ${renderCTA()}
</main>
  `.trim();
}
