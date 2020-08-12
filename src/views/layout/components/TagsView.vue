<template>
    <div class="tags-view-container">
        <ScrollPane ref="scrollPane" class="tags-view-wrapper">
            <router-link v-for=" tag in Array.from(visitedView)"
                         ref="tag"
                         :class="isActive(tag)? 'active' : ''"
                         :key="tag.path"
                         :to="tag.path"
                         tag="span"
                         class="tag-view-item"
                         @contextmenu.prevent.native="openMenu(tag,$event)">
                {{tag.title}}
                <span class="el-icon-close" 
                      @click.prevent.stop="closeSelectedTag(tag)"/>
            </router-link>
        </ScrollPane>
        <ul  v-show="visible" class="contextmenu"
            :style="{left:left+'px',top:top+'px'}">
            <li @click="closeSelectedTag(selectedTag)">关闭当前</li>
            <li @click="closeOtherTags">关闭其他</li>
            <li @click="closeAllTags">关闭所有</li>
        </ul>
    </div>
</template>
<script>
import ScrollPane from '@/components/ScrollPane/index.vue';
export default {
    name:'TagsView',
    components:{
        ScrollPane,
    },
    data(){
        return {
            visible:false,
            top:0,
            left:0,
            selectedTag:{},
        }
    },
    computed:{
        visitedView(){
            return this.$store.state.tagView.visitedViews;
        },
    },
    mounted(){
        this.addViewTags()
    },
    watch:{
        $route(){
            this.addViewTags();
            this.moveToCurrentTag();
        },
        visible(value){
            if (value){
                window.addEventListener('click',this.closeMenu);
            }
            else{
                window.removeEventListener('click',this.closeMenu);
            }
        },
    },
    methods:{
        
        isActive(route){
            return route.path===this.$route.path||route.name===this.$route.name;
        },
        addViewTags(){
            const route = this.generateRoute();
            if(!route){
                return false;
            }
            this.$store.dispatch('addVisitedViews',route);
            return null
        },
        generateRoute(){
            if(this.$route.name){
                return this.$route;
            }
            return false;
        },
        moveToCurrentTag(){
            const tags=this.$refs.tag;
            this.$nextTick(()=>{
                for (const tag of tags){
                    if(tag.to===this.$route.path){
                        this.$refs.scrollPane.moveToTarget(tag);
                        break;
                    }
                }
            })
        },
        closeSelectedTag(view){
            this.$store.dispatch('delVisitedViews',view).then(views=>{
                if(this.isActive(view)){
                    const latestView=views.slice(-1)[0];
                    if(latestView){
                        this.$router.push(latestView.path);
                    }
                    else{
                        this.$router.push(this.$store.state.layout.homePagePath);
                    }
                }
            })
        },
        closeOtherTags(){
            this.$router.push(this.selectedTag.path).then(()=>{
                this.moveToCurrentTag;
            });
        },
        closeAllTags(){
            this.$store.dispatch('delAllViews');
            this.$router.push('/');
        },
        openMenu(tag,e){
            this.visible=true;
            this.selectedTag=tag;
            if(!this.sidebar){
                this.left=e.clientx-40;
            }else{
                this.left=e.clientx-180;
            }
            this.top=e.clienty;
        },
        closeMenu(){
            this.visible=false;
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-view-container{
    height: 40px;
    margin-left: 10px;
    box-shadow: 0 1px 3px 1px rgba(69, 65, 78, 0.1),0 0 3px 0 rgba(0, 0, 0, .04);
    background-color: white;
    .tags-view-wrapper{
        margin-bottom: -14px;
        .tag-view-item{
            display: inline-block;
            position: relative;
            cursor: pointer;
            text-decoration: none;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495060;
            background: white;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 4px;
            &:first-of-type{
                margin-left: 15px;
            }
            &:last-of-type{
                margin-left: 15px;
            }
            &.active{
                background-color: #42b983;
                color: white;
                border-color: #42b983;
                &::before{
                    content: '';
                    background: white;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: relative;
                    margin-left: 2px;
                }
            }

        }
    }
    .contextmenu{
        margin: 0;
        background: white;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
        li{
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover{
                background: #eee;
            }
        }
    }
}
</style>
<style lang='scss'>
.tags-view-wrapper{
    .tag-view-item{
        .el-icon-close{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-origin: 100% 50%;
            margin-left: 2px;
            color:#bdbdbd;
            &:before{
                display: inline-block;
                vertical-align: -2px;
            }
            &:hover{
                background-color: #c00;
                color: #ffffff !important;
            }
        }
    }
}
</style>