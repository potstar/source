/*
 * @Author: potstar 
 * @Date: 2020-03-12 10:51:55 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-08-04 15:29:16
 * 动态路由数据
 */
import {asyncRouterMap,constantRouterMap} from '@/router.js';

function hasPermission(roles,route){
    if(route.name){
        return roles.some(role=>route.name===role);
    }
    return true;
}
function filterAsyncRouter(routerMap,roles){
    const accessedROuters=routerMap.filter((route)=>{
        if(hasPermission(roles,route)){
            if(route.children && route.children.length){
                route.children=filterAsyncRouter(route.children,roles);
            }
            return true;
        }
        return false;
    });
    return accessedROuters;
}
const permission={
    state:{
        routers:[],
        addRouters:[],
    },
    mutations:{
        SET_ROUTERS:(state, routes)=>{
            state.addRouters=routes;
            state.routers=constantRouterMap.concat(routes);
            
        },
    },
    actions:{
        generateRoutes({ commit }){
            // console.log('genrate');
            return new Promise(resolve=>{
                // const {roles }=data;
                let accessedRouters;
                // if(roles.indexOf('admin')>=0){
                accessedRouters=asyncRouterMap;
                // }
                commit('SET_ROUTERS',accessedRouters);
                // console.log(accessedRouters);
                resolve();
            });
        },
    },
};
export default permission;
