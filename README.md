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

## Mise a jour automatique des documents
Apres avoir ajoute le PDF et modifie `js/data.js`, enregistre les changements
sur la branche `main` de GitHub et attends la fin du deploiement Cloudflare Pages.
La nouvelle liste est chargee a chaque ouverture ou actualisation d'une page.
**Aucun numero de version a modifier dans les fichiers HTML pour les documents.**
Une page deja ouverte doit etre actualisee pour voir les nouvelles fiches.

Les quatre pages chargent `js/app.js?v=auto`, qui charge ensuite `js/data.js`
avec une URL unique avant de construire les menus, compteurs et documents.
`_headers` desactive le stockage des fichiers JavaScript et demande la
revalidation des pages HTML, y compris leurs URL sans extension.
Garde `?v=auto` tel quel : il sert a quitter l'ancienne URL du moteur.

Les images, PDF et styles conservent leur cache habituel. Pour remplacer un PDF
existant immediatement, utilise un nouveau nom et mets a jour son champ `fichier`.
Pour modifier le design CSS, augmente encore sa version `?v=7` dans les quatre
fichiers HTML. Cette version ne concerne pas l'ajout des documents.
