// ─── Data ─────────────────────────────────────────────────────────────────────

const REASONS = [
  {
    emoji: '🎯',
    title: 'Aprendizaje a tu ritmo',
    desc:  'Accede cuando quieras, donde quieras. Sin horarios fijos ni presiones. Tu progreso se guarda automáticamente.',
  },
  {
    emoji: '👨‍🏫',
    title: 'Instructores expertos',
    desc:  'Aprende de profesionales con experiencia real en la industria, no solo teoría académica.',
  },
  {
    emoji: '📜',
    title: 'Certificados reconocidos',
    desc:  'Obtén certificados verificables, válidos para tu CV y tu perfil de LinkedIn.',
  },
  {
    emoji: '💬',
    title: 'Comunidad activa',
    desc:  'Conecta con miles de estudiantes en foros, grupos de estudio y sesiones en vivo.',
  },
  {
    emoji: '🔄',
    title: 'Contenido actualizado',
    desc:  'Nuestros cursos se revisan cada trimestre para mantenerse al día con las últimas tendencias.',
  },
  {
    emoji: '💰',
    title: 'Precios justos',
    desc:  'Planes mensuales, anuales o por curso único. Opciones para todos los bolsillos.',
  },
];

const TESTIMONIALS = [
  {
    initial:    'S',
    color:      'bg-[#2563eb]',
    name:       'Sofía Ramírez',
    profession: 'Desarrolladora Frontend',
    stars:      5,
    text:       'Gracias a EduStream conseguí mi primer trabajo como desarrolladora en solo 8 meses. Los cursos son claros, prácticos y los instructores responden dudas muy rápido. ¡100% recomendado!',
  },
  {
    initial:    'M',
    color:      'bg-violet-500',
    name:       'Miguel Ángel Vega',
    profession: 'Diseñador UX',
    stars:      5,
    text:       'La calidad del contenido supera a plataformas que cobran el doble. El curso de Figma me cambió la vida profesional. La comunidad es increíblemente activa y solidaria.',
  },
  {
    initial:    'L',
    color:      'bg-[#f59e0b]',
    name:       'Laura Castillo',
    profession: 'Data Analyst',
    stars:      5,
    text:       'Venía de un sector completamente diferente y en 6 meses logré transicionar a datos. El acompañamiento de la comunidad y los proyectos prácticos marcaron la diferencia.',
  },
];

const COMPARE_ROWS = [
  { feature: 'Precio accesible',               us: true,  them: false },
  { feature: 'Certificados verificables',       us: true,  them: false },
  { feature: 'Soporte 24/7',                   us: true,  them: false },
  { feature: 'Comunidad de estudiantes',        us: true,  them: true  },
  { feature: 'Actualización trimestral',        us: true,  them: false },
  { feature: 'Proyectos prácticos incluidos',   us: true,  them: false },
];

// ─── Section renderers ────────────────────────────────────────────────────────

