# L'Hack Des Maths — Le Cahier

Site statique (HTML / CSS / JS, sans framework, sans build).

## Ajouter un document
1. Mets ton PDF dans le dossier `docs/`
2. Ouvre `js/data.js` et ajoute une ligne dans `DOCUMENTS` :

```js
{ titre:"Limites & continuité", niveau:"2bac-sma", type:"cours",
  chapitre:"Analyse", pages:14, date:"2026-09-05",
  fichier:"docs/2bac-sma-limites.pdf" },
```

- `niveau` = un `slug` de la liste `NIVEAUX`
- `type`   = `"cours"` | `"exercices"` | `"devoirs"`
- `fichier` vide `""` → le document s'affiche comme « Bientôt »

## Modifier les contacts
Tout est en bas de `js/data.js`, objet `SITE`.

## Mise en ligne (GitHub Pages)
Pousse le dossier tel quel. Le fichier `.nojekyll` est déjà présent.
