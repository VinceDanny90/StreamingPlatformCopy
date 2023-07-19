import axios from "axios";
import { useUserStore } from "../../store/UserStore";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

instance.interceptors.request.use(
    function (config) {
        const userStore = useUserStore();
        if(userStore.accessToken) {
            config.headers.Authorization = `Bearer ${userStore.accessToken}`
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if(error.response.status === 401) {
            const userStore = useUserStore();
            userStore.logout();
        }
        return Promise.reject(error);
    }
)

export default instance;