function renderReasons() {
  const cards = REASONS.map(({ emoji, title, desc }) => `
    <div class="group bg-white rounded-2xl border border-gray-100 p-7
                shadow-sm hover:shadow-blue-100 hover:shadow-lg
                hover:border-blue-100 hover:-translate-y-0.5
                transition-all duration-200">
      <div class="text-5xl mb-5
                  transition-transform duration-200 group-hover:scale-110 w-fit">
        ${emoji}
      </div>
      <h3 class="font-[Sora] font-semibold text-gray-800 text-lg mb-2">
        ${title}
      </h3>
      <p class="text-gray-500 text-sm leading-relaxed">${desc}</p>
    </div>`).join('');

  return `
<section class="py-16 md:py-24 bg-[#f8fafc]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-12 md:mb-16">
      <h2 class="font-[Sora] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Todo lo que necesitas para aprender
      </h2>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Diseñado para que llegues a tu meta sin importar desde dónde partes
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      ${cards}
    </div>

  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderTestimonials() {
  const cards = TESTIMONIALS.map(({ initial, color, name, profession, stars, text }) => {
    const starsHtml = '⭐'.repeat(stars);
    return `
    <div class="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm
                flex flex-col gap-5">

      <!-- Stars -->
      <div class="text-lg tracking-wide">${starsHtml}</div>

      <!-- Quote -->
      <p class="text-gray-600 text-sm leading-relaxed flex-1">
        "${text}"
      </p>

      <!-- Author -->
      <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div class="w-11 h-11 ${color} rounded-full
                    flex items-center justify-center
                    text-white font-bold text-lg shrink-0">
          ${initial}
        </div>
        <div>
          <p class="font-semibold text-gray-800 text-sm leading-tight">${name}</p>
          <p class="text-xs text-gray-400 mt-0.5">${profession}</p>
        </div>
      </div>

    </div>`;
  }).join('');

  return `
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-12 md:mb-16">
      <h2 class="font-[Sora] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros estudiantes
      </h2>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Más de 10.000 personas ya transformaron su carrera con EduStream
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      ${cards}
    </div>

  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderComparison() {
  const rows = COMPARE_ROWS.map(({ feature, us, them }, i) => {
    const rowBg = i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]';
    return `
    <tr class="${rowBg}">
      <td class="px-4 sm:px-6 py-4 text-sm text-gray-700 font-medium w-full">
        ${feature}
      </td>
      <td class="px-4 sm:px-6 py-4 text-center text-xl whitespace-nowrap">
        ${us ? '✅' : '❌'}
      </td>
      <td class="px-4 sm:px-6 py-4 text-center text-xl whitespace-nowrap">
        ${them ? '✅' : '❌'}
      </td>
    </tr>`;
  }).join('');

  return `
<section class="py-16 md:py-24 bg-[#f8fafc]">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-10 md:mb-14">
      <h2 class="font-[Sora] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        EduStream vs. la competencia
      </h2>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Compara y decide por qué somos la mejor opción
      </p>
    </div>

    <!-- Table wrapper — horizontal scroll on narrow screens -->
    <div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table class="w-full border-collapse bg-white text-left min-w-[340px]">

        <!-- Header -->
        <thead>
          <tr class="border-b border-gray-200">
            <th class="px-4 sm:px-6 py-4 text-sm font-semibold text-gray-500
                       uppercase tracking-wide">
              Característica
            </th>
            <th class="px-4 sm:px-6 py-4 text-center">
              <span class="inline-block bg-[#2563eb] text-white
                           text-sm font-bold px-4 py-1.5 rounded-full">
                EduStream
              </span>
            </th>
            <th class="px-4 sm:px-6 py-4 text-center">
              <span class="inline-block bg-gray-100 text-gray-500
                           text-sm font-semibold px-4 py-1.5 rounded-full">
                Competencia
              </span>
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-100">
          ${rows}
        </tbody>

      </table>
    </div>

  </div>
</section>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderCTA() {
  return `
<section class="relative overflow-hidden bg-[#2563eb] py-20 md:py-28">

  <!-- Decorative blobs -->
  <div class="pointer-events-none absolute -top-16 -right-16
              h-64 w-64 rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute -bottom-12 -left-12
              h-52 w-52 rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              h-80 w-80 rounded-full bg-white/[0.04]"></div>

  <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">

    <p class="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
      Empieza hoy, es gratis
    </p>
    <h2 class="font-[Sora] text-3xl md:text-5xl font-bold text-white
               leading-tight tracking-tight mb-6">
      Únete a más de<br class="hidden sm:block">
      <span class="text-[#f59e0b]">10.000 estudiantes</span>
    </h2>
    <p class="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
      Sin compromisos. Accede a cursos gratuitos desde el primer día
      y actualiza tu plan cuando estés listo.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        data-page="catalog"
        class="bg-white hover:bg-gray-50 active:bg-gray-100
               text-[#2563eb] font-bold text-base
               px-10 py-4 rounded-xl
               transition-colors duration-200 cursor-pointer border-0
               shadow-lg shadow-blue-900/20">
        Ver catálogo de cursos
      </button>
      <button
        data-page="home"
        class="border-2 border-white/40 hover:border-white
               text-white font-semibold text-base
               px-10 py-4 rounded-xl
               transition-colors duration-200 cursor-pointer bg-transparent">
        Saber más
      </button>
    </div>

    <!-- Trust row -->
    <div class="mt-10 flex flex-wrap items-center justify-center gap-6
                text-sm text-blue-200">
      <span class="flex items-center gap-1.5">✅ Sin tarjeta de crédito</span>
      <span class="flex items-center gap-1.5">✅ Cancela cuando quieras</span>
      <span class="flex items-center gap-1.5">✅ Acceso inmediato</span>
    </div>

  </div>
</section>`;
}

// ─── Public export ────────────────────────────────────────────────────────────

export function renderWhyUs() {
  return `
<main class="pt-16">

  <!-- ── Page Header ─────────────────────────────────────────────────────── -->
  <div class="bg-gradient-to-br from-[#2563eb] via-blue-600 to-indigo-600
              py-14 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
        Nuestra propuesta de valor
      </p>
      <h1 class="font-[Sora] text-3xl sm:text-4xl md:text-5xl font-bold
                 text-white mb-4 tracking-tight">
        ¿Por qué elegir EduStream?
      </h1>
      <p class="text-blue-100 text-lg max-w-2xl mx-auto">
        No somos solo otra plataforma de cursos. Somos la comunidad que te acompaña
        desde el primer día hasta conseguir tu meta profesional.
      </p>
    </div>
  </div>

  ${renderReasons()}
  ${renderTestimonials()}
  ${renderComparison()}
  ${renderCTA()}

</main>
  `.trim();
}
