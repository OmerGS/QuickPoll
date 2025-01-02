# QuickPoll

QuickPoll est un projet permettant de créer et de gérer des questionnaires et des sondages rapidement. Il inclut des fonctionnalités avancées comme la sécurisation par mot de passe et une expérience utilisateur ludique.

## 🧐 Fonctionnalités

- **Sécurisation par mot de passe** : Les sondages peuvent être protégés par un code que les participants doivent entrer pour accéder au contenu.
- **Gestion des questions** : Les sondages supportent des questions avec une ou plusieurs réponses possibles.
- **Réponse** : Les réponses sont affichées de façon explicite et son également téléchargeable pour des traitements plus poussées.

## 💻 Technologies utilisées

Le projet QuickPoll utilise les technologies suivantes :

- **Back-end** : Node.js avec Express
- **Front-end** : HTML, CSS, et JavaScript
- **Autres** : Gestion des fichiers statiques et des données via le système de fichiers (FS) en Node.js

## 🚀 Déploiement local

1. Clonez ce dépôt sur votre machine locale.
   ```bash
   git clone https://github.com/OmerGS/QuickPoll.git

2. Installer les dépendances
   ```bash
   npm install

3. Configurez les variables d'environnement dans un fichier .env :
   ```bash
   SERVER_PORT=3000

4. Lancez le serveur :
   ```bash
   npm start

5. Accédez à l'application à l'adresse suivante :
   ```bash
   http://localhost:3000


## 🛠️  Fonctionnement
Lorsqu'un utilisateur accède à un sondage :

1. S'il est protégé, un écran demande d'entrer un code.
2. Une fois validé, les questions apparaissent une par une.
3. Les options sont affichées sous forme de cases à cocher ou de boutons radio, selon le type de question.
4. Une fois toutes les questions complétées, un message de remerciement s'affiche.
