import { defineStore } from "pinia";
import user from "../api/services/User";
import router from "../route";

export const useUserStore = defineStore("UserStore",{

    state:()=>({
        user: {},
        accessToken: ""
    }),

    getters:{
      isLoggedIn(){
        return Object.keys(this.user).length > 0;
      },
    },
    
    actions: {
        async addUser(payload){
          try {
            const data = await user.create(payload)
            this.user = data.user;
            this.accessToken = data.accessToken;
            } catch (error) {
             throw error;
            }
      },
      async login(payload){
        try {
        const data = await user.login(payload)
            this.user = data.user;
            this.accessToken = data.accessToken;
            } catch (error) {
             throw error.request.responseText;
            }
      },
      async logout(){
        this.$reset();
        router.push({name: 'LoginPage'})
      }
    },
    persist: {
      storage: sessionStorage,
    },    
  }
)