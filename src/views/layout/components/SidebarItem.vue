<!--/*
 * @Author: potstar 
 * @Date: 2020-03-12 11:24:03 
 * @Last Modified by:   potstar 
 * @Last Modified time: 2020-03-12 11:24:03 
 */
-->
<template>
    <div class="menu-wrapper">
        <template v-for="item in routes">
            <router-link v-if="!item.hidden&&item.noDropdown &&item.children.length>0"
                        :key="item.name"
                        :to="item.path+'/'+item.children[0].path">
                        <el-menu-item :index="item.path+'/'+item.children[0].path">
                            <SvgIcon v-if="item.icon"
                                        :icon-class="item.icon" /> {{ item.children[0].meta.title }}
                        </el-menu-item>
            </router-link>
            <el-submenu v-if="!item.noDropdown&&!item.hidden"
                        :index="item.name"
                        :key="item.name">
                <template slot="title">
                    <SvgIcon v-if="item.icon"
                             :icon-class="item.icon"/>{{item.title}}
                </template>
                <template v-for="child in item.children">
                    <sidebar-item v-if="child.children&&child.children.length>0"
                                  :key="child.name"
                                  :routes="[child]"
                                  class="menu-indent"/>
                    <router-link v-else
                                 :to="item.path+'/'+child.path"
                                 :key="child.name"
                                 class="menu-indent">
                        <el-menu-item :index="item.path+'/'+child.path">
                        {{child.meta.title}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>
<script>
export default {
    name:'SidebarItem',
    props:{
        routes:{
            type:Array,
            default:()=>[],
        }
    },
};
</script>
<style lang="scss"  scoped>
.SvgIcon{
    margin-right: 0.6em;
    width: 1.3em;
    height: 1.3em;
    vertical-align: -0.4em !important;
}
.hideSiderbar,.menu-indent{
    display: block;
    text-indent: 1em;
    text-decoration: none;
}
</style>