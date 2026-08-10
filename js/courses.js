(() => {
  const search = document.getElementById('courseSearch');
  const cards = [...document.querySelectorAll('.course-card')];
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');
  const resetBtn = document.getElementById('resetFilters');
  const sort = document.getElementById('sortSelect');
  const grid = document.getElementById('courseGrid');

  if (!search || !cards.length) return;

  const params = new URLSearchParams(location.search);
  const requestedLevel = params.get('level');
  if (requestedLevel) {
    const radio = document.querySelector(`input[name="level"][value="${requestedLevel}"]`);
    if (radio) radio.checked = true;
  }

  const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function applyFilters() {
    const q = normalize(search.value.trim());
    const level = document.querySelector('input[name="level"]:checked')?.value || 'all';
    const selectedTypes = [...document.querySelectorAll('input[name="type"]:checked')].map(i => i.value);

    let visible = 0;
    cards.forEach(card => {
      const title = normalize(card.dataset.title || '');
      const cardLevel = card.dataset.level;
      const types = (card.dataset.types || '').split(' ');
      const textMatch = !q || title.includes(q) || normalize(card.textContent).includes(q);
      const levelMatch = level === 'all' || cardLevel === level;
      const typeMatch = !selectedTypes.length || selectedTypes.every(t => types.includes(t));
      const show = textMatch && levelMatch && typeMatch;
      card.hidden = !show;
      if (show) visible++;
    });

    resultCount.textContent = visible;
    emptyState.hidden = visible !== 0;
  }

  search.addEventListener('input', applyFilters);
  document.querySelectorAll('input[name="level"], input[name="type"]').forEach(i => i.addEventListener('change', applyFilters));

  resetBtn?.addEventListener('click', () => {
    search.value = '';
    document.querySelector('input[name="level"][value="all"]').checked = true;
    document.querySelectorAll('input[name="type"]').forEach(i => i.checked = false);
    history.replaceState({}, '', 'courses.html');
    applyFilters();
  });

  sort?.addEventListener('change', () => {
    const visibleCards = [...cards];
    if (sort.value === 'az') {
      visibleCards.sort((a,b) => a.dataset.title.localeCompare(b.dataset.title, 'fr'));
    } else {
      visibleCards.sort((a,b) => cards.indexOf(a) - cards.indexOf(b));
    }
    visibleCards.forEach(card => grid.appendChild(card));
  });

  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      search.focus();
    }
  });

  applyFilters();
})();
