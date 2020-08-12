import router from './router.js';
import store from './store';

router.beforeEach((to,from,next)=>{
    if(store.getters.token){
        if(store.getters.addRouters.length===0){
            store.dispatch('generateRoutes').then(
                ()=>{
                    router.addRoutes(store.getters.addRouters);
                    next({...to,replace:true});
                }    
            );
        }
        else{
            if(to.path==='/login'){
                next({path:'/dashboard',});
            }else{
                next();
            }
        }  
    }
    else{
        next();
    }

})