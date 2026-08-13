/* =====================================================================
   L'HACK DES MATHS — BASE DE DONNÉES DU SITE
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter du contenu.
   Aucun autre fichier ne doit être touché.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) LES NIVEAUX
   --------------------------------------------------------------------- */
const NIVEAUX = [
  /* ---------- COLLÈGE ---------- */
  { slug: "1apic",   nom: "1<sup>ère</sup> Année",     court: "1APIC",  cycle: "Collège", sous: "Collège — 1AC" },
  { slug: "2apic",   nom: "2<sup>ème</sup> Année",     court: "2APIC",  cycle: "Collège", sous: "Collège — 2AC" },
  { slug: "3apic",   nom: "3<sup>ème</sup> Année",     court: "3APIC",  cycle: "Collège", sous: "Collège — 3AC" },

  /* ---------- TRONC COMMUN ---------- */
  { slug: "tcs",     nom: "Tronc Commun",              court: "TCS",    cycle: "Lycée",   sous: "Sciences" },
  { slug: "tcsf",    nom: "Tronc Commun",              court: "TCS-F",  cycle: "Lycée",   sous: "Sciences — option française" },

  /* ---------- 1ère BAC ---------- */
  { slug: "1bac-sm", nom: "1<sup>ère</sup> BAC",       court: "1BAC SM", cycle: "Lycée",  sous: "Sciences Mathématiques" },
  { slug: "1bac-se", nom: "1<sup>ère</sup> BAC",       court: "1BAC SE", cycle: "Lycée",  sous: "Sciences Expérimentales" },

  /* ---------- 2ème BAC ---------- */
  { slug: "2bac-sma", nom: "2<sup>ème</sup> BAC",      court: "2BAC SM-A", cycle: "Lycée", sous: "Sciences Maths A" },
  { slug: "2bac-smb", nom: "2<sup>ème</sup> BAC",      court: "2BAC SM-B", cycle: "Lycée", sous: "Sciences Maths B" },
  { slug: "2bac-pc",  nom: "2<sup>ème</sup> BAC",      court: "2BAC PC",   cycle: "Lycée", sous: "Sciences Physiques" },
  { slug: "2bac-svt", nom: "2<sup>ème</sup> BAC",      court: "2BAC SVT",  cycle: "Lycée", sous: "Sciences de la Vie et de la Terre" }
];


/* ---------------------------------------------------------------------
   2) LES TROIS RAYONS  (ne pas modifier)
   --------------------------------------------------------------------- */
const RAYONS = {
  cours: {
    id: "cours",
    titre: "Cours",
    sous: "Résumés & fiches de synthèse",
    desc: "Tout le programme condensé : définitions, propriétés, théorèmes et méthodes-clés.",
    icone: "book",
    accent: "violet"
  },
  exercices: {
    id: "exercices",
    titre: "Exercices",
    sous: "Séries corrigées",
    desc: "Des séries progressives, de l'application directe jusqu'au niveau concours.",
    icone: "pen",
    accent: "jaune"
  },
  devoirs: {
    id: "devoirs",
    titre: "Devoirs",
    sous: "Contrôles & examens",
    desc: "Devoirs surveillés, devoirs libres et sujets d'examen national avec corrections.",
    icone: "clock",
    accent: "rouge"
  }
};


/* ---------------------------------------------------------------------
   3) LES DOCUMENTS
   ---------------------------------------------------------------------
   MODÈLE À COPIER :

   {
     titre:   "Limites et continuité",
     niveau:  "2bac-sma",              // slug pris dans la liste NIVEAUX
     type:    "cours",                 // "cours" | "exercices" | "devoirs"
     chapitre:"Analyse",
     pages:   12,
     date:    "2026-09-01",
     fichier: "docs/2bac-sma-limites.pdf"   // "" = affiché comme « Bientôt »
   },
   --------------------------------------------------------------------- */
