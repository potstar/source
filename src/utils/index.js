/*
 * @Author: potstar 
 * @Date: 2020-03-14 08:45:51 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-03-14 11:28:26
 */


 export function param2Obj(url){
     const search = url.split('?')[1];
     if(!search){
         return {}
     }
     return JSON.parse(
         '{"'+decodeURIComponent(search).replace(/"/g,'\\"')
         .replace(/&/g,'","').replace(/=/g,'":"')+'"}');
 }