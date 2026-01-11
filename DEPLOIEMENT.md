# Guide de Déploiement Git - Vacances Dunes & Mer

## 🚨 Git n'est pas installé sur votre système

Pour pousser votre projet sur GitHub (https://github.com/riadhhassine7-lab/Chameauuuuuuu.git), vous devez d'abord installer Git.

---

## 📥 Installation de Git

### Téléchargement

Téléchargez Git pour Windows : **https://git-scm.com/download/win**

### Installation

1. Lancez l'installateur téléchargé
2. Gardez toutes les options par défaut
3. Cliquez sur "Next" jusqu'à "Install"
4. Attendez la fin de l'installation

---

## 🔧 Commandes Git à Exécuter

Une fois Git installé, ouvrez **PowerShell** dans le dossier du projet et exécutez ces commandes :

```powershell
# Naviguer vers le dossier du projet
cd C:\Users\info\.gemini\antigravity\scratch\vacances-dunes-mer

# Initialiser le repository Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Landing page Vacances Dunes & Mer avec design tunisien premium"

# Renommer la branche en 'main'
git branch -M main

# Ajouter le repository distant
git remote add origin https://github.com/riadhhassine7-lab/Chameauuuuuuu.git

# Pousser le code sur GitHub
git push -u origin main
```

> **Note** : Si le repository existe déjà et contient des fichiers, utilisez :
> ```bash
> git pull origin main --allow-unrelated-histories
> git push -u origin main
> ```

---

## 🖥️ Alternative : GitHub Desktop (Plus Simple)

Si vous préférez une interface graphique :

1. **Télécharger GitHub Desktop** : https://desktop.github.com/
2. Installer et se connecter avec votre compte GitHub
3. Cliquer sur **"Add" → "Add Existing Repository"**
4. Sélectionner le dossier : `C:\Users\info\.gemini\antigravity\scratch\vacances-dunes-mer`
5. Cliquer sur **"Publish repository"**
6. Nommer le repository `Chameauuuuuuu`
7. Cliquer sur **"Publish"**

---

## 📤 Alternative : Upload Manuel

Si vous voulez juste uploader les fichiers sans installer Git :

1. Aller sur https://github.com/riadhhassine7-lab/Chameauuuuuuu
2. Cliquer sur **"Add file" → "Upload files"**
3. Glisser-déposer tous les fichiers :
   - index.html
   - style.css
   - script.js
   - Toutes les images .png
4. Ajouter un message de commit
5. Cliquer sur **"Commit changes"**

---

## ✅ Vérification

Une fois poussé sur GitHub, vous pouvez :

1. **Voir votre code** : https://github.com/riadhhassine7-lab/Chameauuuuuuu
2. **Activer GitHub Pages** :
   - Settings → Pages
   - Source : main branch
   - Site publié à : https://riadhhassine7-lab.github.io/Chameauuuuuuu/

---

## 📁 Fichiers à Pousser

Assurez-vous que ces fichiers sont présents :

```
✅ index.html (51 KB)
✅ style.css (24 KB)
✅ script.js (8 KB)
✅ hero_sahara_dunes_1768099545903.png
✅ sahara_camp_stars_1768099561552.png
✅ mediterranean_beach_tunisia_1768099574344.png
✅ tunisia_medina_culture_1768099587101.png
✅ francine_travel_consultant_1768099599308.png
```

---

## 🆘 Besoin d'Aide ?

Si vous rencontrez des problèmes, dites-moi et je vous guiderai étape par étape !
