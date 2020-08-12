<template>
    <navbar>
        <button class="navbar-toggler mobile-siderbar-toggler dlg-none" 
                type="button" 
                @click="mobileSidebarToggle">&#9776;</button>
        <a class="navbar-brand"></a>
        <ul class="nav navbar-nav d-md-down-none">
            <li class="nav-item">
                <a class="nav-link navbar-toggler sidebar-toggler" 
                @click="sidebarMinimize">&#9766;</a>
            </li>
        </ul>
        <ul class="nav navbar-nav d-md-down-none">
            <li class="nav-item header-item">

                <router-link tag="div" to="/" style="height:55px;"
                             class="nav-link">
                             <p><Icon type="compose" size="30"
                                      color="#2d8cf0"></Icon></p>
                            <p style="color:white">留言管理</p>
                </router-link>
            </li>
        </ul>
    </navbar>
</template>
<script>
import navbar from './navbar'
export default {
    name:'header',
    components:{navbar,},
    methods:{
        sidebarMinimize(e){
            e.preventDefault();
            document.body.classList.toggle('siderbar-minimized')
        },
        mobileSidebarToggle (e) {
            e.preventDefault()
            document.body.classList.toggle('sidebar-mobile-show')
        },
    }
}
</script>
<style  scoped>
.header-item{
    width:130px;
    height:55px;
    padding: 15px;
}
.header-item a{
    color:white !important;
}
</style>