import axios from 'axios';
import vue from 'vue';

const service=axios.create({
    baseURL:'/',
    // baseURL: process.env.VUE_APP_URL,
    timeout:5000
});

service.interceptors.request.use(config=>
    {
        return config;
    },error=>{
        Promise.reject(Error);
    })
    service.interceptors.response.use(
        response=>response,
        error=>{
            vue.$Message.error({
                message:error.message,
                duration:5*1000,
                closable:true
            });
            return Promise.reject(error);
        }
    )
export default service;