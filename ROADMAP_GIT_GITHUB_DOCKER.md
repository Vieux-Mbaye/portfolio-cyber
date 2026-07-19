# Roadmap Git, GitHub et Docker

Objectif : partir de zéro et devenir autonome, puis très solide, sur Git, GitHub et Docker.

Cette roadmap est pensée pour un profil cybersécurité / ingénieur SSI. Elle met l’accent sur la pratique, les erreurs réelles, les workflows professionnels et les usages utiles pour déployer, collaborer, versionner et conteneuriser des projets.

---

## 0. Vision Globale

### Git

Git est un outil de versioning. Il permet de suivre l’historique d’un projet, revenir en arrière, comparer des versions, travailler sur plusieurs branches et collaborer proprement.

### GitHub

GitHub est une plateforme qui héberge des dépôts Git. Elle ajoute la collaboration, les pull requests, les issues, les actions CI/CD, les releases, les discussions et l’intégration avec des outils comme Vercel.

### Docker

Docker permet d’exécuter une application dans un environnement isolé, reproductible et portable. Au lieu de dire “ça marche sur ma machine”, Docker permet de décrire précisément l’environnement d’exécution.

---

## Niveau 1 — Fondations Linux et Terminal

Durée recommandée : 1 semaine

### Objectifs

- Comprendre le terminal.
- Savoir naviguer dans les dossiers.
- Manipuler des fichiers.
- Comprendre les chemins relatifs et absolus.
- Être à l’aise avec les commandes de base.

### Commandes à maîtriser

```bash
pwd
ls
ls -la
cd
mkdir
touch
cp
mv
rm
cat
less
nano
code
```

### Exercices

1. Créer un dossier `training`.
2. Créer trois fichiers : `note.txt`, `todo.txt`, `config.txt`.
3. Créer un sous-dossier `archive`.
4. Déplacer `note.txt` dans `archive`.
5. Copier `todo.txt` vers `backup-todo.txt`.
6. Lire le contenu d’un fichier avec `cat`.
7. Modifier un fichier avec `nano`.

### Validation

Tu dois pouvoir expliquer :

- La différence entre `.` et `..`.
- La différence entre chemin relatif et chemin absolu.
- Pourquoi `rm -rf` est dangereux.

---

## Niveau 2 — Git Débutant

Durée recommandée : 1 à 2 semaines

### Objectifs

- Comprendre ce qu’est un dépôt Git.
- Suivre les changements d’un projet.
- Créer des commits propres.
- Comprendre le cycle `working directory → staging → commit`.

### Concepts

```txt
Working directory : fichiers modifiés localement
Staging area      : fichiers préparés pour le commit
Commit            : snapshot enregistré dans l’historique
Repository        : dépôt Git complet
```

### Commandes essentielles

```bash
git init
git status
git add fichier
git add .
git commit -m "message"
git log
git log --oneline
git diff
git diff --staged
```

### Exercice 1 — Premier dépôt

```bash
mkdir git-training
cd git-training
git init
touch README.md
git status
git add README.md
git commit -m "Initial commit"
```

### Exercice 2 — Comprendre les changements

1. Modifier `README.md`.
2. Lancer :

```bash
git status
git diff
```

3. Ajouter le fichier :

```bash
git add README.md
git diff --staged
```

4. Commit :

```bash
git commit -m "Update README"
```

### Bonnes pratiques de commit

Un bon commit doit être :

- petit ;
- clair ;
- cohérent ;
- réversible ;
- compréhensible dans l’historique.

Exemples :

```bash
git commit -m "Add contact section"
git commit -m "Fix project image paths"
git commit -m "Update portfolio metadata"
```

Mauvais exemples :

```bash
git commit -m "update"
git commit -m "final"
git commit -m "changes"
```

### Validation

Tu dois savoir expliquer :

- `git add`
- `git commit`
- `git status`
- `git diff`
- pourquoi il ne faut pas faire `git add .` sans vérifier.

---

## Niveau 3 — Git Intermédiaire

Durée recommandée : 2 semaines

### Objectifs

- Travailler avec des branches.
- Fusionner du travail.
- Résoudre des conflits.
- Annuler proprement des erreurs.

### Commandes

```bash
git branch
git branch nom-branche
git switch nom-branche
git switch -c nom-branche
git merge nom-branche
git restore fichier
git restore --staged fichier
git commit --amend
```

### Branches

Une branche permet de travailler sur une fonctionnalité sans casser la branche principale.

Exemple :

```bash
git switch -c feature/blog
```

Tu travailles, tu commits, puis tu reviens sur `main` :

```bash
git switch main
git merge feature/blog
```

### Exercice — Branches