const DOCUMENTS = [

  /* ============ 2BAC SM-A ============ */
  { titre: "Limites & continuité",              niveau: "2bac-sma", type: "cours",     chapitre: "Analyse",   pages: 14, date: "2026-09-05", fichier: "" },
  { titre: "Dérivation & étude de fonctions",   niveau: "2bac-sma", type: "cours",     chapitre: "Analyse",   pages: 18, date: "2026-09-20", fichier: "" },
  { titre: "Suites numériques",                 niveau: "2bac-sma", type: "cours",     chapitre: "Analyse",   pages: 11, date: "2026-10-02", fichier: "" },
  { titre: "Série 1 — Limites",                 niveau: "2bac-sma", type: "exercices", chapitre: "Analyse",   pages: 6,  date: "2026-09-12", fichier: "" },
  { titre: "Série 2 — Continuité & TVI",        niveau: "2bac-sma", type: "exercices", chapitre: "Analyse",   pages: 8,  date: "2026-09-25", fichier: "" },
  { titre: "Devoir surveillé n°1",              niveau: "2bac-sma", type: "devoirs",   chapitre: "Semestre 1",pages: 4,  date: "2026-10-15", fichier: "" },
  { titre: "Examen national — corrigé",         niveau: "2bac-sma", type: "devoirs",   chapitre: "Révision",  pages: 10, date: "2026-06-20", fichier: "" },

  /* ============ 2BAC PC ============ */
  { titre: "Limites & continuité",              niveau: "2bac-pc",  type: "cours",     chapitre: "Analyse",   pages: 10, date: "2026-09-05", fichier: "" },
  { titre: "Nombres complexes",                 niveau: "2bac-pc",  type: "cours",     chapitre: "Algèbre",   pages: 12, date: "2026-11-04", fichier: "" },
  { titre: "Série 1 — Dérivation",              niveau: "2bac-pc",  type: "exercices", chapitre: "Analyse",   pages: 5,  date: "2026-09-18", fichier: "" },
  { titre: "Devoir libre n°1",                  niveau: "2bac-pc",  type: "devoirs",   chapitre: "Semestre 1",pages: 3,  date: "2026-10-10", fichier: "" },

  /* ============ 1BAC SM ============ */
  { titre: "Barycentre dans le plan",           niveau: "1bac-sm",  type: "cours",     chapitre: "Géométrie", pages: 9,  date: "2026-09-14", fichier: "" },
  { titre: "Série — Produit scalaire",          niveau: "1bac-sm",  type: "exercices", chapitre: "Géométrie", pages: 6,  date: "2026-10-01", fichier: "" },
  { titre: "Devoir surveillé n°1",              niveau: "1bac-sm",  type: "devoirs",   chapitre: "Semestre 1",pages: 3,  date: "2026-10-20", fichier: "" },

  /* ============ TRONC COMMUN ============ */
  { titre: "Arithmétique dans ℕ",               niveau: "tcs",      type: "cours",     chapitre: "Algèbre",   pages: 8,  date: "2026-09-10", fichier: "" },
  { titre: "Série — Ensembles de nombres",      niveau: "tcs",      type: "exercices", chapitre: "Algèbre",   pages: 4,  date: "2026-09-22", fichier: "" },

  /* ============ COLLÈGE ============ */
  { titre: "Théorème de Thalès",                niveau: "3apic",    type: "cours",     chapitre: "Géométrie", pages: 6,  date: "2026-09-15", fichier: "" },
  { titre: "Série — Équations du 1er degré",    niveau: "3apic",    type: "exercices", chapitre: "Algèbre",   pages: 4,  date: "2026-09-28", fichier: "" },
  { titre: "Devoir surveillé n°1",              niveau: "3apic",    type: "devoirs",   chapitre: "Semestre 1",pages: 2,  date: "2026-10-18", fichier: "" }

];


/* ---------------------------------------------------------------------
   4) INFOS DU SITE
   --------------------------------------------------------------------- */
const SITE = {
  nom:       "L'Hack Des Maths",
  prof:      "Prof. Abdellah Tahar",
  centre:    "Centre Pascal — Fès",
  email:     "contact@lhackdesmaths.com",
  whatsapp:  "212600000000",
  youtube:   "#",
  instagram: "#"
};
