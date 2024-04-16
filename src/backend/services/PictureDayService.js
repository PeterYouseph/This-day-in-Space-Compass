// ./backend/services/PictureDayService.js

// Serviço para as requisições de busca por meio da API APOD da NASA (Astronomy Picture of the Day)

const axios = require('axios');

async function returnPictureDay(start_date, end_date, count, thumbs) {
    // URL base da API da NASA
    let url = `https://api.nasa.gov/planetary/apod?`;
    const api_key = process.env.APOD_API_KEY; // Chave da API da NASA que deve ser definida no arquivo .env
    
    // Adicionando parâmetros à URL de acordo com a ordem especificada na documentação da API
    if (start_date != undefined) url += `start_date=${start_date}&`;
    if (end_date != undefined) url += `end_date=${end_date}&`;
    if (count != undefined) url += `count=${count}&`;
    if (thumbs != undefined) url += `thumbs=${thumbs}&`;
    if (api_key) url += `api_key=${api_key}`;

    try {
        // Realizando a requisição GET com a URL de acordo com os parâmetros adicionados
        const response = await axios.get(url);
        console.log('Print URL da requisição: ')
        console.log(url)
        return response.data;
    } catch (error) {
        // Em caso de falha na requisição, lançando o erro para o console
        throw error;
    }
}

module.exports = { returnPictureDay };
