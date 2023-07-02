export function initializer(links) {
  const main = document.querySelector('main');
  document.querySelector('nav').addEventListener('click', onNavigate);

  const ctx = {
    showSection,
    goTo,
    updateNav,
  };

  return ctx;

  function showSection(section) {
    main.replaceChildren(section);
  }

  function onNavigate(e) {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }
    if (target.tagName === 'A') {
      const url = new URL(target);
      const path = url.pathname;
      goTo(path);
    }
  }

  function goTo(path, ...params) {
    const handler = links[path];
    if (typeof handler === 'function') {
      handler(ctx, params);
    }
  }

  function updateNav() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      document.querySelectorAll('.user').forEach((el) => (el.style.display = 'block'));
      document.querySelectorAll('.guest').forEach((el) => (el.style.display = 'none'));
    } else {
      document.querySelectorAll('.user').forEach((el) => (el.style.display = 'none'));
      document.querySelectorAll('.guest').forEach((el) => (el.style.display = 'block'));
    }
  }
}
