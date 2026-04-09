FROM node:18

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa dipendenze e serve globalmente
RUN npm install --legacy-peer-deps && npm install -g serve

# Copia tutto il codice
COPY . .

# Build React
RUN npm run build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]