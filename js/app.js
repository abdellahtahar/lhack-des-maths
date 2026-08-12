/* ═══════════════════════════════════════════════════════════
   L'HACK DES MATHS — Script du site
   ═══════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───── En-tête & jauge de lecture ───── */
  const entete = document.querySelector('.entete');
  const jauge  = document.getElementById('jauge');

  const auScroll = () => {
    if (entete) entete.classList.toggle('colle', scrollY > 16);
    if (jauge) {
      const h = document.documentElement.scrollHeight - innerHeight;
      jauge.style.width = h > 0 ? `${Math.min(100, (scrollY / h) * 100)}%` : '0%';
    }
  };
  auScroll();
  addEventListener('scroll', auScroll, { passive: true });

  /* ───── Menu mobile ───── */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('menu');
  if (burger && menu) {
    const fermer = () => {
      burger.classList.remove('on'); menu.classList.remove('on');
      burger.setAttribute('aria-expanded', 'false');
    };
    burger.addEventListener('click', () => {
      const on = burger.classList.toggle('on');
      menu.classList.toggle('on', on);
      burger.setAttribute('aria-expanded', String(on));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', fermer));
    addEventListener('keydown', e => { if (e.key === 'Escape') fermer(); });
  }

  /* ───── Apparitions au défilement ───── */
  const aReveler = document.querySelectorAll('.rev');
  if ('IntersectionObserver' in window && aReveler.length) {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vu'); obs.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -50px' });
    aReveler.forEach(el => obs.observe(el));
  } else {
    aReveler.forEach(el => el.classList.add('vu'));
  }

  /* ───── Le cahier qui s'ouvre ───── */
  const cahier = document.getElementById('cahier');
  if (cahier) {
    const ouvrir = () => {
      if (cahier.classList.contains('ouvert')) return;
      cahier.classList.add('ouvert');
      cahier.setAttribute('aria-expanded', 'true');
    };
    // s'ouvre tout seul après le chargement…
    if (reduit) ouvrir();
    else setTimeout(ouvrir, 1500);
    // …ou immédiatement si on clique dessus
    cahier.addEventListener('click', ouvrir);
    cahier.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ouvrir(); }
    });
  }

  /* ───── Compteurs animés ───── */
  const compteurs = document.querySelectorAll('[data-compte]');
  if (compteurs.length && 'IntersectionObserver' in window && !reduit) {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target, fin = parseFloat(el.dataset.compte), suffixe = el.dataset.suffixe || '';
        const debut = performance.now(), duree = 1100;
        const pas = t => {
          const p = Math.min(1, (t - debut) / duree);
          el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3))) + suffixe;
          if (p < 1) requestAnimationFrame(pas);
        };
        requestAnimationFrame(pas);
        obs.unobserve(el);
      });
    }, { threshold: .5 });
    compteurs.forEach(c => obs.observe(c));
  } else {
    compteurs.forEach(c => c.textContent = c.dataset.compte + (c.dataset.suffixe || ''));
  }

  /* ───── Année ───── */
  const an = document.getElementById('an');
  if (an) an.textContent = new Date().getFullYear();

  /* ───── Message flottant ───── */
  const toast = msg => {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role','status'); document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('vu'));
    clearTimeout(t._m);
    t._m = setTimeout(() => t.classList.remove('vu'), 2800);
  };

  /* ═════════ PAGE NIVEAU — l'écran de choix ═════════ */
  const dataN = window.CAHIER;
  const choix = document.getElementById('choix');
  if (dataN && choix) {
    const n = new URLSearchParams(location.search).get('n');
    const niv = dataN.niveaux[n];

    if (!niv) { location.replace('bibliotheque.html'); return; }

    document.title = `${niv.long} — L'Hack Des Maths`;
    document.getElementById('filNiveau').textContent = niv.long;
    document.getElementById('niveauTag').textContent = niv.long;

    const fleche = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

    const cartes = dataN.sections.map(sec => {
      const docs = dataN.documents.filter(d => d.niveau === n && sec.types.includes(d.type));
      if (!docs.length) return '';
      const pretes = docs.filter(d => d.fichier).length;
      const apercu = docs.slice(0, 4).map(d => `<span>${d.titre.split(' — ')[0]}</span>`).join('');
      return `
        <a class="carte-choix" id="c-${sec.id}" href="bibliotheque.html?niveau=${n}&partie=${sec.id}">
          <span class="choix-signe" aria-hidden="true">${sec.symbole}</span>
          <span class="choix-nb">${docs.length} document${docs.length > 1 ? 's' : ''}</span>
          <h2>${sec.titre}</h2>
          <p>${sec.intro}</p>
          <div class="choix-apercu">${apercu}${docs.length > 4 ? `<span class="plus">+${docs.length - 4}</span>` : ''}</div>
          <span class="choix-aller">${pretes ? 'Télécharger' : 'Voir la liste'} ${fleche}</span>
        </a>`;
    }).join('');

    choix.innerHTML = cartes;

    // les autres niveaux, pour changer sans repasser par l'accueil
    const autres = document.getElementById('autresNiveaux');
    if (autres) {
      autres.innerHTML = Object.keys(dataN.niveaux).map(k => {
        const nb = dataN.documents.filter(d => d.niveau === k).length;
        return `<a class="${k === n ? 'ici' : ''}" href="niveau.html?n=${k}">
                  ${dataN.niveaux[k].long}<b>${nb}</b>
                </a>`;
      }).join('');
    }
    return;
  }

  /* ═════════ BIBLIOTHÈQUE ═════════ */
  const data    = window.CAHIER;
  const conteneur = document.getElementById('parties');
  if (!data || !conteneur) return;

  const champ   = document.getElementById('chercher');
  const boite   = document.querySelector('.chercher');
  const vider   = document.getElementById('vider');
  const rien    = document.getElementById('rien');
  const nb      = document.getElementById('nb');
  const onglets = document.querySelectorAll('[data-niveau]');
  const raccourcis = document.getElementById('raccourcis');
  const limite  = parseInt(conteneur.dataset.limite || '0', 10); // 0 = tout

  const etat = { niveau: 'tous', partie: 'toutes', q: '' };
  const sansAccent = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const iconeDL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/></svg>`;

  function fiche(d) {
    const niv = data.niveaux[d.niveau];
    const pret = Boolean(d.fichier);
    const el = document.createElement('article');
    el.className = 'fiche' + (pret ? '' : ' bientot');
    el.innerHTML = `
      <div class="fiche-page">
        <span class="fiche-niveau">${niv.court}</span>
        <span class="fiche-pages">${d.pages} p.</span>
        <span class="fiche-symbole" aria-hidden="true">${d.symbole}</span>
      </div>
      <div class="fiche-corps">
        <div class="fiche-etiqs">
          <span class="puce-tag bleu">${data.types[d.type]}</span>
          <span class="puce-tag">${niv.long}</span>
        </div>
        <h3>${pret
          ? `<a href="${d.fichier}" download>${d.titre}</a>`
          : `<a href="#" data-bientot>${d.titre}</a>`}</h3>
        <p>${d.resume}</p>
        <div class="fiche-pied">
          <span>PDF${d.poids ? ' · ' + d.poids : ''}</span>
          <span class="dl">${pret ? 'Télécharger' : 'Bientôt'} ${iconeDL}</span>
        </div>
      </div>`;
    if (!pret) {
      el.querySelector('[data-bientot]').addEventListener('click', e => {
        e.preventDefault();
        toast('Ce document arrive très bientôt');
      });
    } else {
      el.querySelector('a[download]').addEventListener('click', () => toast('Téléchargement lancé'));
    }
    return el;
  }

  /* Une partie = un bloc « Résumés de cours » ou « Exercices » */
  function partie(sec, docs) {
    const bloc = document.createElement('section');
    bloc.className = 'partie';
    bloc.id = sec.id;
    bloc.innerHTML = `
      <header class="partie-tete">
        <span class="partie-signe" aria-hidden="true">${sec.symbole}</span>
        <div>
          <h2>${sec.titre}</h2>
          <p>${sec.intro}</p>
        </div>
        <span class="partie-compte">${docs.length}</span>
      </header>
      <div class="fiches"></div>`;
    bloc.querySelector('.fiches').replaceChildren(...docs.map(fiche));
    return bloc;
  }

  function afficher() {
    const q = sansAccent(etat.q.trim());

    const typesVisibles = etat.partie === 'toutes'
      ? null
      : data.sections.find(s => s.id === etat.partie)?.types || null;

    const retenus = data.documents.filter(d => {
      const texte = sansAccent(`${d.titre} ${d.resume} ${data.types[d.type]} ${data.niveaux[d.niveau].long}`);
      return (etat.niveau === 'tous' || d.niveau === etat.niveau)
          && (!typesVisibles || typesVisibles.includes(d.type))
          && (!q || texte.includes(q));
    });

    const blocs = [];
    const liens = [];
    data.sections
      .filter(sec => etat.partie === 'toutes' || sec.id === etat.partie)
      .forEach(sec => {
      let docs = retenus.filter(d => sec.types.includes(d.type));
      if (!docs.length) return;
      const total = docs.length;
      if (limite) docs = docs.slice(0, limite);
      blocs.push(partie(sec, docs));
      liens.push(`<a href="#${sec.id}">${sec.titre} <b>${total}</b></a>`);
    });

    conteneur.replaceChildren(...blocs);
    if (rien) rien.hidden = retenus.length !== 0;
    if (nb) nb.textContent = `${retenus.length} document${retenus.length > 1 ? 's' : ''}`;
    if (raccourcis) {
      raccourcis.innerHTML = liens.length > 1 ? liens.join('') : '';
      raccourcis.hidden = liens.length < 2;
    }
  }

  onglets.forEach(b => b.addEventListener('click', () => {
    etat.niveau = b.dataset.niveau;
    onglets.forEach(o => o.setAttribute('aria-selected', String(o === b)));
    majURL(); afficher();
  }));

  const ongletsPartie = document.querySelectorAll('[data-partie]');
  ongletsPartie.forEach(b => b.addEventListener('click', () => {
    etat.partie = b.dataset.partie;
    ongletsPartie.forEach(o => o.setAttribute('aria-selected', String(o === b)));
    majURL(); afficher();
  }));

  function majURL() {
    const p = new URLSearchParams();
    if (etat.niveau !== 'tous') p.set('niveau', etat.niveau);
    if (etat.partie !== 'toutes') p.set('partie', etat.partie);
    const q = p.toString();
    history.replaceState({}, '', q ? `bibliotheque.html?${q}` : 'bibliotheque.html');
  }

  let m;
  champ?.addEventListener('input', () => {
    boite?.classList.toggle('plein', champ.value.length > 0);
    clearTimeout(m);
    m = setTimeout(() => { etat.q = champ.value; afficher(); }, 150);
  });

  vider?.addEventListener('click', () => {
    champ.value = ''; etat.q = '';
    boite?.classList.remove('plein');
    champ.focus(); afficher();
  });

  document.getElementById('toutVoir')?.addEventListener('click', () => {
    etat.niveau = 'tous'; etat.partie = 'toutes'; etat.q = '';
    if (champ) { champ.value = ''; boite?.classList.remove('plein'); }
    onglets.forEach(o => o.setAttribute('aria-selected', String(o.dataset.niveau === 'tous')));
    document.querySelectorAll('[data-partie]').forEach(o => o.setAttribute('aria-selected', String(o.dataset.partie === 'toutes')));
    majURL(); afficher();
  });

  // bibliotheque.html?niveau=2bac&partie=exercices
  const url = new URLSearchParams(location.search);
  const pn = url.get('niveau');
  if (pn && data.niveaux[pn]) {
    etat.niveau = pn;
    onglets.forEach(o => o.setAttribute('aria-selected', String(o.dataset.niveau === pn)));
  }
  const pp = url.get('partie');
  if (pp && data.sections.some(s => s.id === pp)) {
    etat.partie = pp;
    document.querySelectorAll('[data-partie]').forEach(o => o.setAttribute('aria-selected', String(o.dataset.partie === pp)));
  }

  afficher();
})();
