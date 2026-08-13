/* =====================================================================
   L'HACK DES MATHS — BASE DE DONNÉES DU SITE
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter du contenu.
   Aucun autre fichier ne doit être touché.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) LES NIVEAUX
   ---------------------------------------------------------------------
   vedette:true  →  le niveau est mis en avant sur la page d'accueil
   --------------------------------------------------------------------- */
const NIVEAUX = [

  /* ========== SPÉCIALITÉ — mis en avant ========== */
  { slug:"2bac-pc",  nom:"2<sup>ème</sup> BAC", court:"2BAC PC",  cycle:"Lycée", sous:"Sciences Physiques", vedette:true },
  { slug:"2bac-svt", nom:"2<sup>ème</sup> BAC", court:"2BAC SVT", cycle:"Lycée", sous:"Sciences de la Vie et de la Terre", vedette:true },

  /* ========== AUTRES NIVEAUX ========== */
  { slug:"2bac-sma", nom:"2<sup>ème</sup> BAC", court:"2BAC SM-A", cycle:"Lycée", sous:"Sciences Maths A" },
  { slug:"2bac-smb", nom:"2<sup>ème</sup> BAC", court:"2BAC SM-B", cycle:"Lycée", sous:"Sciences Maths B" },
  { slug:"1bac-se",  nom:"1<sup>ère</sup> BAC", court:"1BAC SE",   cycle:"Lycée", sous:"Sciences Expérimentales" },
  { slug:"1bac-sm",  nom:"1<sup>ère</sup> BAC", court:"1BAC SM",   cycle:"Lycée", sous:"Sciences Mathématiques" },
  { slug:"tcs",      nom:"Tronc Commun",        court:"TCS",       cycle:"Lycée", sous:"Sciences" },

  { slug:"3apic",    nom:"3<sup>ème</sup> Année", court:"3APIC",   cycle:"Collège", sous:"Troisième année collège" },
  { slug:"2apic",    nom:"2<sup>ème</sup> Année", court:"2APIC",   cycle:"Collège", sous:"Deuxième année collège" },
  { slug:"1apic",    nom:"1<sup>ère</sup> Année", court:"1APIC",   cycle:"Collège", sous:"Première année collège" }
];


/* ---------------------------------------------------------------------
   2) LES TROIS RAYONS  (ne pas modifier)
   --------------------------------------------------------------------- */
