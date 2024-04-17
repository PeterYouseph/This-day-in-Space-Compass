// frontend/index.js - Arquivo principal do frontend do sistema, responsável por renderizar a página inicial e fazer requisições ao backend
 
// Importação de módulos necessários
const express = require('express');
const exphbs = require('express-handlebars');  // Importando o handlebars para controle de layout das páginas
const axios = require('axios'); // Importação do axios para fazer requisições HTTP

// Inicialização do aplicativo Express
const app = express();

// Configuração do Handlebars como mecanismo de template para renderização de views
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars' }, { defaultLayout: 'Main' }));
app.set('view engine', '.handlebars');
app.set('views', './views');

// Middleware para parsing de JSON e dados de formulário URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos localizados na pasta /src/public
app.use(express.static('./public'));

// Rota para renderizar a página inicial com os dados recebidos do backend (Teste em desenvolvimento)

// Altere a rota para pegar os parâmetros enviados pelo frontend
app.get('/', async (req, res) => {
    try {
        // Pegue os parâmetros da query
        const { date, start_date, end_date, count } = req.query;

        // Faça a requisição ao backend com os parâmetros
        const response = await axios.get('http://localhost:3000/', {
            params: { date, start_date, end_date, count }
        });

        // Renderize a página inicial com os dados recebidos do backend
        res.render('homepage', { data: response.data });
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
        res.status(500).send('Erro ao buscar dados do backend');
    }
});


// Inicialização do servidor na porta 3001 e Backend na porta 3000
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor do frontend rodando na porta ${PORT}`);
});
