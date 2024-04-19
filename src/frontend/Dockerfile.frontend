# Usando a  imagem base do Node.js
FROM node:latest

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos do projeto para o diretório de trabalho
COPY . .

# Instalando as dependências
RUN npm install

# Expondo a porta em que o servidor estará rodando
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["npm", "start"]