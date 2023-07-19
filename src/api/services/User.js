import BaseCrud from "./BaseCrud";

class User extends BaseCrud{
    
    async login(payload){
        try {
            const { data } = await this._apiClient.post("/login",payload);
            return data
        } catch (error) {
            throw error;
        }
    }
}

export default new User("users");