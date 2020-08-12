/*
 * @Author: potstar 
 * @Date: 2020-03-12 10:24:56 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-04-21 11:10:46
 * 框架数据存储
 */
const layout={
    state:{
        sidebar:{
            opened:1,
        },
        homePagePath:'/',
        isLoading:false,
        autoCloseLoading:true,
    },
    mutations:{
        TOGGLE_SIDEBAR:(state)=>{
            console.log(state.sidebar.opened);
            if(state.sidebar.opened){
                state.sidebar.opened=0;
            }
            else{
                state.sidebar.opened=1;
            }
        },
        SET_LOADING:(state,isLoading)=>{
            state.isLoading=isLoading;
        },
        SET_AUTO_CLOSE_LOADING:(state,autoCloseLoading)=>{
            state.autoCloseLoading=autoCloseLoading;
        },
        SET_HOME_PAGE_PATH:(state, homePagePath)=>{
            state.homePagePath=homePagePath;
        },
    },
    actions:{
        ToggleSideBar:({ commit })=>{
            commit('TOGGLE_SIDEBAR');
        },
        isLoading({ commit }, isLoading){
            commit('SET_AUTO_CLOSE_LOADING',!isLoading);
            commit('SET_LOADING',isLoading);
        },
    },
};
export default layout;
