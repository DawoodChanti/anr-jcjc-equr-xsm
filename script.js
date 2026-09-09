const button = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
  button.querySelector('span').textContent = expanded ? '−' : '＋';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  button.querySelector('span').textContent = '＋';
}));
