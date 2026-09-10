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
