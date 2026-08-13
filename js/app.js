/* =====================================================================
   L'HACK DES MATHS — moteur du site (vanilla JS)
   ===================================================================== */

/* ---------- Icônes SVG ---------- */
const ICO = {
  fleche:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  bas:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
  haut:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  telech:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>',
  loupe:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  book:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22z"/><path d="M4 17.5h16"/><path d="M9 7h7"/></svg>',
  pen:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg>',
  clock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  check:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  wa:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.42 1.31-1.95 1.36-.5.05-.98.24-3.3-.69-2.77-1.1-4.53-3.94-4.67-4.13-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.38-.06.6.46.24.55.79 1.9.86 2.04.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.3.36-.42.49-.14.14-.29.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.63-.14.25.09 1.6.75 1.88.89.28.14.46.21.53.32.06.11.06.65-.18 1.33z"/></svg>',
  mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="M3 7l9 6 9-6"/></svg>'
};

/* ---------- Petits helpers ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const niveauParSlug = s => NIVEAUX.find(n => n.slug === s);
const docsDe = (slug, type) => DOCUMENTS.filter(d => d.niveau === slug && (!type || d.type === type));
const nbDocs = slug => DOCUMENTS.filter(d => d.niveau === slug).length;

/* =====================================================================
   EN-TÊTE + PIED DE PAGE (injectés partout)
   ===================================================================== */
function monterChrome(){
  const nav = `
  <header class="nav" id="nav">
    <div class="wrap nav-in">
      <a href="index.html" class="logo">
        <span class="logo-mark">∑</span>
        <span>L'Hack Des <b>Maths</b><small>Prof. Abdellah Tahar</small></span>
      </a>
      <nav class="nav-liens">
        <a href="index.html#niveaux">Niveaux</a>
        <a href="index.html#rayons">Documents</a>
        <a href="index.html#moi">Qui suis-je</a>
        <a href="index.html#methode">Méthode</a>
        <a href="index.html#contact" class="btn btn-1" style="padding:11px 22px;font-size:14px">Me contacter</a>
      </nav>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </header>
  <div class="voile" id="voile"></div>
  <aside class="menu-mob" id="menuMob">
    <a href="index.html">Accueil</a>
    <a href="index.html#niveaux">Niveaux</a>
    <a href="index.html#rayons">Documents</a>
    <a href="index.html#moi">Qui suis-je</a>
    <a href="index.html#methode">Méthode</a>
    <a href="index.html#contact">Contact</a>
  </aside>
  <div class="progres" id="progres"></div>`;

  const pied = `
  <footer class="pied">
    <div class="wrap">
      <div class="pied-grid">
        <div>
          <a href="index.html" class="logo">
            <span class="logo-mark">∑</span>
            <span>L'Hack Des <b>Maths</b><small>Prof. Abdellah Tahar</small></span>
          </a>
          <p>Des documents de mathématiques clairs, structurés et gratuits, du collège jusqu'au baccalauréat.</p>
        </div>
        <div>
          <h5>Navigation</h5>
          <ul>
            <li><a href="index.html#niveaux">Tous les niveaux</a></li>
            <li><a href="index.html#rayons">Cours · Exercices · Devoirs</a></li>
            <li><a href="index.html#moi">Qui suis-je</a></li>
            <li><a href="index.html#methode">La méthode</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li><a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="${SITE.youtube}" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="pied-bas">
        <span>© ${new Date().getFullYear()} L'Hack Des Maths — ${SITE.centre}</span>
        <span>Fait avec ✦ à Fès</span>
      </div>
    </div>
  </footer>
  <button class="haut" id="haut" aria-label="Remonter">${ICO.haut}</button>
  <div class="rideau" id="rideau"><span>…</span></div>`;

  const slotN = $('#slot-nav'), slotP = $('#slot-pied');
  if (slotN) slotN.outerHTML = nav;
  if (slotP) slotP.outerHTML = pied;
}

/* =====================================================================
   INTERACTIONS GLOBALES
   ===================================================================== */
