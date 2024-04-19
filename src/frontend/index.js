// frontend/index.js - Arquivo principal do frontend do sistema, responsável por renderizar a página inicial e fazer requisições ao backend
 
// Importação de módulos necessários
const express = require('express');
const exphbs = require('express-handlebars');  // Importando o handlebars para controle de layout das páginas
const apiService = require('./services/APIService'); // Importação do serviço de API para consumir dados do Backend

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
        const { date, start_date, end_date, count } = req.query;

        // Verifica se há parâmetros na query antes de fazer a requisição ao backend
        let responseData;
        if (date || start_date || end_date || count) {
            responseData = await apiService.fetchDataFromBackend({ date, start_date, end_date, count });
        } else {
            responseData = null; // Define como null se não houver parâmetros na query
        }

        res.render('homepage', { data: responseData });
    } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
        // Em caso de erro na requisição ao backend, envia uma resposta de erro com status 500 (Internal Server Error) e renderiza a página sem dados recebidos
        res.render('homepage', { data: null });
    }
});




// Inicialização do servidor na porta 3001 e Backend na porta 3000
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor do frontend rodando na porta ${PORT}`);
});
