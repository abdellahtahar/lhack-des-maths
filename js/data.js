/* ═══════════════════════════════════════════════════════════
   L'HACK DES MATHS — Bibliothèque de documents
   ───────────────────────────────────────────────────────────
   C'EST LE SEUL FICHIER À MODIFIER POUR AJOUTER UN DOCUMENT.

   {
     titre    : nom du document
     niveau   : '2bac' | '1bac' | 'tc' | 'college'
     symbole  : ce qui s'affiche sur la vignette (eˣ, ln, ∫…)
     type     : 'cours' | 'exercices' | 'controle' | 'formulaire'
     resume   : une phrase de description
     pages    : nombre de pages
     fichier  : 'pdf/mon-fichier.pdf'  — laisse '' si pas encore prêt
     poids    : '1,2 Mo'
   }
   ═══════════════════════════════════════════════════════════ */

window.CAHIER = {

  niveaux: {
    '2bac':    { court:'2 BAC',   long:'2ème Bac' },
    '1bac':    { court:'1 BAC',   long:'1ère Bac' },
    'tc':      { court:'TC',      long:'Tronc Commun' },
    'college': { court:'COLLÈGE', long:'Collège' }
  },

  types: {
    'cours':      'Cours',
    'exercices':  'Exercices',
    'controle':   'Contrôle',
    'formulaire': 'Formulaire'
  },

  documents: [
    {
      titre:'Fonction exponentielle — Cours complet',
      niveau:'2bac', symbole:'eˣ', type:'cours',
      resume:"Définition, propriétés algébriques, limites, croissances comparées et étude de fonctions.",
      pages:12, fichier:'', poids:''
    },
    {
      titre:'Fonction exponentielle — Série corrigée',
      niveau:'2bac', symbole:'eˣ', type:'exercices',
      resume:"18 exercices progressifs, du calcul direct aux études de type Bac, tous corrigés.",
      pages:16, fichier:'', poids:''
    },
    {
      titre:'Logarithme népérien — Cours complet',
      niveau:'2bac', symbole:'ln', type:'cours',
      resume:"Domaine, propriétés, équations et inéquations, limites et dérivée de ln.",
      pages:10, fichier:'', poids:''
    },
    {
      titre:'Logarithme népérien — Série corrigée',
      niveau:'2bac', symbole:'ln', type:'exercices',
      resume:"Équations, inéquations et études de fonctions avec les conditions d'existence détaillées.",
      pages:14, fichier:'', poids:''
    },
    {
      titre:'Suites numériques — Cours & méthodes',
      niveau:'2bac', symbole:'uₙ', type:'cours',
      resume:"Arithmétiques, géométriques, monotonie, convergence et raisonnement par récurrence.",
      pages:11, fichier:'', poids:''
    },
    {
      titre:'Calcul intégral — Formulaire',
      niveau:'2bac', symbole:'∫', type:'formulaire',
      resume:"Toutes les primitives usuelles et les techniques d'intégration sur une double page.",
      pages:2, fichier:'', poids:''
    },
    {
      titre:'Nombres complexes — Cours complet',
      niveau:'2bac', symbole:'ℂ', type:'cours',
      resume:"Forme algébrique, module, argument, forme trigonométrique et lecture géométrique.",
      pages:13, fichier:'', poids:''
    },
    {
      titre:'Contrôle blanc n°1 — 2 Bac',
      niveau:'2bac', symbole:'DS', type:'controle',
      resume:"Devoir surveillé de 2 heures : exponentielle, suites et complexes. Barème et corrigé inclus.",
      pages:6, fichier:'', poids:''
    },
    {
      titre:'Logique mathématique — Cours',
      niveau:'1bac', symbole:'⇒', type:'cours',
      resume:"Propositions, connecteurs, quantificateurs et les quatre types de raisonnement.",
      pages:8, fichier:'', poids:''
    },
    {
      titre:'Trigonométrie — Cours & exercices',
      niveau:'1bac', symbole:'sin', type:'cours',
      resume:"Cercle trigonométrique, valeurs remarquables, formules d'addition et équations.",
      pages:12, fichier:'', poids:''
    },
    {
      titre:'Trigonométrie — Formulaire',
      niveau:'1bac', symbole:'θ', type:'formulaire',
      resume:"Toutes les formules à connaître, organisées pour la révision de dernière minute.",
      pages:2, fichier:'', poids:''
    },
    {
      titre:'Fonctions numériques — Cours',
      niveau:'tc', symbole:'f(x)', type:'cours',
      resume:"Domaine de définition, image et antécédent, variations et lecture graphique.",
      pages:9, fichier:'', poids:''
    },
    {
      titre:'Calcul littéral — Exercices corrigés',
      niveau:'college', symbole:'x²', type:'exercices',
      resume:"Développer, factoriser, identités remarquables et résolution d'équations pas à pas.",
      pages:8, fichier:'', poids:''
    },
    {
      titre:'Géométrie repérée — Exercices',
      niveau:'college', symbole:'↗', type:'exercices',
      resume:"Coordonnées, milieu, distance et nature des triangles dans le plan repéré.",
      pages:7, fichier:'', poids:''
    }
  ]
};
