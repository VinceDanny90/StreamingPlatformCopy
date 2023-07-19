import apiClient from '../clients/tmdb'
class TMDB {
    _apiClient = apiClient;
    
    async getPopularTvSeries(){
        try {
            const { data } = await this._apiClient.get("/trending/all/day");
            return data.results;
        } catch (error) {
            throw error;
        }
    };
    async getPopularFilm(){
        try {
            const { data } = await this._apiClient.get("/discover/movie");
            return data.results;
        } catch (error) {
            throw error;
        }
    };
    async getPopularSeries(){
        try {
            const { data } = await this._apiClient.get("/discover/tv");
            return data.results;
        } catch (error) {
            throw error;
        }
    }
}

export default new TMDB();