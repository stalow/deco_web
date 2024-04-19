# Utilisation d'une image Node.js comme base
FROM node:lts-alpine3.19


# Définition du répertoire de travail dans le conteneur
WORKDIR /appweb

# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie de tous les fichiers de l'application dans le conteneur
COPY . .

# Construction de l'application React
RUN npm run build

# Exposition du port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
