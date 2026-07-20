# Guide local, build et déploiement du portfolio

Ce guide explique quoi faire après une modification du portfolio en local : démarrer le site, vérifier le rendu, builder, committer, pousser vers GitHub et déclencher la mise à jour Vercel.

## 1. Aller dans le dossier du projet

```bash
cd ~/portfolio-cyber
```

Vérifier que vous êtes bien dans le bon projet :

```bash
pwd
```

Vous devez voir un chemin proche de :

```bash
/home/kakashi_/portfolio-cyber
```

## 2. Vérifier l’état Git avant de travailler

```bash
git status
```

Cette commande permet de voir :

- les fichiers modifiés ;
- les fichiers non suivis ;
- la branche actuelle ;
- si le dépôt local est à jour avec GitHub.

Avant de commencer une nouvelle modification, il est préférable d’avoir un état propre ou de savoir exactement quels fichiers sont déjà modifiés.

## 3. Récupérer la dernière version depuis GitHub

Avant de modifier ou avant de pousser, récupérer les changements distants :

```bash
git pull --rebase origin main
```

Pourquoi :

- éviter les conflits ;
- récupérer les articles créés depuis l’administration Decap CMS ;
- garder votre dépôt local synchronisé avec GitHub.

Si Git affiche des conflits, il faut les résoudre avant de continuer.

## 4. Installer les dépendances si nécessaire

À faire après un clone du projet, ou si `node_modules` n’existe pas :

```bash
npm install
```

Ce projet utilise Astro, React, Tailwind CSS et Framer Motion.

## 5. Démarrer le site en local

```bash
npm run dev
```

Astro affiche ensuite une URL locale, souvent :

```bash
http://localhost:4321/
```

Si le port `4321` est déjà utilisé, Astro peut proposer un autre port, par exemple :

```bash
http://localhost:4322/
```

Ouvrir cette URL dans le navigateur pour voir le site.

## 6. Tester le site localement

À vérifier après une modification :

- la page d’accueil ;
- la version mobile avec l’inspecteur du navigateur ;
- le menu mobile ;
- les sections À propos, Expérience, Projets et Contact ;
- la page Articles ;
- une page article individuelle ;
- le changement français/anglais ;
- le formulaire de contact ;
- les images ;
- l’absence d’informations sensibles.

Pour les articles :

```bash
http://localhost:4321/articles/
```

ou selon le port affiché :

```bash
http://localhost:4322/articles/
```

Pour l’administration Decap CMS :

```bash
http://localhost:4321/admin/
```

ou :

```bash
http://localhost:4322/admin/
```

## 7. Arrêter le serveur local

Dans le terminal où `npm run dev` tourne, appuyer sur :

```bash
CTRL + C
```

## 8. Builder le site

Avant de pousser vers GitHub, toujours lancer :

```bash
npm run build
```

Cette commande vérifie que le site peut être généré en version production.

Si le build réussit, vous verrez une sortie avec :

```bash
[build] Complete!
```

Si le build échoue, il faut corriger l’erreur avant de faire un commit.

## 9. Prévisualiser le build localement

Après un build réussi, vous pouvez tester la version générée :

```bash
npm run preview
```

Astro affiche une URL locale. Ouvrir cette URL pour vérifier la version production.

## 10. Voir les fichiers modifiés

```bash
git status
```

Pour voir précisément les changements :

```bash
git diff
```

Pour voir les changements déjà ajoutés au commit :

```bash
git diff --staged
```

## 11. Ajouter les fichiers au commit

Ajouter tous les fichiers modifiés :

```bash
git add .
```

Ou ajouter seulement certains fichiers :

```bash
git add src/components/ContactSection.jsx src/styles/global.css
```

Attention : ne pas ajouter des fichiers sensibles comme CV privé, mémoire complet, captures contenant des informations internes, clés, secrets ou fichiers confidentiels.

Vérifier après `git add` :

```bash
git status
```

## 12. Créer un commit

```bash
git commit -m "Description courte de la modification"
```

Exemples :

```bash
git commit -m "Improve mobile rendering"
git commit -m "Update cybersecurity portfolio content"
git commit -m "Add article reading layout"
```

Un bon message de commit doit expliquer ce qui change, pas seulement dire “update”.

## 13. Pousser vers GitHub

Avant de pousser, refaire par sécurité :

