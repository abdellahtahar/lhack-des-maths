# L'Hack Des Maths — abdellahtahar.com

Site statique (HTML / CSS / JS, sans framework, sans build).
Specialite : **2eme BAC Sciences Physiques & SVT**.

## Structure
```
index.html          -> accueil
niveau.html         -> ecran de choix Cours / Exercices / Devoirs
bibliotheque.html   -> liste des documents + telechargement
css/style.css       -> tout le design
js/data.js          -> LE SEUL fichier de contenu a modifier
js/app.js           -> moteur (ne pas toucher)
assets/             -> images
pdf/                -> les documents PDF
```

## Publier un document
1. Mets le PDF dans `pdf/`
2. Dans `js/data.js`, remplis le champ `fichier` de la ligne correspondante :

```js
{ titre:"Limites et continuite", niveau:"2bac-pc", type:"cours",
  chapitre:"Analyse - S1", pages:12, date:"2026-09-08",
  fichier:"pdf/2bac-pc-limites-cours.pdf" },
```

Tant que `fichier:""`, le document s'affiche en « Bientot ».

## Mettre un niveau en avant sur l'accueil
Ajoute `vedette:true` dans sa ligne de `NIVEAUX`.

## Contacts
Objet `SITE` en bas de `js/data.js`.

## Important : le cache
Les fichiers CSS et JS sont appeles avec `?v=5`.
**A chaque fois que tu modifies `css/style.css` ou `js/*.js`, incremente ce numero**
(`?v=6`, `?v=7`, ...) dans les 3 fichiers HTML — sinon les visiteurs continuent
de voir l'ancienne version gardee en cache par leur navigateur.
