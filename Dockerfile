# Basado en node:20-alpine sin herramientas globales obsoletas
FROM node:20-alpine

# Preparar el espacio de trabajo
WORKDIR /app

# Copiar los manifiestos de dependencias
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Comando por defecto para correr los tests
CMD ["tail", "-f", "/dev/null"]