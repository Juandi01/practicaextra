const NAV_LINKS = [
  { label: 'Inicio',            page: 'home'    },
  { label: 'Catálogo',          page: 'catalog' },
  { label: 'Por qué elegirnos', page: 'why-us'  },
];

function desktopLinkClass(page, activePage) {
  const base = 'text-sm font-medium transition-colors duration-200 pb-0.5';
  return page === activePage
    ? `${base} text-[#2563eb] font-semibold border-b-2 border-[#2563eb]`
    : `${base} text-gray-600 hover:text-[#2563eb]`;
}

function mobileLinkClass(page, activePage) {
  const base = 'block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200';
  return page === activePage
    ? `${base} text-[#2563eb] font-semibold bg-blue-50`
    : `${base} text-gray-600 hover:text-[#2563eb] hover:bg-gray-50`;
}

export function renderNavbar(activePage = '') {
  const desktopLinks = NAV_LINKS.map(({ label, page }) =>
    `<a href="#" data-page="${page}" class="${desktopLinkClass(page, activePage)}">${label}</a>`
  ).join('\n          ');

  const mobileLinks = NAV_LINKS.map(({ label, page }) =>
    `<a href="#" data-page="${page}" class="${mobileLinkClass(page, activePage)}">${label}</a>`
  ).join('\n            ');

  return `
<nav class="bg-white shadow-sm fixed top-0 inset-x-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Top bar -->
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="#" data-page="home"
         class="font-[Sora] text-2xl font-bold text-[#2563eb] tracking-tight no-underline shrink-0">
        EduStream
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        ${desktopLinks}
        <button
          data-page="catalog"
          class="bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800
                 text-white text-sm font-semibold
                 px-5 py-2.5 rounded-lg
                 transition-colors duration-200
                 cursor-pointer border-0">
          Empezar gratis
        </button>
      </div>

      <!-- Hamburger toggle (mobile only) -->
      <button
        id="navbar-toggle"
        aria-label="Abrir menú de navegación"
        aria-expanded="false"
        aria-controls="navbar-menu"
        class="md:hidden inline-flex items-center justify-center
               p-2 rounded-lg
               text-gray-600 hover:text-[#2563eb] hover:bg-gray-100
               transition-colors duration-200
               cursor-pointer border-0 bg-transparent">
        <!-- Hamburger icon -->
        <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <!-- Close icon (hidden by default) -->
        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu (collapsed by default) -->
    <div id="navbar-menu"
         class="hidden md:hidden border-t border-gray-100 pb-4">
      <div class="flex flex-col gap-1 pt-3">
        ${mobileLinks}
        <div class="px-4 pt-3">
          <button
            data-page="catalog"
            class="w-full bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800
                   text-white text-sm font-semibold
                   px-5 py-3 rounded-lg
                   transition-colors duration-200
                   cursor-pointer border-0">
            Empezar gratis
          </button>
        </div>
      </div>
    </div>

  </div>
</nav>
  `.trim();
}

export function initNavbar() {
  _injectSoraFont();

  const toggle   = document.getElementById('navbar-toggle');
  const menu     = document.getElementById('navbar-menu');
  const iconOpen  = document.getElementById('hamburger-icon');
  const iconClose = document.getElementById('close-icon');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.remove('hidden');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.contains('hidden') ? openMenu() : closeMenu();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when viewport becomes desktop-sized
  const mq = window.matchMedia('(min-width: 768px)');
  mq.addEventListener('change', (e) => { if (e.matches) closeMenu(); });
}

function _injectSoraFont() {
  if (document.getElementById('sora-font')) return;
  const link = document.createElement('link');
  link.id   = 'sora-font';
  link.rel  = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@600;700&display=swap';
  document.head.appendChild(link);
}
