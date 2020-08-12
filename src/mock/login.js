import { param2Obj } from '../utils';

const userMap={
    admin:{
        rolename:['admin'],
        token:'admin',
        username:'admin',
        uid:'001',
    }
}
export default{
    loginByEmail:config=>{
        const {username}=param2Obj(config.url);
        return userMap[username];
    },
    getInfo:config=>{
        const { token } = param2Obj(config.url);
        if(userMap[token]){
            return userMap[token];
        }else{
            return Promise.reject('a');
        }
    },
    logout:()=>'success',
};