/* Camada de experiência visual: progressão de leitura e movimento discreto. */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero .container');
  if (hero) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'hero__eyebrow';
    eyebrow.textContent = 'GASTRONOMIA PARA CELEBRAÇÕES';
    hero.prepend(eyebrow);

    const details = document.createElement('div');
    details.className = 'hero__details';
    details.innerHTML = '<span>Desde 2001</span><i></i><span>Brasília e entorno</span><i></i><span>Orçamento em 24h</span>';
    hero.append(details);

    const scrollHint = document.createElement('a');
    scrollHint.className = 'scroll-hint';
    scrollHint.href = '#servicos';
    scrollHint.setAttribute('aria-label', 'Conheça os cardápios');
    scrollHint.innerHTML = '<span>Descubra</span><b></b>';
    document.querySelector('.hero')?.append(scrollHint);
  }

  document.querySelectorAll('.historia__text h2, .diferenciais h2, .eventos h2, .cardapios h2, .contato h2, .receitas h2').forEach(title => {
    if (!title.previousElementSibling?.classList.contains('section-kicker')) {
      const kicker = document.createElement('span');
      kicker.className = 'section-kicker';
      kicker.textContent = title.closest('.historia') ? 'A ESSÊNCIA EULER PASSOS' : 'SABOR QUE FICA NA MEMÓRIA';
      title.before(kicker);
    }
  });

  document.querySelectorAll('.historia__content, .diferencial__card, .servico__card, .receita__card, .contato__form, .contato__info, .eventos .container > p').forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 80}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible'));
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

  const header = document.querySelector('.header');
  const updateHeader = () => header?.classList.toggle('header--compact', window.scrollY > 40);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
});
