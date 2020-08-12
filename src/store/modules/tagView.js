/*
 * @Author: potstar 
 * @Date: 2020-03-12 09:51:59 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-03-14 11:07:08
 * 顶部标签页数据切换 
 */
const tagview = {
    state:{
        visitedViews:[],//用户访问过的页面
        cachedViews:[],//实际keep-alive的路由，通过路由配置设置meta.nocache来决定是否缓存。默认缓存。
    },
    mutations:{
        ADD_VISITED_VIEWS:(state,view)=>{
            if(state.visitedViews.some(v=>v.path===view.path)) return;
            state.visitedViews.push({
                name:view.name,
                path:view.path,
                title:view.meta.title || 'no-name',
            });
            if(!view.meta.noCache){
                state.cachedViews.push(view.name);
            }
        },
        DEL_VISITED_VIEW:(state,view)=>{
            for(const [i,v] of state.visitedViews.entries()){
                if(v.path===view.path){
                    state.visitedViews.splice(i,1);
                    break;
                }
            }
            for(const i of state.cachedViews){
                if(i===view.name){
                    const index=state.cachedViews.indexOf(i);
                    state.cachedViews.splice(index,1);
                    break;
                }
            }
        },
        DEL_OTHERS_VIEWS:(state,view)=>{
            for(const [i,v] of state.visitedViews.entries()){
                if(v.path===view.path){
                    state.visitedViews=state.visitedViews.slice(i,i+1);
                    break;
                }
            }
            for(const i of state.cachedViews){
                if(i===view.name){
                    const index=state.cachedViews.indexOf(i);
                    state.cachedViews=state.cachedViews.slice(index,i+1);
                    break;
                }
            }
        },
        DEL_ALL_VIEWS:(state)=>{
            state.visitedViews=[];
            state.cachedViews=[];
        },
    },
    actions:{
        openNewTab({dispath},routerName){

        },
        addVisitedViews({commit},view){
            commit('ADD_VISITED_VIEWS',view);
        },
        delVisitedViews({ commit, state} , view){
            return new Promise((resolve)=>{
                commit('DEL_VISITED_VIEW',view);
                resolve([...state.visitedViews]);
            });     
        },
        delOthersViews({ commit, state }, view){
            return new Promise((resolve)=>{
                commit('DEL_OTHERS_VIEWS',view);
                resolve([...state.visitedViews]);
            });
        },
        delAllViews({ commit, state }, view){
            return new Promise((resolve)=>{
                commit('DEL_ALL_VIEWS');
                resolve([...state.visitedViews]);
            });
        },

    },
};
export default tagview;