<template>
    <div class="heads">
      <Hamburger :toggle-click="toggleSideBar"
                 :is-active="!sidebar"
                 class="hamburger-container"/>
      <Breadcurmb class="breadcrum-container"/>
    </div>
</template>
<script>
import Hamburger from '@/components/Hamburger/Hamburger.vue'
import Breadcurmb from '@/components/Breadcrumb/Breadcrumb.vue'

export default {
    name:'titleTag',
    components:{Hamburger,
                Breadcurmb,
                },
    data(){
        return {
         
        }
    },
    methods:{
        toggleSideBar(){
            this.$store.dispatch('ToggleSideBar');
            setTimeout(()=>{
                window.dispatchEvent(new Event('resize'));
            },250);
        },
    },
    computed:{
        sidebar() {
           return this.$store.getters.sidebar.opened;
    },
    }
}
</script>
<style lang='scss' scoped>
.heads{
   
    .hamburger-container {
    padding: 10px 0 0 11px;
    float: left;
  }
  .breadcurmb-container{
      float: left;
  }
}
</style>