document.documentElement.classList.add('js');
const button = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function setMenu(expanded) {
  button.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
  button.querySelector('span').textContent = expanded ? '−' : '＋';
}
button.addEventListener('click', () => {
  setMenu(button.getAttribute('aria-expanded') !== 'true');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    button.focus();
  }
});

// Keep previously shared single-page links working after the page split.
const legacyRoutes = {
  "projet": "project.html",
  "project-summary": "project.html#project-summary",
  "overview-title": "project.html#overview-title",
  "resultats": "publications.html",
  "explains-2026-results": "publications.html#explains-2026-results",
  "results-title": "publications.html#results-title",
  "evenements": "news.html",
  "equipe": "team.html",
  "contact": "team.html#contact"
};
function routeLegacyAnchor() {
  if (document.body.dataset.page !== 'index.html') return;
  const key = window.location.hash.slice(1);
  const destination = Object.prototype.hasOwnProperty.call(legacyRoutes, key) ? legacyRoutes[key] : null;
  if (destination) window.location.replace(destination);
}
routeLegacyAnchor();
window.addEventListener('hashchange', routeLegacyAnchor);
