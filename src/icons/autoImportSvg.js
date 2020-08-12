/*
 * @Author: potstar 
 * @Date: 2020-02-15 16:13:00 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-02-15 18:44:21
 * 
 * 用于自动导入svg图标，再main.js中进行加载
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

//全局注册
Vue.component('SvgIcon',SvgIcon);

const requireAll=requireContext => requireContext.keys().map(requireContext);

const req=require.context('./svg' , true ,  /\.svg$/);

// console.log(req.keys().map(req));

requireAll(req);