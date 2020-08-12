<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="app-breadcrumb">
        <el-breadcrumb-item v-for="(item) in Leavlist" :key="item.path">
            <!-- <sapn v-if="item.redirect==='noredirect'" class="no-redirect">{{item.meta.title}}</sapn> -->
            <a  @click.prevent="handLink(item)">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    name:'Breadcrumb',
    data(){
        return {
            Leavlist:null,
        }
    },
    methods:{
        handLink(){

        },
        getBreadcrumb(){
            let matched=this.$route.matched.filter(
                item=>item.meta && item.meta.title
            )
            const first=matched[0]
            if (!this.isDashboard(first)){
                matched=[{path:'/dashboard',meta:{title:'首页'}}].concat(matched)
            }
            this.Leavlist=matched.filter(
                item=>item.meta && item.meta.title && item.meta.breadcrumb !==false
            )
        },
        isDashboard(route){
            const name=route && route.name;
            if(!name){
                return
            }
            return name.trim().toLocaleLowerCase()==='Dashboard'.toLocaleLowerCase();
        }
    },
    created(){
        this.getBreadcrumb()
    },
    watch:{
        $route(route){
             if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
        }
    }
}
</script>
<style lang='scss' scoped>
.app-breadcrumb.el-breadcrumb{
    display: inline-block;
    font-size: 17px;
    line-height: 40px;
    margin-left: 10px;
    // z
}
</style>