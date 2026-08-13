DOSSIER PDF
===========

1. Depose ton fichier ici, par exemple :
   pdf/2bac-pc-limites-cours.pdf

2. Ouvre js/data.js, trouve la ligne du document et remplis "fichier" :

   { titre:"Limites et continuite", niveau:"2bac-pc", type:"cours",
     chapitre:"Analyse - S1", pages:12, date:"2026-09-08",
     fichier:"pdf/2bac-pc-limites-cours.pdf" },

3. Le bouton "PDF" s'active tout seul.
   Tant que "fichier" est vide, la fiche s'affiche en "Bientot".

LE CHAMP "type" DECIDE DU RAYON :
   type:"cours"      -> rayon COURS
   type:"exercices"  -> rayon EXERCICES
   type:"devoirs"    -> rayon DEVOIRS

LE CHAMP "niveau" (slug pris dans NIVEAUX) :
   2bac-pc  2bac-svt  2bac-sma  2bac-smb
   1bac-se  1bac-sm   tcs
   3apic    2apic     1apic

Nomme tes fichiers en minuscules, sans accents ni espaces :
   niveau-chapitre-type.pdf
