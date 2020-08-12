import axios from "axios";
const server=axios.create(
    {
        baseURL:"http://127.0.0.1:8081/",
        timeout:60*1000,
        headers:{
            // "Access-Control-Allow-Credenttitals":true
        }
    }
)
export default server