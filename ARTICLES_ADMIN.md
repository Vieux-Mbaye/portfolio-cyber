# Articles et Administration

Le portfolio contient maintenant une section articles :

```txt
/articles
/articles/nom-de-l-article
```

Les articles sont stockés ici :

```txt
src/content/articles/
```

Les images, GIF et médias envoyés depuis l’admin seront stockés ici :

```txt
public/uploads/
```

---

## Écrire un article à la main

Créer un fichier Markdown :

```txt
src/content/articles/mon-article.md
```

Exemple :

```md
---
title: "Titre de l’article"
description: "Description courte pour la page article et le SEO."
publishDate: 2026-07-19
language: "fr"
tags: ["SOC", "SOAR", "Cybersécurité"]
cover: "/uploads/cover.png"
draft: false
---

Contenu de l’article.

## Titre de section

Texte en **gras**, texte en *italique*.

![Image](/uploads/image.png)
```

---

## Médias supportés

Markdown permet :

- texte ;
- titres ;
- gras ;
- italique ;
- listes ;
- liens ;
- images ;
- GIF ;
- blocs de code ;
- citations ;
- HTML intégré pour vidéo ou iframe.

Exemple image :

```md
![Architecture SOC](/uploads/soc-architecture.png)
```

Exemple GIF :

```md
![Démo](/uploads/demo.gif)
```

Exemple vidéo YouTube :

```html
<iframe width="100%" height="360" src="https://www.youtube.com/embed/ID_VIDEO" title="Vidéo" frameborder="0" allowfullscreen></iframe>
```

---

## Administration depuis le navigateur

Une interface Decap CMS est disponible ici :

```txt
/admin
```

Elle permet de créer et modifier les articles depuis le navigateur.

Sur Vercel, Decap CMS avec GitHub nécessite un fournisseur OAuth GitHub. La configuration du site est déjà prête dans :

```txt
public/admin/config.yml
```

Il reste à connecter l’authentification GitHub compatible Decap CMS pour autoriser uniquement le compte propriétaire à publier.

---

## Déploiement

Quand un article est ajouté ou modifié :

```bash
git add src/content/articles public/uploads
git commit -m "Add article"
git push origin main
```

Vercel redéploie ensuite automatiquement le site.

---

## Règles de sécurité éditoriale

Ne jamais publier :

- adresses IP réelles ;
- payloads exploitables ;
- noms de clients ;
- schémas internes sensibles ;
- secrets ;
- fichiers `.env` ;
- CV ou mémoire complet si non destinés au public ;
- configurations opérationnelles détaillées.

Préférer :

- analyse professionnelle ;
- contexte ;
- impact ;
- détection ;
- mitigation ;
- retour d’expérience ;
- bonnes pratiques défensives.
