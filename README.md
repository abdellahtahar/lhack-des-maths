# L'Hack Des Maths — Le Cahier

Site officiel d'**Abdellah Tahar**, professeur de mathématiques à Fès.
Cours, exercices corrigés, contrôles et formulaires en PDF — du collège au baccalauréat.

Site statique : HTML, CSS et JavaScript. Aucun build, aucune dépendance.

---

## Le concept

Le site est un **cahier**. La page d'accueil s'ouvre littéralement : la couverture
pivote et révèle la page intérieure. Le quadrillage, le trait de marge rouge et les
annotations manuscrites reviennent partout — c'est l'identité visuelle du site.

---

## Structure

```
.
├── index.html            Accueil (cahier, niveaux, aperçu, méthode, qui suis-je, contact)
├── bibliotheque.html     Tous les PDF (onglets par niveau + recherche)
├── css/style.css         Design system complet
├── js/
│   ├── data.js           ⭐ TOUS LES DOCUMENTS SONT ICI
│   └── app.js            Cahier, navigation, animations, filtres
├── assets/
│   ├── prof.jpg          Portrait (section « Qui suis-je »)
│   └── prof-carre.jpg    Portrait carré (avatar + partage réseaux)
├── pdf/                  Tes fichiers PDF
├── favicon.svg · site.webmanifest · robots.txt · sitemap.xml · _headers
```

---

## Ajouter un document PDF

**Deux étapes, c'est tout.**

1. Dépose ton fichier dans `pdf/`, par exemple `pdf/2bac-exponentielle-cours.pdf`
2. Ouvre `js/data.js` et remplis `fichier` + `poids` :

```js
{
  titre:'Fonction exponentielle — Cours complet',
  niveau:'2bac',                 // '2bac' | '1bac' | 'tc' | 'college'
  symbole:'eˣ',                  // s'affiche sur la vignette
  type:'cours',                  // 'cours' | 'exercices' | 'controle' | 'formulaire'
  resume:"Définition, propriétés, limites et étude de fonctions.",
  pages:12,
  fichier:'pdf/2bac-exponentielle-cours.pdf',
  poids:'1,2 Mo'
}
```

Le bouton « Télécharger » s'active automatiquement. Tant que `fichier` reste vide
(`''`), la fiche s'affiche en **« Bientôt »** — pratique pour annoncer un document
avant qu'il soit prêt.

Pour ajouter un document qui n'existe pas encore dans la liste, copie un bloc
complet et modifie-le. La grille, les onglets et les compteurs se mettent à jour seuls.

Nomme tes fichiers en minuscules, sans accents ni espaces : `niveau-chapitre-type.pdf`

---

## Palette

| Rôle | Hex | D'où ça vient |
|---|---|---|
| Encre | `#141B34` | le bleu-noir du stylo plume |
| Cobalt | `#2F4BFF` | le stylo bille bleu |
| Lime | `#C6F24E` | le surligneur |
| Rouge | `#E8464B` | le trait de marge et les corrections |
| Papier | `#FBFAF6` | la page |

Polices : **Space Grotesk** (titres), **Inter** (texte), **Caveat** (annotations
manuscrites), **JetBrains Mono** (étiquettes).

---

## Mettre en ligne sur GitHub

```bash
git init
git add .
git commit -m "Nouveau site L'Hack Des Maths"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/lhack-des-maths.git
git push -u origin main
```

**GitHub Pages :** Settings → Pages → Source : `main` / `/ (root)`
**Cloudflare Pages :** Connect to Git, commande de build vide, dossier de sortie `/`

---

## À personnaliser avant la mise en ligne

- [ ] `contact@lhackdesmaths.com` → ton vraie adresse (dans `index.html` et `bibliotheque.html`)
- [ ] `https://wa.me/212600000000` → ton vrai numéro WhatsApp
- [ ] `lhackdesmaths.com` → ton vrai domaine (`canonical`, balises `og:`, `robots.txt`, `sitemap.xml`)
- [ ] Déposer les premiers PDF dans `pdf/`

---

## Accessibilité & performance

Contrastes conformes, navigation clavier avec focus visible, lien d'évitement,
`prefers-reduced-motion` respecté (le cahier s'ouvre sans animation),
images dimensionnées, aucune dépendance JavaScript externe.
