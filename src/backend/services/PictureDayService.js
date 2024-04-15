const axios = require('axios');

// Serviço teste para as requisições de busca por meio da API da Watchmode
async function returnPictureDay() {
    const apiKey = process.env.APOD_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data; /* Alteração aqui para extrair os resultados corretamente */
    } 
    
    catch (error) {
        // Repassa o erro gerado pelo axios para a controller
        throw error;
    }
}
module.exports = { returnPictureDay };
