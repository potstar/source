<!--/*
 * @Author: potstar 
 * @Date: 2020-03-11 15:57:37 
 * @Last Modified by:   potstar 
 * @Last Modified time: 2020-03-11 15:57:37 
该组件用于加载二级路由子页面，被layout/layout.vue引用
App.vue==>layout.vue==>Appmian.vue

 */-->
<template>
     <section class="app-main" ref="appmian" @scroll="handleScroll" style="height:100%;">
         <transition name="fade-transiform" mode="out-in">
         <keep-alive :include="cachedViews">
             <router-view :scrollTop="scrollTop" 
                        :key="key" 
                        @viewScroll="viewScroll">
             </router-view>
         </keep-alive>
         </transition>
     </section>
</template>
<script>
export default {
    name:'AppMian',
    data(){
        return {
            scrollTop:0,
        }
    },
    computed:{
        cachedViews(){
            return this.$store.state.tagView.cachedViews;
        },
        key(){
            return this.$route.fullPath;
        },
    },
    methods:{
        handleScroll(){
            this.scrollTop=this.$refs.appmian.scrollTop;
        },
        viewScroll(v){
            this.$refs.appmian.scrollTop=v;
        }
    }
}
</script>
<style scoped>
.appmian{
    width: 100%;
    position: relative;
    overflow: auto;
}
</style>