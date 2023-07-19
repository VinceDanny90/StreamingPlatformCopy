import {createRouter, createWebHistory} from 'vue-router';
import { useUserStore } from '../store/UserStore';

import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import HomePage from '../pages/HomePage.vue'
import Film from '../pages/Film.vue'
import Serie from '../pages/Serie.vue'

import NotFound from '../pages/NotFound.vue'
import { nextTick } from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name:"LoginPage",
            component: LoginPage,
            meta: {
                layout: "auth"
            }
        },
        {
            path: "/sign-up",
            name: "SignUpPage",
            component: SignUpPage,
            meta: {
                layout: "auth"
            }
        },
        {
            path: "/browse",
            name: "HomePage",
            component: HomePage,
            meta: {
                middleware: ("auth")
            }
        },{
            path: "/film",
            name: "Film",
            component: Film,
            meta: {
                middleware: ("auth")
            }
        },{
            path: "/serieTV",
            name: "SerieTv",
            component: Serie,
            meta: {
                middleware: ("auth")
            }
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
            meta: {
                layout: "auth"
            }
        },
       
    
    
    ],
});

router.beforeEach((to, from, next)=>{
    if( !to.meta.middleware) next();
    const userStore = useUserStore();
    if(to.meta.middleware.includes("auth") && !userStore.isLoggedIn){
        next({name: 'LoginPage'});
    } else next();
    
})

export default router;