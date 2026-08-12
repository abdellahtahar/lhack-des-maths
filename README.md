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
├── niveau.html           Écran de choix : Résumés / Exercices / Contrôles
├── bibliotheque.html     La liste, filtrable par niveau ET par partie
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

## Le parcours d'un élève

```
Accueil  →  clic sur « 2ème Bac »
         →  niveau.html?n=2bac      ÉCRAN DE CHOIX
                                     ┌─ Résumés de cours  (5)
                                     ├─ Exercices         (5)
                                     └─ Contrôles         (2)
         →  bibliotheque.html?niveau=2bac&partie=exercices
                                     la liste filtrée, prête à télécharger
```

L'élève ne voit jamais tout mélangé : il choisit d'abord son niveau,
puis ce dont il a besoin.

---

## Les deux parties

Pour chaque niveau, la bibliothèque est coupée en parties bien distinctes :

| Partie | Contenu | Repère visuel |
|---|---|---|
| **Résumés de cours** | L'essentiel du chapitre en 3–4 pages | badge lime |
| **Exercices** | Séries progressives corrigées | badge cobalt |
| **Contrôles & formulaires** | Devoirs surveillés, formulaires | badge rouge |

C'est le champ `type` d'un document qui décide **tout seul** dans quelle partie
il apparaît. Tu n'as rien d'autre à faire.

---

## Ajouter un document PDF

**Deux étapes, c'est tout.**

1. Dépose ton fichier dans `pdf/`, par exemple `pdf/2bac-exponentielle-resume.pdf`
2. Ouvre `js/data.js` et remplis `fichier` + `poids` :

```js
{
  titre:'Fonction exponentielle',
  niveau:'2bac',        // '2bac' | '1bac' | 'tc' | 'college'
  symbole:'eˣ',         // s'affiche sur la vignette
  type:'resume',        // 'resume' | 'exercices' | 'controle' | 'formulaire'
  resume:"Définition, propriétés, limites et dérivation — l'essentiel en 4 pages.",
  pages:4,
  fichier:'pdf/2bac-exponentielle-resume.pdf',
  poids:'820 Ko'
}
```

Le `type` place la fiche dans la bonne partie :
`resume` → Résumés de cours · `exercices` → Exercices · `controle` / `formulaire` → Contrôles & formulaires

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