1. Créer une branche `feature/about`.
2. Modifier un fichier.
3. Faire un commit.
4. Revenir sur `main`.
5. Fusionner la branche.

```bash
git switch -c feature/about
echo "About section" >> README.md
git add README.md
git commit -m "Add about section"
git switch main
git merge feature/about
```

### Exercice — Conflit volontaire

1. Créer une branche `feature-a`.
2. Modifier la même ligne dans un fichier.
3. Commit.
4. Revenir sur `main`.
5. Modifier cette même ligne différemment.
6. Commit.
7. Fusionner `feature-a`.
8. Résoudre le conflit.

### À comprendre

Un conflit ressemble à ceci :

```txt
<<<<<<< HEAD
Version actuelle
=======
Version venant de l’autre branche
>>>>>>> feature-a
```

Tu dois choisir quoi garder, supprimer les marqueurs, puis faire :

```bash
git add fichier
git commit
```

### Validation

Tu dois être capable de :

- créer une branche ;
- fusionner une branche ;
- résoudre un conflit simple ;
- annuler un fichier modifié ;
- retirer un fichier du staging.

---

## Niveau 4 — GitHub Débutant

Durée recommandée : 1 semaine

### Objectifs

- Comprendre `origin`.
- Pousser un projet sur GitHub.
- Récupérer un projet depuis GitHub.
- Comprendre `push`, `pull`, `clone`, `fetch`.

### Commandes

```bash
git remote -v
git remote add origin git@github.com:user/repo.git
git push origin main
git pull origin main
git clone git@github.com:user/repo.git
git fetch origin
```

### Concepts

```txt
local  : ton ordinateur
remote : GitHub
origin : nom par défaut du remote principal
main   : branche principale
```

### Exercice

1. Créer un dépôt sur GitHub.
2. Créer un projet local.
3. Connecter le remote.
4. Pousser le projet.

```bash
git remote add origin git@github.com:ton-compte/mon-projet.git
git branch -M main
git push -u origin main
```

### Erreur fréquente

```bash
origin git@github.com:user/repo.git
```

Ceci est faux. `origin` n’est pas une commande.

Pour voir le remote :

```bash
git remote -v
```

### Validation

Tu dois savoir :

- créer un repo GitHub ;
- connecter un repo local ;
- pousser avec `git push`;
- récupérer avec `git pull`;
- expliquer ce qu’est `origin`.

---

## Niveau 5 — GitHub Professionnel

Durée recommandée : 2 semaines

### Objectifs

- Utiliser les Pull Requests.
- Travailler proprement avec issues.
- Relire du code.
- Comprendre les workflows d’équipe.

### Workflow professionnel

```bash
git switch main
git pull origin main
git switch -c feature/new-section
```

Tu travailles :

```bash
git add src
git commit -m "Add new portfolio section"
git push origin feature/new-section
```

Puis sur GitHub :

1. Ouvrir une Pull Request.
2. Relire les changements.
3. Corriger si nécessaire.
4. Merger vers `main`.

### Issues

Une issue sert à suivre une tâche :

```txt
Titre : Ajouter une section blog
Description :
- Créer la page /articles
- Ajouter les cartes articles
- Ajouter le template article
```

### Pull Request

Une PR doit expliquer :

- ce qui change ;
- pourquoi ;
- comment tester ;
- risques éventuels.

Exemple :

```md
## Résumé
Ajout de la section projets bilingue.

## Tests
- npm run build

## Notes
Pas de données sensibles exposées.
```

### Validation

Tu dois savoir :

- créer une branche ;
- pousser une branche ;
- ouvrir une Pull Request ;
- relire les fichiers modifiés ;
- merger proprement.

---

## Niveau 6 — Git Avancé

Durée recommandée : 3 semaines

### Objectifs

- Maîtriser rebase.
- Comprendre stash.
- Nettoyer un historique.
- Corriger un mauvais commit.
- Gérer des conflits complexes.

### Commandes

```bash
git stash
git stash pop
git rebase origin/main
git pull --rebase origin main
git cherry-pick commit_id
git revert commit_id
git reset --soft HEAD~1
git reset --mixed HEAD~1
```

### Attention

Évite ceci sans comprendre :

```bash
git reset --hard
git push --force
```

Ces commandes peuvent supprimer ou écraser du travail.

### Rebase

Le rebase permet de rejouer tes commits au-dessus d’une base plus récente.

Workflow :

```bash
git fetch origin
git rebase origin/main
```

S’il y a conflit :

```bash
git status
```

Corriger les fichiers, puis :

```bash
git add fichier
git rebase --continue
```

### Revert

Pour annuler un commit déjà poussé :

