/*
 * @Author: potstar 
 * @Date: 2019-10-08 21:18:47 
 * @Last Modified by: potstar
 * @Last Modified time: 2019-10-08 22:28:56
 */
<template>
    <navbar>
        <a class="logo"></a>
        <ul >
            <li >
                <a class="nav-link">&#9776;</a>
            </li>
            <li>
                <router-link to="#">
                <p></P>
                <p>留言管理</p>
                </router-link>
            </li>
            <router-link to="#">
                <p></P>
                <p>浏览排行</p>
                </router-link>
        </ul>
    </navbar>
    
</template>
<script>
import navbar from './layout/Navbar'
export default {
    name: 'header',
    components:{
        navbar,
    },

}
</script>
<style scoped>
li{
    list-style: none;
    float: left;
    height: 55px;
    margin-bottom: 0;   
}
a{
    text-decoration:none;
    float: left;
    margin-left: 50px;
    padding-bottom: 0;
}
.nav-link{
    text-align: center
}
.logo{
    display: inline-block;
    width: 155px;
    height: 55px;
    padding: .5rem 1rem;
    margin-left: 0;
    background-image: url("../assets/img/logos.png");
    background-repeat: no-repeat;
    /* background-position: center center; */
    background-size: 150px auto;
    border-bottom: 1px solid #cfd8dc;
}
</style>