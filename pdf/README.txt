DOSSIER PDF
===========

1. Depose ton fichier ici, par exemple :
   pdf/2bac-exponentielle-resume.pdf
   pdf/2bac-exponentielle-exercices.pdf

2. Ouvre js/data.js, trouve le document, remplis "fichier" et "poids" :

   { titre:'Fonction exponentielle', niveau:'2bac', symbole:'e^x',
     type:'resume',
     resume:"...", pages:4,
     fichier:'pdf/2bac-exponentielle-resume.pdf',
     poids:'820 Ko' }

3. Le bouton "Telecharger" s'active tout seul.
   Tant que "fichier" est vide, la fiche s'affiche en "Bientot".

LE CHAMP "type" DECIDE DE LA PARTIE :
   type:'resume'      -> partie RESUMES DE COURS
   type:'exercices'   -> partie EXERCICES
   type:'controle'    -> partie CONTROLES & FORMULAIRES
   type:'formulaire'  -> idem

Nomme tes fichiers en minuscules, sans accents ni espaces :
   niveau-chapitre-type.pdf
