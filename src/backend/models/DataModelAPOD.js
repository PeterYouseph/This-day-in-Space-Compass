class APOD { // Astronomy Picture of the Day (APOD) Model - Utilizado para estruturar os dados de retorno da API da NASA.
    constructor(title, explanation, copyright, url) {
        this.title = title;
        this.explanation = explanation;
        this.copyright = copyright;
        this.url = url;
    }
}
module.exports = APOD;
