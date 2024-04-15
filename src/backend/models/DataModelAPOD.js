class APOD {
    constructor(copyright, date, explanation, hdurl, media_type, service_version, title, url) {
        this.copyright = copyright;
        this.date = date;
        this.explanation = explanation;
        this.hdurl = hdurl;
        this.media_type = media_type;
        this.service_version = service_version;
        this.title = title;
        this.url = url;
    }
}
module.exports = APOD;
