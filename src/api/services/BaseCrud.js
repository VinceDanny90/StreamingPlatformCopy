import apiClient from '../clients/local'

export default class BaseCrud {
    _apiClient = apiClient;
    _resource;

    constructor(resource){
        this._resource = resource;
    }
    async create(payload){
        try {
            const { data } = await this._apiClient.post(`/${this._resource}`,payload)
            return data;
        } catch (error) {
            throw error;
        }
        
    }

    async readAll(){
        try {
            const { data } = await this._apiClient.get(`/${this._resource}`)
            return data;
        } catch (error) {
            throw error;
        }
    }

    async readByPrimaryKey(pK){}

    async update(pK,payload){}

    async delete(pK){}
}