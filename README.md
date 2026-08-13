# L'Hack Des Maths — abdellahtahar.com

Site statique (HTML / CSS / JS, sans framework, sans build).

## Structure
```
index.html          -> accueil : choix du CYCLE (College / Lycee)
niveaux.html        -> ANNEE (?c=Lycee) puis FILIERE (?c=Lycee&a=2bac)
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
{ titre:"Limites et continuite", niveau:"2bac-pc-svt", type:"cours",
  chapitre:"Analyse", pages:12, date:"2026-09-08",
  fichier:"pdf/2bac-limites-cours.pdf" },
```

Tant que `fichier:""`, le document s'affiche en « Bientot ».

## Le parcours de l'eleve
```
Accueil -> Cycle -> Annee -> Filiere -> Cours/Exercices/Devoirs -> PDF
```
Si une annee n'a qu'une seule filiere (Tronc Commun, college),
l'ecran des filieres est saute automatiquement.

Dans js/data.js, chaque niveau porte :
   cycle     "College" ou "Lycee"
   annee     identifiant de l'annee (ex. "2bac")
   anneeNom  le titre affiche sur la carte de l'annee
   filiere   le titre affiche sur la carte de la filiere

## Les niveaux (slugs)
```
2bac-pc-svt   2bac-sm   1bac-se   1bac-sm   tcs
3apic   2apic   1apic
```
Le champ `cycle` ("College" ou "Lycee") decide dans quel groupe le niveau apparait.

## Le champ date
Il ne s'affiche pas sur le site : il sert uniquement a ranger les documents
dans l'ordre du programme (septembre -> examen national).

## Contacts
Objet `SITE` en bas de `js/data.js`.

## Important : le cache
Les fichiers CSS et JS sont appeles avec `?v=7`.
**A chaque fois que tu modifies `css/style.css` ou `js/*.js`, incremente ce numero**
(`?v=8`, `?v=9`, ...) dans les 3 fichiers HTML — sinon les visiteurs continuent
de voir l'ancienne version gardee en cache par leur navigateur.
