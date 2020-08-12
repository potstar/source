/*
 * @Author: potstar 
 * @Date: 2020-03-12 09:43:20 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-08-12 15:29:20
 * 用户数据存储文件
 */
import {login, logout, getInfo} from '@/api/login'
const user={
    state:{
        token:'',
        realname:'',//用户昵称
        username:'',//用户账号
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token;
        },
        SET_USER_REALNAME:(state,realname)=>{
            state.realname=realname;
        },
        SET_USERNAME:(state,username)=>{
            state.username=username;
        },
    },
    actions:{
        //登录获取token并存储
        async setTokenByLogin({commit},userInfo){
           const promise=await login(userInfo).then((res)=>{
            //    commit('SET_TOKEN',res.data.data.token);
            commit('SET_TOKEN',res.data.token);
            console.log(res);
               return res;
           })
           return promise;
        },
        //根据token请求用户信息
        async getUserInfoByToken({commit,state}){

        },
    },
};
export default user;