function interactions(){
  const nav = $('#nav'), burger = $('#burger'), menu = $('#menuMob'),
        voile = $('#voile'), haut = $('#haut'), progres = $('#progres');

  const ouvreMenu = (v) => {
    burger.classList.toggle('on', v);
    menu.classList.toggle('on', v);
    voile.classList.toggle('on', v);
    document.body.style.overflow = v ? 'hidden' : '';
  };
  burger?.addEventListener('click', () => ouvreMenu(!menu.classList.contains('on')));
  voile?.addEventListener('click', () => ouvreMenu(false));
  $$('#menuMob a').forEach(a => a.addEventListener('click', () => ouvreMenu(false)));

  const auScroll = () => {
    const y = scrollY;
    nav?.classList.toggle('colle', y > 20);
    haut?.classList.toggle('on', y > 600);
    if (progres){
      const h = document.documentElement.scrollHeight - innerHeight;
      progres.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  };
  addEventListener('scroll', auScroll, { passive:true });
  auScroll();

  haut?.addEventListener('click', () => scrollTo({ top:0, behavior:'smooth' }));

  /* Révélation au scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('vu'); io.unobserve(e.target); } });
  }, { threshold:.14, rootMargin:'0px 0px -60px 0px' });
  $$('.rev').forEach(el => io.observe(el));

  /* Lueur qui suit la souris sur les cartes */
  $$('.carte-niv').forEach(c => {
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* Transition « tourne-page » entre les pages internes */
  const rideau = $('#rideau');
  $$('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || a.target === '_blank') return;
    a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      rideau.querySelector('span').textContent = a.dataset.rideau || '…';
      rideau.classList.remove('sort'); rideau.classList.add('entre');
      setTimeout(() => { location.href = href; }, 560);
    });
  });
  addEventListener('pageshow', () => { rideau?.classList.remove('entre'); });
}

/* =====================================================================
   RENDU : GRILLE DES NIVEAUX
   ===================================================================== */
function rendreNiveaux(cible){
  const box = $(cible); if (!box) return;
  const cycles = [...new Set(NIVEAUX.map(n => n.cycle))];
  box.innerHTML = cycles.map(cy => `
    <div class="cycle-titre rev"><h3>${cy}</h3><div class="trait"></div></div>
    <div class="grille-niv">
      ${NIVEAUX.filter(n => n.cycle === cy).map((n,i) => `
        <a class="carte-niv rev rev-d${(i%4)+1}" href="niveau.html?n=${n.slug}" data-rideau="${n.court}">
          <span class="niv-tag">${n.court}</span>
          <h4>${n.nom}</h4>
          <p class="niv-sous">${n.sous}</p>
          <div class="niv-bas">
            <span class="niv-nb">${nbDocs(n.slug)} document${nbDocs(n.slug) > 1 ? 's' : ''}</span>
            <span class="niv-fleche">${ICO.fleche}</span>
          </div>
        </a>`).join('')}
    </div>`).join('');
}

/* =====================================================================
   RENDU : LES 3 RAYONS
   ===================================================================== */
function rendreRayons(cible, slug){
  const box = $(cible); if (!box) return;
  box.innerHTML = Object.values(RAYONS).map((r,i) => {
    const n = slug ? docsDe(slug, r.id).length : DOCUMENTS.filter(d => d.type === r.id).length;
    const lien = slug ? `bibliotheque.html?n=${slug}&t=${r.id}` : `index.html#niveaux`;
    return `
    <a class="rayon rev rev-d${i+1}" data-accent="${r.accent}" href="${lien}" data-rideau="${r.titre}">
      <span class="r-nb">${n} doc${n > 1 ? 's' : ''}</span>
      <span class="rayon-ico">${ICO[r.icone]}</span>
      <h3>${r.titre}</h3>
      <p class="r-sous">${r.sous}</p>
      <p>${r.desc}</p>
      <span class="r-cta">${slug ? 'Ouvrir le rayon' : 'Choisir un niveau'} ${ICO.fleche}</span>
    </a>`;
  }).join('');
}

/* =====================================================================
   RENDU : LISTE DES DOCUMENTS
   ===================================================================== */
function carteDoc(d){
  const niv = niveauParSlug(d.niveau);
  const etiquette = { cours:'COURS', exercices:'EXOS', devoirs:'DEVOIR' }[d.type];
  const dispo = d.fichier && d.fichier.trim() !== '';
  const date = d.date ? new Date(d.date).toLocaleDateString('fr-FR', { month:'short', year:'numeric' }) : '';
  return `
  <article class="doc rev" data-type="${d.type}">
    <span class="doc-ico">${etiquette}</span>
    <div class="doc-info">
      <h4>${d.titre}</h4>
      <div class="doc-meta">
        <span>${niv ? niv.court : d.niveau}</span>
        ${d.chapitre ? `<span>${d.chapitre}</span>` : ''}
        ${d.pages ? `<span>${d.pages} p.</span>` : ''}
        ${date ? `<span>${date}</span>` : ''}
      </div>
    </div>
    ${dispo
      ? `<a class="doc-dl" href="${d.fichier}" download target="_blank" rel="noopener">${ICO.telech} PDF</a>`
      : `<span class="doc-dl bientot">Bientôt</span>`}
  </article>`;
}

/* =====================================================================
   DÉMARRAGE
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  monterChrome();
  if (typeof avantInteractions === 'function') avantInteractions();
  interactions();
});
