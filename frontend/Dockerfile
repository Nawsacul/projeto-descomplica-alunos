# # Fase de build
# # Usa a versão específica do Node.js para garantir compatibilidade
# FROM node:21.6.2

# # Define o diretório de trabalho no contêiner
# WORKDIR /app

# # Copia os arquivos package.json e package-lock.json para o diretório de trabalho
# COPY package.json .

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 8080

# CMD [ "npm", "run", "preview" ]

# Fase de build
# Usa a versão específica do Node.js para garantir compatibilidade
FROM node:21.6.2 as build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o contêiner
COPY . .

# Compila o projeto TypeScript e constrói a versão de produção com Vite
RUN npm run build

# Fase de execução
FROM node:21.6.2

# Instala o servidor estático serve
RUN npm install -g serve

# Copia os arquivos construídos da fase de build
COPY --from=build /app/dist /app

# Define o diretório de trabalho
WORKDIR /app

# Expõe a porta que o serve usará
EXPOSE 3000

# Inicia o servidor para servir o aplicativo React
CMD ["serve", "-s", ".", "-l", "3000"]
