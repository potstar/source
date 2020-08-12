<template>
    <div class="sidebar-wrapper"
         :class="{
             close:isCollapse,
             private:!isPublic,
         }">
         <!-- 导航与滚动条 -->
        <el-scrollbar wrap-class="scrollbar-wrapper"
                      class="sidebar-container">
            <el-menu :collapse="isCollapse"
                     :default-active="$route.path"
                     unique-opened
                     mode="vertical"
                     :background-color="menuStyle.backgroundColor"
                     :text-color="menuStyle.textColor"
                     :active-text-color="menuStyle.activeTextColor"
                     style="border:none"
                     class="menu">
                <SidebarItem :routes="routers"/>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import {mapGetters} from 'vuex'
export default {
    name:'Sidebar',
    components:{
        SidebarItem,
    },
    data(){
        return {
            menuStyle:{
                backgroundColor:'#001529',
                textColor:'#A6ADB4',
                activeTextColor:'#03386E',
            },
        };
    },
    computed:{
        ...mapGetters(['routers']),
        isCollapse(){
            return !this.$store.getters.sidebar.opened;
        },
        isPublic(){
            return false;
        },
    },
    created(){
        if(!this.isPublic){
            this.menuStyle.textColor="#fff";
            this.menuStyle.activeTextColor='#fff';
        }
    },
    methods:{
      
    },
};
</script>
<style rel="stylesheet/scss" lang="scss">
/* 二级菜单背景色 */
.el-submenu .el-menu {
  background-color: #000c17 !important;
}
.private .el-submenu .el-menu,.private .el-menu-item,.private .el-submenu__title {
  background-color: rgba(255, 255, 255, 0) !important;
}
/* 侧边栏hover（收起状态的左边栏不在app中，所以无法使用scoped） */
.el-menu-item,
.el-submenu > .el-submenu__title {
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-menu-item:hover,
.el-submenu > .el-submenu__title:hover {
  color: #fff !important;
}
.private .el-menu-item:hover,
.private .el-submenu > .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
/* 侧边栏选中 */
.el-menu-item.is-active {
  background-color: #1890ff !important;
  color: #fff !important;
}
.private .el-menu-item.is-active {
  background-color: rgba(255, 255, 255, 0.3) !important;
  color: #fff !important;
}
#app {
  // 打开子菜单的父级菜单
  .el-submenu.is-active > .el-submenu__title {
    color: #fff !important;
    .el-submenu__icon-arrow {
      color: #fff !important;
    }
  }
  .close {
    .sidebar-container {
      width: 36px !important;
    }
    .main-container {
      margin-left: 36px;
    }
    .submenu-title-noDropdown {
      padding-left: 10px !important;
      position: relative;
      .el-tooltip {
        padding: 0 10px !important;
      }
    }
    .el-submenu {
      overflow: hidden;
      & > .el-submenu__title {
        padding-left: 20px !important;
      }
    }
    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }
  .sidebar-container .nest-menu .el-submenu > .el-submenu__title,
  .sidebar-container .el-submenu .el-menu-item {
    min-width: 200px !important;
  }
  .el-menu--collapse .el-menu .el-submenu {
    min-width: 200px !important;
  }

  //适配移动端
  .mobile {
    .main-container {
      margin-left: 0px;
    }
    .sidebar-container {
      transition: transform 0.28s;
      width: 200px !important;
    }
    &.close {
      .sidebar-container {
        transition-duration: 0.3s;
        transform: translate3d(-200px, 0, 0);
      }
    }
  }
  .withoutAnimation {
    .main-container,
    .sidebar-container {
      transition: none;
    }
  }
}

.el-menu--vertical {
  left: 35px !important;
  & > .el-menu {
    .SvgIcon {
      margin-right: 16px;
    }
  }
}
</style>

<style scoped>
/* 阻止底部显示横向滚动条 */
.sidebar-wrapper >>> .scrollbar-wrapper {
  overflow-x: hidden !important;

}
/* 让垂直滚动条完全贴合右侧容器 */
.sidebar-wrapper >>> .el-scrollbar__bar.is-vertical {
  right: 0px;
}
/* 隐藏水平滚动条 */
.sidebar-wrapper >>> .is-horizontal {
  display: none;
}
.sidebar-wrapper.close .menu >>> a > li {
  padding-left: 10px!important;
}
/* 放大缩小过程中没有这个动画很丑 */
.sidebar-wrapper >>> .el-menu {
  border: none;
  width: 100% !important;
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
.private {
  background: url("~@/assets/leftsidebg.png") no-repeat;
  background-size: 100% 100%;
  .menu {
    background-color: rgba(0,0,0,0)!important;
  }
}

// 侧边栏
.sidebar-wrapper {
  width: 210px;
  height: 100%;
  position: absolute;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width 0.28s;
  background-color: #001529;
  &.close {
    width: 36.33px;
  }
  // 姓名及下拉菜单
  .user-container {
    position: absolute;
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-bottom: 1px solid #313c47;
    &.close .el-dropdown {
      display: none;
    }
    .el-dropdown {
      color: rgb(166, 173, 180);
      cursor: pointer;
    }
    .icon{
      width: 1.5em;
      height: 1.5em;
      vertical-align: -5px;
    }
  }
  .sidebar-container {
    transition: width 0.28s;
    width: 200px !important;
    position: fixed;
    // font-size: 0px; 移除子项上下间隙
    top: 55px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
}
</style>
