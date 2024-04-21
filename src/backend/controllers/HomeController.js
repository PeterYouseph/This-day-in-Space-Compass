// controllers/HomeController.js
// Este arquivo contém o controller responsável pela lógica da página de busca do site.

// Isso permite a interação com a lógica de negócios e a estruturação dos dados de títulos de filmes ou séries.
const pictureDayService = require('../services/PictureDayService');
const APOD = require('../models/DataModelAPOD');

// Recebe a requisição e resposta como parâmetros, padrão em expressões de middleware/route handler.
async function pictureDay(req, res) {
  try {
    const results = await pictureDayService.returnPictureDay(req.query.date, req.query.start_date, req.query.end_date, req.query.count);

    // Verifica se results é um array antes de tentar mapeá-lo
    if (Array.isArray(results)) {
      const apodResults = results.map(result => new APOD(result.title, result.explanation, result?.copyright, result.url));
      return res.json(apodResults);
    } else if (results) {
      // Se results não é um array, mas é um objeto, cria um novo APOD e retorna em um array
      const apodData = new APOD(results.title, results.explanation, results?.copyright, results.url);
      return res.json([apodData]);
    } else {
      // Se results é null ou undefined, retorna um erro
      return res.status(500).json({ error: 'No results returned from the service' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
}

module.exports = { pictureDay };