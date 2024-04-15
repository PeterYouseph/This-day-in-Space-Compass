// controllers/HomeController.js
// Este arquivo contém o controller responsável pela lógica da página de busca do site.

// Importação do serviço de busca de títulos e do modelo SearchTitles.
// Isso permite a interação com a lógica de negócios e a estruturação dos dados de títulos de filmes ou séries.
const pictureDayService = require('../services/PictureDayService');
const APOD = require('../models/DataModelAPOD');

// Função assíncrona para tratar a rota de busca de títulos.
// Recebe a requisição e resposta como parâmetros, padrão em expressões de middleware/route handler.
async function pictureDay(req, res) {

    // Mapeamento dos resultados obtidos para instâncias do modelo SearchTitles,
    // permitindo uma manipulação de dados estruturada e consistente.
    try {
        const results = await pictureDayService.returnPictureDay();
        console.log(results)
        return res.render('homepage', {picture: picture}); // Alteração aqui para renderizar a página handlebar
        }

    // Em caso de falha na busca, envia uma resposta com status 500 (Internal Server Error) e a mensagem de erro.
    catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

module.exports = { pictureDay };