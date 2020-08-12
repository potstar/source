<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{msgs}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return  {msgs:''}
  },
  mounted(){
    console.log("12");
    this.axios.get('brand/findAll.do').then((response)=>{
      this.msgs=response.data;
    });
  }
}
</script>
