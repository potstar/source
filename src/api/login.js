import fetch from '../utils/fetch'
export function login(userinfo){
    return fetch({
        url:'/login/loginByEmail',
        method:'post',
        params:userinfo,
    });
}
export function logout(){
    return fetch({
        url:'login/loginout',
        method:'get'
    });
}
export function getInfo(token){
    return fetch({
        url:'/user/info',
        method:'get',
        params:{token}
    });
}