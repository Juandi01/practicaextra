import { renderNavbar } from './components/navbar.js'
import { renderHome } from './pages/home.js'
import { renderCatalog } from './pages/catalog.js'
import { renderWhyUs } from './pages/why-us.js'
import { renderCourse, initCourse } from './pages/course.js'

const app = document.getElementById('app')

function render(page) {
  app.innerHTML = `
    ${renderNavbar(page)}
    ${page === 'home'    ? renderHome()    : ''}
    ${page === 'catalog' ? renderCatalog() : ''}
    ${page === 'why-us'  ? renderWhyUs()  : ''}
    ${page === 'course'  ? renderCourse()  : ''}
  `
  bindNav()
  if (page === 'course') initCourse()
}

function bindNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      render(el.dataset.page)
    })
  })
}

render('home')
