<!--/*
 * @Author: potstar 
 * @Date: 2020-03-11 16:18:05 
 * @Last Modified by:   potstar 
 * @Last Modified time: 2020-03-11 16:18:05 
 */
 框架布局
-->
<template>
    <div class="app-wrapper" >  
        <Sidebar/>
        <div class="main-container" :class="classObj">
            <!-- <TagsView/> -->
            <Navbar/>
            <TagsView/>
            <div class="content-container">
                <AppMain/>
            </div>
        </div>
    </div>
</template>
<script>
import { Sidebar, AppMain ,Navbar,TagsView} from '@/views/layout/components';
export default {
    name:'Layout',
    components:{
        Sidebar,
        AppMain,
        Navbar,
        TagsView
    },
    computed:{
        sidebar(){
            return this.$store.state.layout.sidebar;
        },
        classObj(){
            return {
                hiddenSidebar:!this.sidebar.opened,
                openSidebar:this.sidebar.opened,
            };
        }
    },
    
}
</script>
<style lang='scss'  scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  // 主体区域
  .main-container {
    height: 100%;
    // width: 100%;
    transition: margin-left 0.28s;
    padding-left: 0px;
    position: relative;
  }
  .main-container.openSidebar{
      margin-left: 210px;
  }
  .main-container.hiddenSidebar{
      margin-left: 36px;
  }
  .content-container {
    position: absolute;
    top: 100px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-left: 10px;
  }
}
.drawer-bg{
        background: #000;
        opacity: 0.3;
        width: 100%;
        top:0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

</style>

