/* =====================================================================
   L'HACK DES MATHS — BASE DE DONNÉES DU SITE
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter du contenu.
   Aucun autre fichier ne doit être touché.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) LES NIVEAUX
   ---------------------------------------------------------------------
   cycle : "Collège" ou "Lycée"   (c'est le premier choix sur l'accueil)
   --------------------------------------------------------------------- */
const NIVEAUX = [

  /* ================= LYCÉE ================= */
  { slug:"2bac-pc-svt", nom:"2<sup>ème</sup> BAC", court:"2BAC PC & SVT", cycle:"Lycée",
    sous:"Sciences Physiques &amp; SVT" },

  { slug:"2bac-sm",     nom:"2<sup>ème</sup> BAC", court:"2BAC SM",       cycle:"Lycée",
    sous:"Sciences Maths A &amp; B" },

  { slug:"1bac-se",     nom:"1<sup>ère</sup> BAC", court:"1BAC SE",       cycle:"Lycée",
    sous:"Sciences Expérimentales" },

  { slug:"1bac-sm",     nom:"1<sup>ère</sup> BAC", court:"1BAC SM",       cycle:"Lycée",
    sous:"Sciences Mathématiques" },

  { slug:"tcs",         nom:"Tronc Commun",        court:"TCS",           cycle:"Lycée",
    sous:"Sciences" },

  /* ================= COLLÈGE ================= */
  { slug:"3apic", nom:"3<sup>ème</sup> Année", court:"3APIC", cycle:"Collège", sous:"Troisième année" },
  { slug:"2apic", nom:"2<sup>ème</sup> Année", court:"2APIC", cycle:"Collège", sous:"Deuxième année" },
  { slug:"1apic", nom:"1<sup>ère</sup> Année", court:"1APIC", cycle:"Collège", sous:"Première année" }
];


/* ---------------------------------------------------------------------
   2) LES DEUX CYCLES  (le premier écran de l'accueil)
   --------------------------------------------------------------------- */
const CYCLES = [
  { id:"Lycée",   titre:"Lycée",   sous:"Tronc Commun · 1BAC · 2BAC", note:"Du TC jusqu'à l'examen national" },
  { id:"Collège", titre:"Collège", sous:"1AC · 2AC · 3AC",            note:"Les bases, proprement posées" }
];


/* ---------------------------------------------------------------------
   3) LES TROIS RAYONS  (ne pas modifier)
   --------------------------------------------------------------------- */
const RAYONS = {
  cours: {
    id:"cours", titre:"Cours", sous:"Résumés de cours",
    desc:"Tout le chapitre en quelques pages : définitions, propriétés, théorèmes et méthodes-clés.",
    icone:"book", accent:"violet"
  },
  exercices: {
    id:"exercices", titre:"Exercices", sous:"Séries corrigées",
    desc:"Des séries progressives, de l'application directe jusqu'au niveau examen national.",
    icone:"pen", accent:"jaune"
  },
  devoirs: {
    id:"devoirs", titre:"Devoirs", sous:"Contrôles & examens",
    desc:"Devoirs surveillés, devoirs libres et sujets d'examen national avec corrections.",
    icone:"clock", accent:"rouge"
  }
};


/* ---------------------------------------------------------------------
   4) LES DOCUMENTS
   ---------------------------------------------------------------------
   POUR PUBLIER UN DOCUMENT :
     1. mets le PDF dans le dossier  pdf/
     2. écris son nom dans le champ  fichier
        ex :  fichier:"pdf/2bac-limites-cours.pdf"

   Tant que  fichier:""  le document s'affiche « Bientôt ».

   type : "cours" | "exercices" | "devoirs"
   --------------------------------------------------------------------- */
