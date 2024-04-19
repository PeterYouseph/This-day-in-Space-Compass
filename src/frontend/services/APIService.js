// frontend/apiService.js - Serviço para consumir os dados da aplicação Backend

const axios = require('axios');

async function fetchDataFromBackend(params) {
    // Try catch para tratar erros de requisição do backends
    try {
        const response = await axios.get('http://backend:3000/', { params });
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = { fetchDataFromBackend };
