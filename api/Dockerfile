# Definir a imagem base usando a versão específica do Node.js
FROM node:21.6.2

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copiar o arquivo 'package.json' (e 'package-lock.json', se disponível) para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências da aplicação
# Note que isso inclui tanto 'dependencies' quanto 'devDependencies' pois precisamos delas para o build
RUN npm install

# Copiar os arquivos restantes do projeto para o diretório de trabalho no contêiner
COPY . .

# Compilar a aplicação TypeScript para JavaScript
RUN npm run build

# A porta que a aplicação usará
EXPOSE 4000

# Comando para executar a aplicação
CMD ["npm", "start"]
