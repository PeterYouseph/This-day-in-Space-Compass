// Carregando variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importação de módulos necessários
const path = require('path');
const express = require('express');

// Importação de rotas
const homeRoutes = require('./routes/HomePageRoutes'); // Importe as rotas do HomePageRoutes.js

// Inicialização do aplicativo Express
const app = express();

// Configuração da porta do servidor a partir das variáveis de ambiente ou padrão 3000
const PORT = process.env.PORT || 3000;

// Adicione as rotas do HomePageRoutes.js usando o método use
app.use('/', homeRoutes);

// Inicialização do servidor na porta configurada, com um log para confirmação
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
