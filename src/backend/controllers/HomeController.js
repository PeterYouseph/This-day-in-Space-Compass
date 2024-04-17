// controllers/HomeController.js
// Este arquivo contém o controller responsável pela lógica da página de busca do site.

// Isso permite a interação com a lógica de negócios e a estruturação dos dados de títulos de filmes ou séries.
const pictureDayService = require('../services/PictureDayService');
const APOD = require('../models/DataModelAPOD');

// Recebe a requisição e resposta como parâmetros, padrão em expressões de middleware/route handler.
async function pictureDay(req, res) {

    // permitindo uma manipulação de dados estruturada e consistente.
    try {
        const results = await pictureDayService.returnPictureDay(req.query.date, req.query.start_date, req.query.end_date, req.query.count);
        // Retornand o objeto com os dados da busca para a aplicação Frontend

        return res.json(results);
        }

    // Em caso de falha na busca, envia uma resposta com status 500 (Internal Server Error) e a mensagem de erro.
    catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

module.exports = { pictureDay };