# Test technique Node.js + Express (squelette)

## Contexte
Ce repo fournit un squelette minimal pour un test technique backend. Il ne contient **pas** la solution finale: uniquement la structure, un point d'entree, et un exemple de "fake DB" en memoire.

## Installation rapide
```bash
npm install
npm run dev
```

L'API demarre par defaut sur `http://localhost:3000`.

## Endpoint disponible
- `GET /health` -> retourne `{ "status": "ok" }`

## Objectifs du candidat
Le candidat doit implementer les routes de gestion de taches a partir du squelette fourni:
- CRUD complet sur `/tasks`
- Validation des payloads (les schemas sont deja dans `src/validators/`)
- Utilisation de la "fake DB" en memoire (voir `src/services/taskStore.js`)
- Gestion d'erreurs (middleware global deja present)

## Structure
- `src/app.js` : configuration Express + routes + middleware d'erreurs
- `src/routes/` : routes HTTP (squelette)
- `src/services/` : services (fake DB en memoire)
- `src/validators/` : validation (Zod installe, schemas fournis)

## Notes
- Pas de base de donnees reelle
- Le fichier `src/routes/tasks.js` est volontairement incomplet

