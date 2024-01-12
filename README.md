# NestJS API - Gestion de Livres et Auteurs

Ce projet utilise NestJS pour créer une API simple de gestion de livres et d'auteurs avec une base de données MongoDB.

## Installation

1. Installez les dépendances avec : `npm install`.

## Configuration

1. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires. 

## Services et Modèles

### Livres

- **Service (`livres.service.ts`):** Le service `LivresService` gère la logique métier pour la gestion des livres. Il communique avec la base de données MongoDB pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les livres.

- **Modèle (`auteurs.model.ts`):** Le modèle `Auteur` définit la structure des données pour représenter un auteur.


## Utilisation

1. Lancez l'application avec : `npm run start`.
2. L'API sera accessible à l'adresse `http://localhost:3000`.
## Endpoints

- `GET /livres` : Récupère la liste des livres.
- `GET /livres/:id` : Récupère un livre spécifique par son ID.
- `POST /livres` : Ajoute un nouveau livre.
- `PUT /livres/:id` : Met à jour un livre existant.
- `DELETE /livres/:id` : Supprime un livre.

- `GET /auteurs` : Récupère la liste des auteurs.
- `GET /auteurs/:id` : Récupère un auteur spécifique par son ID.
- `POST /auteurs` : Ajoute un nouvel auteur.
- `PUT /auteurs/:id` : Met à jour un auteur existant.
- `DELETE /auteurs/:id` : Supprime un auteur.