const DOCUMENTS = [

  /* =================================================================
     2BAC PC & SVT
     ================================================================= */
  { titre:"Limites et continuité",              niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:12, date:"2026-09-08", fichier:"" },
  { titre:"Dérivation et étude des fonctions",  niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:16, date:"2026-09-22", fichier:"" },
  { titre:"Suites numériques",                  niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:10, date:"2026-10-06", fichier:"" },
  { titre:"Fonctions primitives",               niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:6,  date:"2026-10-20", fichier:"" },
  { titre:"Fonctions logarithmiques",           niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:11, date:"2026-11-03", fichier:"" },
  { titre:"Nombres complexes",                  niveau:"2bac-pc-svt", type:"cours", chapitre:"Algèbre",      pages:14, date:"2026-11-17", fichier:"" },
  { titre:"Fonctions exponentielles",           niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:11, date:"2027-01-12", fichier:"" },
  { titre:"Calcul intégral",                    niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:13, date:"2027-02-09", fichier:"" },
  { titre:"Équations différentielles",          niveau:"2bac-pc-svt", type:"cours", chapitre:"Analyse",      pages:7,  date:"2027-02-23", fichier:"" },
  { titre:"Géométrie dans l'espace",            niveau:"2bac-pc-svt", type:"cours", chapitre:"Géométrie",    pages:14, date:"2027-03-09", fichier:"" },
  { titre:"Dénombrement",                       niveau:"2bac-pc-svt", type:"cours", chapitre:"Probabilités", pages:6,  date:"2027-03-30", fichier:"" },
  { titre:"Probabilités",                       niveau:"2bac-pc-svt", type:"cours", chapitre:"Probabilités", pages:9,  date:"2027-04-13", fichier:"" },

  { titre:"Série 1 — Limites et continuité",       niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-09-15", fichier:"" },
  { titre:"Série 2 — Dérivation et variations",    niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-09-29", fichier:"" },
  { titre:"Série 3 — Suites numériques",           niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-10-13", fichier:"" },
  { titre:"Série 4 — Fonctions logarithmiques",    niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-11-10", fichier:"" },
  { titre:"Série 5 — Nombres complexes",           niveau:"2bac-pc-svt", type:"exercices", chapitre:"Algèbre",      pages:6, date:"2026-11-24", fichier:"" },
  { titre:"Série 6 — Fonctions exponentielles",    niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-01-19", fichier:"" },
  { titre:"Série 7 — Calcul intégral",             niveau:"2bac-pc-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-02-16", fichier:"" },
  { titre:"Série 8 — Géométrie dans l'espace",     niveau:"2bac-pc-svt", type:"exercices", chapitre:"Géométrie",    pages:5, date:"2027-03-23", fichier:"" },
  { titre:"Série 9 — Dénombrement et probabilités",niveau:"2bac-pc-svt", type:"exercices", chapitre:"Probabilités", pages:5, date:"2027-04-20", fichier:"" },

  { titre:"Devoir surveillé n°1",           niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-10-24", fichier:"" },
  { titre:"Devoir libre n°1",               niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Semestre 1", pages:2, date:"2026-11-14", fichier:"" },
  { titre:"Devoir surveillé n°2",           niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-12-12", fichier:"" },
  { titre:"Devoir surveillé n°3",           niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-02-27", fichier:"" },
  { titre:"Devoir surveillé n°4",           niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-04-24", fichier:"" },
  { titre:"Examen national — corrigé",      niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Révision",   pages:8, date:"2027-05-15", fichier:"" },
  { titre:"Examen blanc — sujet + corrigé", niveau:"2bac-pc-svt", type:"devoirs", chapitre:"Révision",   pages:9, date:"2027-05-25", fichier:"" },


  /* =================================================================
     2BAC SCIENCES MATHS (A & B)
     ================================================================= */
  { titre:"Limites et continuité",             niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:14, date:"2026-09-08", fichier:"" },
  { titre:"Dérivation et étude des fonctions", niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:18, date:"2026-09-22", fichier:"" },
  { titre:"Suites numériques",                 niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:12, date:"2026-10-06", fichier:"" },
  { titre:"Structures algébriques",            niveau:"2bac-sm", type:"cours", chapitre:"Algèbre",      pages:10, date:"2026-10-20", fichier:"" },
  { titre:"Fonctions logarithmiques",          niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:12, date:"2026-11-03", fichier:"" },
  { titre:"Nombres complexes",                 niveau:"2bac-sm", type:"cours", chapitre:"Algèbre",      pages:16, date:"2026-11-17", fichier:"" },
  { titre:"Fonctions exponentielles",          niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:12, date:"2027-01-12", fichier:"" },
  { titre:"Calcul intégral",                   niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:15, date:"2027-02-09", fichier:"" },
  { titre:"Équations différentielles",         niveau:"2bac-sm", type:"cours", chapitre:"Analyse",      pages:8,  date:"2027-02-23", fichier:"" },
  { titre:"Arithmétique dans ℤ",               niveau:"2bac-sm", type:"cours", chapitre:"Arithmétique", pages:12, date:"2027-03-09", fichier:"" },
  { titre:"Espaces vectoriels",                niveau:"2bac-sm", type:"cours", chapitre:"Algèbre",      pages:10, date:"2027-03-23", fichier:"" },
  { titre:"Géométrie dans l'espace",           niveau:"2bac-sm", type:"cours", chapitre:"Géométrie",    pages:14, date:"2027-04-06", fichier:"" },
  { titre:"Dénombrement et probabilités",      niveau:"2bac-sm", type:"cours", chapitre:"Probabilités", pages:12, date:"2027-04-20", fichier:"" },

  { titre:"Série 1 — Limites et continuité",  niveau:"2bac-sm", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-09-15", fichier:"" },
  { titre:"Série 2 — Suites numériques",      niveau:"2bac-sm", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-10-13", fichier:"" },
  { titre:"Série 3 — Structures algébriques", niveau:"2bac-sm", type:"exercices", chapitre:"Algèbre",      pages:5, date:"2026-10-27", fichier:"" },
  { titre:"Série 4 — Nombres complexes",      niveau:"2bac-sm", type:"exercices", chapitre:"Algèbre",      pages:7, date:"2026-11-24", fichier:"" },
  { titre:"Série 5 — Calcul intégral",        niveau:"2bac-sm", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-02-16", fichier:"" },
  { titre:"Série 6 — Arithmétique dans ℤ",    niveau:"2bac-sm", type:"exercices", chapitre:"Arithmétique", pages:6, date:"2027-03-16", fichier:"" },
  { titre:"Série 7 — Probabilités",           niveau:"2bac-sm", type:"exercices", chapitre:"Probabilités", pages:5, date:"2027-04-27", fichier:"" },

  { titre:"Devoir surveillé n°1",           niveau:"2bac-sm", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-10-24", fichier:"" },
  { titre:"Devoir surveillé n°2",           niveau:"2bac-sm", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-12-12", fichier:"" },
  { titre:"Devoir surveillé n°3",           niveau:"2bac-sm", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-02-27", fichier:"" },
  { titre:"Examen national — corrigé",      niveau:"2bac-sm", type:"devoirs", chapitre:"Révision",   pages:9, date:"2027-05-15", fichier:"" },


  /* =================================================================
     1BAC SCIENCES EXPÉRIMENTALES
     ================================================================= */
  { titre:"Notion de logique",            niveau:"1bac-se", type:"cours", chapitre:"Logique",   pages:7,  date:"2026-09-10", fichier:"" },
  { titre:"Suites numériques",            niveau:"1bac-se", type:"cours", chapitre:"Analyse",   pages:10, date:"2026-10-05", fichier:"" },
  { titre:"Barycentre dans le plan",      niveau:"1bac-se", type:"cours", chapitre:"Géométrie", pages:8,  date:"2026-11-02", fichier:"" },
  { titre:"Produit scalaire dans le plan",niveau:"1bac-se", type:"cours", chapitre:"Géométrie", pages:9,  date:"2026-12-07", fichier:"" },
  { titre:"Limites d'une fonction",       niveau:"1bac-se", type:"cours", chapitre:"Analyse",   pages:11, date:"2027-01-18", fichier:"" },
  { titre:"Dérivation",                   niveau:"1bac-se", type:"cours", chapitre:"Analyse",   pages:12, date:"2027-02-15", fichier:"" },
  { titre:"Série 1 — Suites numériques",  niveau:"1bac-se", type:"exercices", chapitre:"Analyse",   pages:5, date:"2026-10-12", fichier:"" },
  { titre:"Série 2 — Produit scalaire",   niveau:"1bac-se", type:"exercices", chapitre:"Géométrie", pages:5, date:"2026-12-14", fichier:"" },
  { titre:"Devoir surveillé n°1",         niveau:"1bac-se", type:"devoirs",   chapitre:"Semestre 1",pages:3, date:"2026-10-26", fichier:"" },


  /* =================================================================
     1BAC SCIENCES MATHS
     ================================================================= */
  { titre:"Notion de logique",              niveau:"1bac-sm", type:"cours", chapitre:"Logique",   pages:9,  date:"2026-09-10", fichier:"" },
  { titre:"Suites numériques",              niveau:"1bac-sm", type:"cours", chapitre:"Analyse",   pages:12, date:"2026-10-05", fichier:"" },
  { titre:"Barycentre dans le plan",        niveau:"1bac-sm", type:"cours", chapitre:"Géométrie", pages:9,  date:"2026-11-02", fichier:"" },
  { titre:"Produit scalaire dans le plan",  niveau:"1bac-sm", type:"cours", chapitre:"Géométrie", pages:10, date:"2026-12-07", fichier:"" },
  { titre:"Limites et continuité",          niveau:"1bac-sm", type:"cours", chapitre:"Analyse",   pages:12, date:"2027-01-18", fichier:"" },
  { titre:"Dérivation",                     niveau:"1bac-sm", type:"cours", chapitre:"Analyse",   pages:13, date:"2027-02-15", fichier:"" },
  { titre:"Série 1 — Logique",              niveau:"1bac-sm", type:"exercices", chapitre:"Logique",    pages:5, date:"2026-09-17", fichier:"" },
  { titre:"Série 2 — Produit scalaire",     niveau:"1bac-sm", type:"exercices", chapitre:"Géométrie",  pages:6, date:"2026-12-14", fichier:"" },
  { titre:"Devoir surveillé n°1",           niveau:"1bac-sm", type:"devoirs",   chapitre:"Semestre 1", pages:3, date:"2026-10-26", fichier:"" },


  /* =================================================================
     TRONC COMMUN SCIENCES
     ================================================================= */
  { titre:"Les ensembles de nombres",       niveau:"tcs", type:"cours", chapitre:"Algèbre",   pages:8,  date:"2026-09-12", fichier:"" },
  { titre:"L'arithmétique dans ℕ",          niveau:"tcs", type:"cours", chapitre:"Algèbre",   pages:8,  date:"2026-10-03", fichier:"" },
  { titre:"Les ordres et les inéquations",  niveau:"tcs", type:"cours", chapitre:"Algèbre",   pages:9,  date:"2026-11-07", fichier:"" },
  { titre:"Généralités sur les fonctions",  niveau:"tcs", type:"cours", chapitre:"Analyse",   pages:11, date:"2027-01-16", fichier:"" },
  { titre:"Le produit scalaire",            niveau:"tcs", type:"cours", chapitre:"Géométrie", pages:9,  date:"2027-02-20", fichier:"" },
  { titre:"Série 1 — Ensembles de nombres", niveau:"tcs", type:"exercices", chapitre:"Algèbre",    pages:4, date:"2026-09-19", fichier:"" },
  { titre:"Devoir surveillé n°1",           niveau:"tcs", type:"devoirs",   chapitre:"Semestre 1", pages:3, date:"2026-10-24", fichier:"" },


  /* =================================================================
     COLLÈGE
     ================================================================= */
  { titre:"Développement et factorisation", niveau:"3apic", type:"cours", chapitre:"Algèbre",   pages:6, date:"2026-09-15", fichier:"" },
  { titre:"Théorème de Thalès",             niveau:"3apic", type:"cours", chapitre:"Géométrie", pages:6, date:"2026-10-12", fichier:"" },
  { titre:"Équations du 1er degré",         niveau:"3apic", type:"cours", chapitre:"Algèbre",   pages:5, date:"2026-11-09", fichier:"" },
  { titre:"Série — Théorème de Thalès",     niveau:"3apic", type:"exercices", chapitre:"Géométrie",  pages:4, date:"2026-10-19", fichier:"" },
  { titre:"Devoir surveillé n°1",           niveau:"3apic", type:"devoirs",   chapitre:"Semestre 1", pages:2, date:"2026-10-26", fichier:"" },

  { titre:"Les nombres rationnels",         niveau:"2apic", type:"cours", chapitre:"Algèbre",   pages:6, date:"2026-09-15", fichier:"" },
  { titre:"Le théorème de Pythagore",       niveau:"2apic", type:"cours", chapitre:"Géométrie", pages:5, date:"2026-10-12", fichier:"" },
  { titre:"Devoir surveillé n°1",           niveau:"2apic", type:"devoirs", chapitre:"Semestre 1", pages:2, date:"2026-10-26", fichier:"" },

  { titre:"Les nombres décimaux",           niveau:"1apic", type:"cours", chapitre:"Algèbre",   pages:5, date:"2026-09-15", fichier:"" },
  { titre:"Les droites remarquables",       niveau:"1apic", type:"cours", chapitre:"Géométrie", pages:5, date:"2026-10-12", fichier:"" },
  { titre:"Devoir surveillé n°1",           niveau:"1apic", type:"devoirs", chapitre:"Semestre 1", pages:2, date:"2026-10-26", fichier:"" }

];


/* ---------------------------------------------------------------------
   5) PARCOURS  (section « Mon parcours » de l'accueil)
   --------------------------------------------------------------------- */
const CHIFFRES = [
  { nb:"8",     txt:"ans d'enseignement" },
  { nb:"5000+", txt:"élèves accompagnés" },
  { nb:"3",     txt:"livres de maths écrits" },
  { nb:"10+",   txt:"diplômes & formations" }
];

const PARCOURS = [
  { titre:"Licence en Sciences Physiques",
    sous:"Université Dhar El Mahraz, Fès — option Électronique" },
  { titre:"Tous les niveaux, jusqu'à Bac+2",
    sous:"Collège, lycée, classes supérieures — écoles privées et centres" },
  { titre:"3 livres de mathématiques",
    sous:"Programme du lycée, avec un focus sur la 2ème année du bac" },
  { titre:"10 diplômes en UX/UI & Graphic Design",
    sous:"Certifications Adobe — d'où la clarté visuelle de mes documents" },
  { titre:"Formations en didactique",
    sous:"Pédagogie, gestion de classe et transmission" },
  { titre:"Développement, IA & prompting",
    sous:"Appliqués au domaine de l'éducation" }
];

const LANGUES = [
  { nom:"Arabe",    niveau:"Natif",  pct:99 },
  { nom:"Anglais",  niveau:"C1",     pct:95 },
  { nom:"Français", niveau:"C1",     pct:94 },
  { nom:"Allemand", niveau:"A2",     pct:35 }
];


/* ---------------------------------------------------------------------
   6) INFOS DU SITE
   --------------------------------------------------------------------- */
const SITE = {
  nom:       "L'Hack Des Maths",
  prof:      "Abdellah Tahar",
  role:      "Enseignant de mathématiques",
  centre:    "Centre Pascal",
  email:     "profabdellahtahar@gmail.com",
  tel:       "0664905542",                                        // affiché
  whatsapp:  "212664905542",                                      // international, sans le +
  instagram: "https://www.instagram.com/prof_abdellah_maths/",
  instaNom:  "@prof_abdellah_maths",
  youtube:   "https://www.youtube.com/@Prof_abdellah_maths",
  ytNom:     "@Prof_abdellah_maths"
};