const RAYONS = {
  cours: {
    id:"cours", titre:"Cours", sous:"Résumés & fiches de synthèse",
    desc:"Tout le programme condensé : définitions, propriétés, théorèmes et méthodes-clés.",
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
   3) LES DOCUMENTS
   ---------------------------------------------------------------------
   POUR PUBLIER UN DOCUMENT :
     1. mets le PDF dans le dossier  pdf/
     2. écris son nom dans le champ  fichier
     Exemple :  fichier:"pdf/2bac-pc-limites-cours.pdf"

   Tant que  fichier:""  le document s'affiche « Bientôt ».

   type : "cours" | "exercices" | "devoirs"
   --------------------------------------------------------------------- */
const DOCUMENTS = [

  /* =================================================================
     2BAC SCIENCES PHYSIQUES (PC)
     ================================================================= */

  /* ---- COURS : semestre 1 ---- */
  { titre:"Limites et continuité",                 niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S1",   pages:12, date:"2026-09-08", fichier:"" },
  { titre:"Dérivation et étude des fonctions",     niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S1",   pages:16, date:"2026-09-22", fichier:"" },
  { titre:"Suites numériques",                     niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S1",   pages:10, date:"2026-10-06", fichier:"" },
  { titre:"Fonctions primitives",                  niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S1",   pages:6,  date:"2026-10-20", fichier:"" },
  { titre:"Fonctions logarithmiques",              niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S1",   pages:11, date:"2026-11-03", fichier:"" },
  { titre:"Nombres complexes — partie 1",          niveau:"2bac-pc", type:"cours", chapitre:"Algèbre — S1",   pages:10, date:"2026-11-17", fichier:"" },

  /* ---- COURS : semestre 2 ---- */
  { titre:"Fonctions exponentielles",              niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S2",   pages:11, date:"2027-01-12", fichier:"" },
  { titre:"Nombres complexes — partie 2",          niveau:"2bac-pc", type:"cours", chapitre:"Algèbre — S2",   pages:9,  date:"2027-01-26", fichier:"" },
  { titre:"Calcul intégral",                       niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S2",   pages:13, date:"2027-02-09", fichier:"" },
  { titre:"Équations différentielles",             niveau:"2bac-pc", type:"cours", chapitre:"Analyse — S2",   pages:7,  date:"2027-02-23", fichier:"" },
  { titre:"Géométrie dans l'espace — produit scalaire", niveau:"2bac-pc", type:"cours", chapitre:"Géométrie — S2", pages:9, date:"2027-03-09", fichier:"" },
  { titre:"Géométrie dans l'espace — produit vectoriel", niveau:"2bac-pc", type:"cours", chapitre:"Géométrie — S2", pages:8, date:"2027-03-16", fichier:"" },
  { titre:"Dénombrement",                          niveau:"2bac-pc", type:"cours", chapitre:"Probabilités — S2", pages:6, date:"2027-03-30", fichier:"" },
  { titre:"Probabilités",                          niveau:"2bac-pc", type:"cours", chapitre:"Probabilités — S2", pages:9, date:"2027-04-13", fichier:"" },

  /* ---- EXERCICES ---- */
  { titre:"Série 1 — Limites et continuité",        niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-09-15", fichier:"" },
  { titre:"Série 2 — Dérivation et variations",     niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-09-29", fichier:"" },
  { titre:"Série 3 — Suites numériques",            niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-10-13", fichier:"" },
  { titre:"Série 4 — Fonctions logarithmiques",     niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-11-10", fichier:"" },
  { titre:"Série 5 — Nombres complexes",            niveau:"2bac-pc", type:"exercices", chapitre:"Algèbre",      pages:6, date:"2026-11-24", fichier:"" },
  { titre:"Série 6 — Fonctions exponentielles",     niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-01-19", fichier:"" },
  { titre:"Série 7 — Calcul intégral",              niveau:"2bac-pc", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-02-16", fichier:"" },
  { titre:"Série 8 — Géométrie dans l'espace",      niveau:"2bac-pc", type:"exercices", chapitre:"Géométrie",    pages:5, date:"2027-03-23", fichier:"" },
  { titre:"Série 9 — Dénombrement et probabilités", niveau:"2bac-pc", type:"exercices", chapitre:"Probabilités", pages:5, date:"2027-04-20", fichier:"" },

  /* ---- DEVOIRS ---- */
  { titre:"Devoir surveillé n°1 — Semestre 1",     niveau:"2bac-pc", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-10-24", fichier:"" },
  { titre:"Devoir libre n°1 — Semestre 1",         niveau:"2bac-pc", type:"devoirs", chapitre:"Semestre 1", pages:2, date:"2026-11-14", fichier:"" },
  { titre:"Devoir surveillé n°2 — Semestre 1",     niveau:"2bac-pc", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-12-12", fichier:"" },
  { titre:"Devoir surveillé n°1 — Semestre 2",     niveau:"2bac-pc", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-02-27", fichier:"" },
  { titre:"Devoir surveillé n°2 — Semestre 2",     niveau:"2bac-pc", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-04-24", fichier:"" },
  { titre:"Examen national 2025 — corrigé",        niveau:"2bac-pc", type:"devoirs", chapitre:"Révision",   pages:8, date:"2027-05-15", fichier:"" },
  { titre:"Examen blanc — sujet + corrigé",        niveau:"2bac-pc", type:"devoirs", chapitre:"Révision",   pages:9, date:"2027-05-25", fichier:"" },


  /* =================================================================
     2BAC SCIENCES DE LA VIE ET DE LA TERRE (SVT)
     ================================================================= */

  /* ---- COURS : semestre 1 ---- */
  { titre:"Limites et continuité",                 niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S1",   pages:12, date:"2026-09-08", fichier:"" },
  { titre:"Dérivation et étude des fonctions",     niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S1",   pages:16, date:"2026-09-22", fichier:"" },
  { titre:"Suites numériques",                     niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S1",   pages:10, date:"2026-10-06", fichier:"" },
  { titre:"Fonctions primitives",                  niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S1",   pages:6,  date:"2026-10-20", fichier:"" },
  { titre:"Fonctions logarithmiques",              niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S1",   pages:11, date:"2026-11-03", fichier:"" },
  { titre:"Nombres complexes — partie 1",          niveau:"2bac-svt", type:"cours", chapitre:"Algèbre — S1",   pages:10, date:"2026-11-17", fichier:"" },

  /* ---- COURS : semestre 2 ---- */
  { titre:"Fonctions exponentielles",              niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S2",   pages:11, date:"2027-01-12", fichier:"" },
  { titre:"Nombres complexes — partie 2",          niveau:"2bac-svt", type:"cours", chapitre:"Algèbre — S2",   pages:9,  date:"2027-01-26", fichier:"" },
  { titre:"Calcul intégral",                       niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S2",   pages:13, date:"2027-02-09", fichier:"" },
  { titre:"Équations différentielles",             niveau:"2bac-svt", type:"cours", chapitre:"Analyse — S2",   pages:7,  date:"2027-02-23", fichier:"" },
  { titre:"Géométrie dans l'espace — produit scalaire", niveau:"2bac-svt", type:"cours", chapitre:"Géométrie — S2", pages:9, date:"2027-03-09", fichier:"" },
  { titre:"Géométrie dans l'espace — produit vectoriel", niveau:"2bac-svt", type:"cours", chapitre:"Géométrie — S2", pages:8, date:"2027-03-16", fichier:"" },
  { titre:"Dénombrement",                          niveau:"2bac-svt", type:"cours", chapitre:"Probabilités — S2", pages:6, date:"2027-03-30", fichier:"" },
  { titre:"Probabilités",                          niveau:"2bac-svt", type:"cours", chapitre:"Probabilités — S2", pages:9, date:"2027-04-13", fichier:"" },

  /* ---- EXERCICES ---- */
  { titre:"Série 1 — Limites et continuité",        niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-09-15", fichier:"" },
  { titre:"Série 2 — Dérivation et variations",     niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-09-29", fichier:"" },
  { titre:"Série 3 — Suites numériques",            niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:5, date:"2026-10-13", fichier:"" },
  { titre:"Série 4 — Fonctions logarithmiques",     niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2026-11-10", fichier:"" },
  { titre:"Série 5 — Nombres complexes",            niveau:"2bac-svt", type:"exercices", chapitre:"Algèbre",      pages:6, date:"2026-11-24", fichier:"" },
  { titre:"Série 6 — Fonctions exponentielles",     niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-01-19", fichier:"" },
  { titre:"Série 7 — Calcul intégral",              niveau:"2bac-svt", type:"exercices", chapitre:"Analyse",      pages:6, date:"2027-02-16", fichier:"" },
  { titre:"Série 8 — Géométrie dans l'espace",      niveau:"2bac-svt", type:"exercices", chapitre:"Géométrie",    pages:5, date:"2027-03-23", fichier:"" },
  { titre:"Série 9 — Dénombrement et probabilités", niveau:"2bac-svt", type:"exercices", chapitre:"Probabilités", pages:5, date:"2027-04-20", fichier:"" },

  /* ---- DEVOIRS ---- */
  { titre:"Devoir surveillé n°1 — Semestre 1",     niveau:"2bac-svt", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-10-24", fichier:"" },
  { titre:"Devoir libre n°1 — Semestre 1",         niveau:"2bac-svt", type:"devoirs", chapitre:"Semestre 1", pages:2, date:"2026-11-14", fichier:"" },
  { titre:"Devoir surveillé n°2 — Semestre 1",     niveau:"2bac-svt", type:"devoirs", chapitre:"Semestre 1", pages:3, date:"2026-12-12", fichier:"" },
  { titre:"Devoir surveillé n°1 — Semestre 2",     niveau:"2bac-svt", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-02-27", fichier:"" },
  { titre:"Devoir surveillé n°2 — Semestre 2",     niveau:"2bac-svt", type:"devoirs", chapitre:"Semestre 2", pages:3, date:"2027-04-24", fichier:"" },
  { titre:"Examen national 2025 — corrigé",        niveau:"2bac-svt", type:"devoirs", chapitre:"Révision",   pages:8, date:"2027-05-15", fichier:"" },
  { titre:"Examen blanc — sujet + corrigé",        niveau:"2bac-svt", type:"devoirs", chapitre:"Révision",   pages:9, date:"2027-05-25", fichier:"" }

];


/* ---------------------------------------------------------------------
   4) INFOS DU SITE
   --------------------------------------------------------------------- */
const SITE = {
  nom:       "L'Hack Des Maths",
  prof:      "Prof. Abdellah Tahar",
  centre:    "Centre Pascal — Fès",
  email:     "profabdellahtahar@gmail.com",
  tel:       "0664905542",                                        // affiché
  whatsapp:  "212664905542",                                      // format international, sans le +
  instagram: "https://www.instagram.com/prof_abdellah_maths/",
  instaNom:  "@prof_abdellah_maths",
  youtube:   "https://www.youtube.com/@Lhack_Des_Maths",
  ytNom:     "@Lhack_Des_Maths"
};
