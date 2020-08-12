const getters={
    sidebar:state=>state.layout.sidebar,
    isLoading:state=>state.layout.isLoading,
    token:state=>state.user.token,
    visitedViews:state=>state.tagView.visitedViews,
    cachedViews:state=>state.tagView.cachedViews,
    realname:state=>state.user.realname,
    name:state=>state.user.username,
    addRouters:state=>state.asyncRoutes.addRouters,
    routers:state=>state.asyncRoutes.routers,
};
export default getters;