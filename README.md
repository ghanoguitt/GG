# Guitt Abdelghani | Portfolio

Portfolio personnel de Guitt Abdelghani, développeur Full Stack, créateur digital, photographe et filmmaker.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript vanilla
- GitHub Pages compatible

## Installation locale

1. Clonez le dépôt ou ouvrez le dossier du projet.
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Pour un serveur local plus fidèle, exécutez :

```bash
python -m http.server 8000
```

Puis ouvrez : http://localhost:8000

## Structure du projet

```text
/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── config.js
│   │   └── script.js
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── photography/
│   └── cv/
│       └── Guitt-Abdelghani-CV.pdf
├── README.md
├── .gitignore
└── .nojekyll
```

## Modifier les informations du portfolio

Les données principales sont dans `assets/js/config.js`.

Modifiez simplement :

- nom
- email
- téléphone
- GitHub
- TikTok
- CV
- projets
- URLs des démonstrations
- images

## Ajouter des photos ou images

1. Placez vos fichiers dans les dossiers `assets/images/projects` ou `assets/images/photography`.
2. Mettez à jour les chemins dans `assets/js/config.js`.
3. Utilisez des images optimisées et au format Web compatible.

## Ajouter le CV

1. Placez votre fichier PDF dans `assets/cv/`.
2. Vérifiez le chemin dans `assets/js/config.js`.
3. Le fichier attendu est : `assets/cv/Guitt-Abdelghani-CV.pdf`

## Ajouter les réseaux sociaux

Modifiez aussi les liens dans `assets/js/config.js` si nécessaire.

## Déploiement sur GitHub Pages

1. Validez le projet localement.
2. Créez un dépôt GitHub.
3. Ajoutez les fichiers au dépôt.
4. Activez la publication via GitHub Pages.

## Commandes Git

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

> Remplacez `YOUR_GITHUB_REPOSITORY_URL` par votre vrai URL de dépôt GitHub.

## Important

- Les URLs de démonstration sont laissées en placeholder tant qu'elles ne sont pas confirmées.
- La version actuelle ne contient pas de faux backend PHP.
- Le formulaire fonctionne côté interface et ouvre le client mail par défaut.