```bash
git revert commit_id
```

`revert` est plus sûr que `reset` sur un dépôt partagé.

### Exercice

1. Créer deux branches.
2. Modifier les mêmes fichiers.
3. Générer un conflit.
4. Résoudre le conflit.
5. Continuer le rebase.

### Validation

Tu dois savoir :

- utiliser `stash`;
- faire un `pull --rebase`;
- résoudre un conflit de rebase ;
- utiliser `revert`;
- expliquer pourquoi `push --force` est dangereux.

---

## Niveau 7 — Docker Débutant

Durée recommandée : 2 semaines

### Objectifs

- Comprendre image, container, volume, port.
- Lancer un container.
- Lire les logs.
- Arrêter et supprimer un container.

### Concepts

```txt
Image     : modèle immuable
Container : instance en cours d’exécution
Volume    : stockage persistant
Port      : exposition réseau
Dockerfile: recette pour construire une image
```

### Commandes

```bash
docker version
docker ps
docker ps -a
docker images
docker run
docker stop
docker rm
docker logs
docker exec -it container bash
```

### Exercice — Lancer Nginx

```bash
docker run --name web-test -p 8080:80 nginx
```

Ouvrir :

```txt
http://localhost:8080
```

Arrêter :

```bash
docker stop web-test
docker rm web-test
```

### Exercice — Shell dans un container

```bash
docker run -it ubuntu bash
```

Dans le container :

```bash
apt update
ls
exit
```

### Validation

Tu dois savoir expliquer :

- différence image/container ;
- pourquoi `-p 8080:80` expose un port ;
- pourquoi un container peut disparaître sans perdre une image.

---

## Niveau 8 — Dockerfile

Durée recommandée : 2 semaines

### Objectifs

- Construire une image.
- Comprendre les couches Docker.
- Conteneuriser une application simple.

### Exemple Dockerfile Node.js

```Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

### Commandes

```bash
docker build -t mon-app .
docker run --name mon-app-container -p 3000:3000 mon-app
```

### Exercice

1. Créer une petite app Node.js.
2. Créer un Dockerfile.
3. Construire l’image.
4. Lancer le container.
5. Vérifier dans le navigateur.

### Bonnes pratiques

Ajouter un `.dockerignore` :

```txt
node_modules
dist
.git
.env
```

### Validation

Tu dois savoir :

- écrire un Dockerfile simple ;
- construire une image ;
- lancer un container depuis cette image ;
- expliquer `COPY`, `RUN`, `CMD`, `EXPOSE`.

---

## Niveau 9 — Docker Compose

Durée recommandée : 2 semaines

### Objectifs

- Lancer plusieurs services ensemble.
- Gérer une app + base de données.
- Utiliser des volumes.
- Utiliser des variables d’environnement.

### Exemple

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:password@db:5432/app
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=app
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Commandes

```bash
docker compose up
docker compose up -d
docker compose down
docker compose logs
docker compose exec app sh
```

### Exercice

Créer un environnement :

- app Node.js ;
- base PostgreSQL ;
- interface Adminer.

### Validation

Tu dois savoir :

- expliquer `services`;
- expliquer `volumes`;
- expliquer `depends_on`;
- lancer et arrêter une stack.

---

## Niveau 10 — Docker pour Cybersécurité

Durée recommandée : 3 semaines

### Objectifs

- Créer des labs isolés.
- Tester des outils sans polluer la machine.
- Comprendre les risques de sécurité Docker.

### Usages utiles

- Lancer un SIEM en lab.
- Lancer une base vulnérable volontairement en environnement isolé.
- Tester un script dans un container.
- Créer un environnement reproductible pour un projet.

### Sécurité Docker

À connaître :

- ne pas lancer n’importe quelle image ;
- éviter `--privileged` sauf nécessité claire ;
- éviter de monter `/` dans un container ;
- ne pas mettre de secrets dans une image ;
- scanner les images ;
- limiter les ports exposés.

### Commandes utiles

```bash
docker inspect container
docker stats
docker network ls
docker volume ls
docker system df
```

### Exercice

Créer un lab isolé :

- un container web ;
- un container base de données ;
- un réseau Docker dédié ;
- aucun port exposé sauf le web.

### Validation

Tu dois savoir :

- créer un réseau Docker ;
- expliquer les risques de `--privileged`;
- expliquer pourquoi les secrets ne doivent pas être dans un Dockerfile.

---

## Niveau 11 — CI/CD GitHub Actions

Durée recommandée : 2 semaines

### Objectifs

- Automatiser les tests.
- Automatiser le build.
- Comprendre l’intégration GitHub/Vercel.

### Exemple GitHub Actions

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
```

