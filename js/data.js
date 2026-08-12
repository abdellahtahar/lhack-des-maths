/* ═══════════════════════════════════════════════════════════
   L'HACK DES MATHS — Bibliothèque de documents
   ───────────────────────────────────────────────────────────
   C'EST LE SEUL FICHIER À MODIFIER POUR AJOUTER UN DOCUMENT.

   {
     titre    : nom du document
     niveau   : '2bac' | '1bac' | 'tc' | 'college'
     symbole  : ce qui s'affiche sur la vignette (eˣ, ln, ∫…)
     type     : 'resume'     → section RÉSUMÉS DE COURS
                'exercices'  → section EXERCICES
                'controle'   → section CONTRÔLES & FORMULAIRES
                'formulaire' → idem
     resume   : une phrase de description
     pages    : nombre de pages
     fichier  : 'pdf/mon-fichier.pdf'  — laisse '' si pas encore prêt
     poids    : '1,2 Mo'
   }

   Le type décide TOUT SEUL dans quelle partie la fiche apparaît.
   ═══════════════════════════════════════════════════════════ */

window.CAHIER = {

  niveaux: {
    '2bac':    { court:'2 BAC',   long:'2ème Bac' },
    '1bac':    { court:'1 BAC',   long:'1ère Bac' },
    'tc':      { court:'TC',      long:'Tronc Commun' },
    'college': { court:'COLLÈGE', long:'Collège' }
  },

  types: {
    'resume':     'Résumé de cours',
    'exercices':  'Exercices corrigés',
    'controle':   'Contrôle',
    'formulaire': 'Formulaire'
  },

  /* Les parties du site, dans l'ordre d'affichage */
  sections: [
    {
      id:'resumes', titre:'Résumés de cours', types:['resume'], symbole:'§',
      intro:"L'essentiel du chapitre en quelques pages : définitions, propriétés et méthodes. À lire avant les exercices, à relire la veille du contrôle."
    },
    {
      id:'exercices', titre:'Exercices', types:['exercices'], symbole:'✎',
      intro:"Des séries progressives, entièrement corrigées. Cherche d'abord seul, crayon en main — la correction vient après."
    },
    {
      id:'controles', titre:'Contrôles & formulaires', types:['controle','formulaire'], symbole:'★',
      intro:"Devoirs surveillés avec barème, et formulaires à garder sous les yeux pendant les révisions."
    }
  ],

  documents: [

    /* ════ 2 BAC — RÉSUMÉS DE COURS ════ */
    { titre:'Fonction exponentielle', niveau:'2bac', symbole:'eˣ', type:'resume',
      resume:"Définition, propriétés algébriques, limites, croissances comparées et dérivation — l'essentiel en 4 pages.",
      pages:4, fichier:'', poids:'' },
    { titre:'Logarithme népérien', niveau:'2bac', symbole:'ln', type:'resume',
      resume:"Domaine, propriétés, équations et inéquations, limites et dérivée, avec les conditions d'existence en rappel.",
      pages:4, fichier:'', poids:'' },
    { titre:'Suites numériques', niveau:'2bac', symbole:'uₙ', type:'resume',
      resume:"Arithmétiques, géométriques, monotonie, convergence et raisonnement par récurrence.",
      pages:4, fichier:'', poids:'' },
    { titre:'Nombres complexes', niveau:'2bac', symbole:'ℂ', type:'resume',
      resume:"Forme algébrique, module, argument, forme trigonométrique et interprétation géométrique.",
      pages:4, fichier:'', poids:'' },
    { titre:'Calcul intégral', niveau:'2bac', symbole:'∫', type:'resume',
      resume:"Primitives usuelles, intégrale et aire, intégration par parties et calcul de volumes.",
      pages:4, fichier:'', poids:'' },

    /* ════ 2 BAC — EXERCICES ════ */
    { titre:'Fonction exponentielle — Série corrigée', niveau:'2bac', symbole:'eˣ', type:'exercices',
      resume:"18 exercices progressifs : équations, limites et études de fonctions. Corrigé rédigé étape par étape.",
      pages:16, fichier:'', poids:'' },
    { titre:'Logarithme népérien — Série corrigée', niveau:'2bac', symbole:'ln', type:'exercices',
      resume:"Équations, inéquations et études complètes, avec les conditions d'existence traitées à chaque fois.",
      pages:14, fichier:'', poids:'' },
    { titre:'Suites numériques — Série corrigée', niveau:'2bac', symbole:'uₙ', type:'exercices',
      resume:"Récurrence, majoration, suites auxiliaires géométriques et calculs de limites.",
      pages:12, fichier:'', poids:'' },
    { titre:'Nombres complexes — Série corrigée', niveau:'2bac', symbole:'ℂ', type:'exercices',
      resume:"Formes trigonométriques, racines n-ièmes et applications géométriques du plan complexe.",
      pages:12, fichier:'', poids:'' },
    { titre:'Calcul intégral — Série corrigée', niveau:'2bac', symbole:'∫', type:'exercices',
      resume:"Intégration par parties, changements d'écriture et calculs d'aires, tous corrigés.",
      pages:13, fichier:'', poids:'' },

    /* ════ 2 BAC — CONTRÔLES & FORMULAIRES ════ */
    { titre:'Contrôle blanc n°1', niveau:'2bac', symbole:'DS', type:'controle',
      resume:"Devoir surveillé de 2 heures : exponentielle, suites et complexes. Barème et corrigé inclus.",
      pages:6, fichier:'', poids:'' },
    { titre:'Formulaire — Primitives usuelles', niveau:'2bac', symbole:'∫', type:'formulaire',
      resume:"Toutes les primitives à connaître et les techniques d'intégration, sur une double page.",
      pages:2, fichier:'', poids:'' },

    /* ════ 1 BAC — RÉSUMÉS DE COURS ════ */
    { titre:'Logique mathématique', niveau:'1bac', symbole:'⇒', type:'resume',
      resume:"Propositions, connecteurs, quantificateurs et les quatre types de raisonnement.",
      pages:3, fichier:'', poids:'' },
    { titre:'Trigonométrie', niveau:'1bac', symbole:'sin', type:'resume',
      resume:"Cercle trigonométrique, valeurs remarquables, formules d'addition et de duplication.",
      pages:4, fichier:'', poids:'' },

    /* ════ 1 BAC — EXERCICES ════ */
    { titre:'Logique — Série corrigée', niveau:'1bac', symbole:'⇒', type:'exercices',
      resume:"Négations, contraposées, récurrence et raisonnement par l'absurde, avec corrections détaillées.",
      pages:9, fichier:'', poids:'' },
    { titre:'Trigonométrie — Série corrigée', niveau:'1bac', symbole:'sin', type:'exercices',
      resume:"Équations et inéquations trigonométriques, transformations d'expressions, tout corrigé.",
      pages:11, fichier:'', poids:'' },

    /* ════ 1 BAC — FORMULAIRE ════ */
    { titre:'Formulaire — Trigonométrie', niveau:'1bac', symbole:'θ', type:'formulaire',
      resume:"Toutes les formules à connaître, organisées pour la révision de dernière minute.",
      pages:2, fichier:'', poids:'' },

    /* ════ TRONC COMMUN ════ */
    { titre:'Fonctions numériques', niveau:'tc', symbole:'f(x)', type:'resume',
      resume:"Domaine de définition, image et antécédent, variations et lecture graphique.",
      pages:3, fichier:'', poids:'' },
    { titre:'Fonctions numériques — Série corrigée', niveau:'tc', symbole:'f(x)', type:'exercices',
      resume:"Déterminer un domaine, étudier des variations et lire un graphique, pas à pas.",
      pages:10, fichier:'', poids:'' },

    /* ════ COLLÈGE ════ */
    { titre:'Calcul littéral', niveau:'college', symbole:'x²', type:'resume',
      resume:"Développer, factoriser, identités remarquables et résolution d'équations.",
      pages:3, fichier:'', poids:'' },
    { titre:'Calcul littéral — Série corrigée', niveau:'college', symbole:'x²', type:'exercices',
      resume:"Du développement simple à la factorisation par identité remarquable, corrigé complet.",
      pages:8, fichier:'', poids:'' },
    { titre:'Géométrie repérée', niveau:'college', symbole:'↗', type:'resume',
      resume:"Coordonnées, milieu, distance et vecteurs dans le plan repéré.",
      pages:3, fichier:'', poids:'' },
    { titre:'Géométrie repérée — Série corrigée', niveau:'college', symbole:'↗', type:'exercices',
      resume:"Calculs de longueurs, natures de triangles et applications guidées dans le plan.",
      pages:7, fichier:'', poids:'' }
  ]
};