```bash
git pull --rebase origin main
```

Puis pousser :

```bash
git push origin main
```

Si le push réussit, GitHub reçoit les changements.

## 14. Déploiement Vercel

Le site Vercel est connecté au dépôt GitHub :

```bash
https://github.com/Vieux-Mbaye/portfolio-cyber
```

Après un push sur `main`, Vercel redéploie automatiquement :

```bash
https://vndour.vercel.app/
```

Attendre généralement 1 à 3 minutes.

Si le site semble ne pas changer :

- attendre un peu ;
- rafraîchir avec `CTRL + F5` ;
- tester en navigation privée ;
- vider le cache du navigateur ;
- vérifier le tableau de bord Vercel.

## 15. Workflow complet recommandé

```bash
cd ~/portfolio-cyber
git status
git pull --rebase origin main
npm install
npm run dev
```

Faire les modifications, tester dans le navigateur, puis :

```bash
npm run build
git status
git add .
git commit -m "Votre message de commit"
git pull --rebase origin main
git push origin main
```

## 16. Créer un article localement

Les articles sont dans :

```bash
src/content/articles/
```

Créer un fichier Markdown :

```bash
src/content/articles/mon-article.md
```

Exemple minimal :

```markdown
---
title: "Titre de l’article"
description: "Courte description de l’article."
publishDate: 2026-07-20
updatedDate: 2026-07-20
language: "fr"
tags:
  - SOC
  - SOAR
  - Cybersécurité
cover: "/uploads/image.png"
draft: false
---

Contenu de l’article ici.
```

Après création :

```bash
npm run build
git add src/content/articles/mon-article.md
git commit -m "Add new cybersecurity article"
git pull --rebase origin main
git push origin main
```

## 17. Ajouter une image pour un article

Mettre l’image dans :

```bash
public/uploads/
```

Exemple :

```bash
public/uploads/schema-soc.png
```

Dans l’article Markdown :

```markdown
![Schéma SOC](/uploads/schema-soc.png)
```

Puis :

```bash
npm run build
git add public/uploads/schema-soc.png src/content/articles/mon-article.md
git commit -m "Add article image"
git pull --rebase origin main
git push origin main
```

## 18. Utiliser l’administration Decap CMS

Sur le site déployé :

```bash
https://vndour.vercel.app/admin/
```

Utiliser GitHub pour se connecter.

Quand vous publiez un article depuis l’admin, Decap CMS crée un commit directement sur GitHub. Ensuite, sur votre machine locale, il faut récupérer ce changement :

```bash
cd ~/portfolio-cyber
git pull --rebase origin main
```

## 19. Formulaire de contact

Le formulaire fonctionne de deux façons :

- si EmailJS est configuré dans Vercel, le message est envoyé directement ;
- sinon, le site ouvre l’application mail du visiteur avec le message préparé.

Pour l’envoi automatique EmailJS, configurer ces variables dans Vercel :

```bash
PUBLIC_EMAILJS_SERVICE_ID
PUBLIC_EMAILJS_TEMPLATE_ID
PUBLIC_EMAILJS_USER_ID
```

Sans ces variables, le fallback `mailto:` reste normal.

## 20. Commandes utiles Git

Voir la branche :

```bash
git branch
```

Voir l’historique :

```bash
git log --oneline --decorate -10
```

Voir le dépôt distant :

```bash
git remote -v
```

Voir les changements d’un fichier :

```bash
git diff src/components/CyberHero.jsx
```

Annuler un fichier non ajouté au commit :

```bash
git restore chemin/du/fichier
```

Attention : cette commande supprime les modifications locales du fichier ciblé.

## 21. Règles de sécurité

Ne pas publier :

- clés API ;
- mots de passe ;
- fichiers `.env` ;
- adresses IP internes ;
- payloads offensifs exploitables ;
- noms de clients ;
- captures contenant des informations sensibles ;
- CV ou mémoire complet si vous ne voulez pas les rendre publics.

Avant chaque commit :

```bash
git status
```

Et vérifier la liste des fichiers ajoutés.

## 22. Résumé rapide

Pour travailler :

```bash
git pull --rebase origin main
npm run dev
```

Pour vérifier :

```bash
npm run build
```

Pour publier :

```bash
git add .
git commit -m "Message clair"
git pull --rebase origin main
git push origin main
```

