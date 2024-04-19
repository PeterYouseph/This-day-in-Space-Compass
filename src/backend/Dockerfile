# Ultima versão da imagem do Node
FROM node:latest

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos do projeto para o diretório de trabalho
COPY . .

# Instalando as dependências
RUN npm install

# Expondo a porta em que o servidor estará rodando
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]