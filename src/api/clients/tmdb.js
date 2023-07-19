import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_TMDB,
    timeout: 5000,
});

instance.interceptors.request.use(
    function (config) {
        
            config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_KEY_TMDB}`;
        
        return config;
    },
        
    function (error) {
        return Promise.reject(error);
    }
);


export default instance;