### Exercice

1. Ajouter ce workflow à un projet.
2. Pousser sur GitHub.
3. Vérifier l’onglet Actions.
4. Casser volontairement le build.
5. Corriger.

### Validation

Tu dois savoir :

- lire un workflow GitHub Actions ;
- comprendre pourquoi un build échoue ;
- utiliser CI avant de merger.

---

## Niveau 12 — Projet Final

Durée recommandée : 4 semaines

### Objectif

Créer un projet complet professionnel :

```txt
Application web
Git propre
GitHub avec Pull Requests
Dockerfile
Docker Compose
CI GitHub Actions
Déploiement Vercel ou serveur
Documentation complète
```

### Cahier des charges

Créer une application nommée `cyber-lab-notes`.

Fonctionnalités :

- page d’accueil ;
- liste de notes ;
- création de notes ;
- tags ;
- recherche ;
- export Markdown ;
- authentification simple ou simulation d’authentification ;
- base de données PostgreSQL.

### Livrables

- `README.md`
- `Dockerfile`
- `docker-compose.yml`
- workflow GitHub Actions
- branches propres
- Pull Requests
- documentation d’installation

### Validation finale

Tu dois pouvoir :

- cloner le projet ;
- lancer avec Docker Compose ;
- exécuter les tests ;
- expliquer chaque fichier ;
- expliquer le workflow Git ;
- expliquer le pipeline GitHub Actions.

---

## Planning Recommandé Sur 12 Semaines

### Semaine 1

- Terminal Linux
- Commandes de base
- Fichiers et dossiers

### Semaines 2 à 3

- Git débutant
- Commits
- Diff
- Historique

### Semaines 4 à 5

- Branches
- Merge
- Conflits
- Rebase simple

### Semaine 6

- GitHub
- Remote
- Push / pull
- Pull Requests

### Semaines 7 à 8

- Docker débutant
- Images
- Containers
- Dockerfile

### Semaines 9 à 10

- Docker Compose
- Volumes
- Réseaux
- App + base de données

### Semaine 11

- GitHub Actions
- CI/CD
- Build automatique

### Semaine 12

- Projet final complet
- Documentation
- Déploiement

---

## Routine Quotidienne

Chaque jour :

1. Lire 20 minutes.
2. Pratiquer 45 minutes.
3. Écrire ce que tu as compris.
4. Faire au moins un commit.
5. Relire `git status` avant chaque commit.

Commandes à utiliser tous les jours :

```bash
git status
git diff
git add fichier
git commit -m "message clair"
git log --oneline -5
```

---

## Erreurs À Éviter

- Faire `git add .` sans vérifier.
- Pousser des fichiers sensibles.
- Mettre `.env`, CV, mémoire ou secrets dans Git.
- Utiliser `git reset --hard` sans comprendre.
- Utiliser `git push --force` sur `main`.
- Copier-coller des commandes Docker dangereuses.
- Lancer des containers inconnus en mode privilégié.

---

## Checklist Expert

Tu peux te considérer très solide quand tu sais :

- expliquer Git à un débutant ;
- résoudre un conflit sans paniquer ;
- faire un rebase propre ;
- organiser un projet avec branches et PR ;
- écrire un README clair ;
- créer un Dockerfile propre ;
- créer un `docker-compose.yml` multi-services ;
- configurer GitHub Actions ;
- déployer sur Vercel ;
- protéger les secrets ;
- diagnostiquer un problème de build ;
- expliquer la différence entre local, remote, image, container, volume et réseau.

---

## Ressources Recommandées

- Documentation Git : https://git-scm.com/doc
- Livre Pro Git : https://git-scm.com/book/fr/v2
- GitHub Docs : https://docs.github.com
- Docker Docs : https://docs.docker.com
- Docker Compose Docs : https://docs.docker.com/compose
- GitHub Actions Docs : https://docs.github.com/actions

---

## Conseil Final

La maîtrise ne vient pas de la lecture seule. Elle vient de la répétition.

Tu dois casser des petits projets volontairement, résoudre des conflits, recommencer, documenter et pousser régulièrement sur GitHub.

Le bon objectif n’est pas de connaître toutes les commandes par cœur. Le bon objectif est de comprendre l’état du système à chaque moment :

```txt
Qu’est-ce qui est modifié ?
Qu’est-ce qui est stagé ?
Qu’est-ce qui est commité ?
Qu’est-ce qui est local ?
Qu’est-ce qui est distant ?
Qu’est-ce qui tourne dans Docker ?
Qu’est-ce qui est persistant ?
Qu’est-ce qui est exposé ?
```

Quand tu sais répondre à ces questions, tu deviens réellement autonome.
