<!--
/*
 * @Author: potstar 
 * @Date: 2020-02-15 16:02:43 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-03-15 18:42:08
 */
#ctrl+Alt+i 添加文件信息
使用SVG图标，
1.建立图标组件svgicon.vue
2.新建文件icons下svg文件存放图标和js文件导入文件和图标组件,注册全局组件，加载图标文件，
3.使用svg-sprite-laoder工具编排为svg，symbol组图，在vue.config.js中配置文件编译。
4.使用图标。
-->
<template>
    <div class="page-container" :style="{backgroundImage: `url(${bg})`}">
        <!-- 登录框外部容器，用于定位 -->
        <div class="login-container">
            <!-- svg重写标题样式 -->
            <SvgIcon v-if="isPublic"
                     class="loginTitle"
                     icon-class="publicLoginTitle"/>
            <SvgIcon v-else
                     class="loginTitle"
                     icon-class="loginTitle"/>
            <!-- 表单 -->
            <el-form :model="loginForm"
                     ref="loginForm"
                     class="login-form"
                     auto-complete="on"
                     :rules="rules"
                     label-position="left">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username"
                              type="text"
                              auto-complete="on"
                              placeholder="请输入账号">
                        <template slot="prepend">
                            <Icon class="icon" name="user"></Icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input  v-model="loginForm.password"
                                type="password"
                                auto-complete="on"
                                placeholder="请输入密码"
                                @keyup.enter.native="handleLogin">
                        <template slot="prepend">
                            <Icon class="icon" name="lock"></Icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="btnLoginIsLoading"
                                type="primary"
                                size="medium"
                                style="width:100%"
                                @click.native.prevent="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/lock';
export default {
    name:'login',
    components:{Icon,
    },
    data(){
        return {
            bg:null,
            loginForm:{
                username:'',
                password:'',
            },
            rules:{
                username:[{required:true,message:'请输入账号',trigger:'blur'},
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                ]
            },
            btnLoginIsLoading:false,
        }
    },
    computed:{
        isPublic(){
            return false;
        }
    },
    created(){
        if(this.isPublic){
            this.bg=null;
        }else{
            this.bg=require('@/assets/login/loginbg.png');
        }
    },
    methods:{
        handleLogin(){
            // 
            this.$refs.loginForm.validate(valid => {
                if(valid){
                    this.loading=true;
                    
                    this.$store.dispatch('setTokenByLogin',this.loginForm).then(
                        ()=>{
                            this.$message.success('登陆成功');
                            this.loading=false;
                            this.$router.push({path:'/dashboard'});
                        }
                    ).catch((error) =>{
                        this.loading=false;
                    })
                }
            })
            // this.$router.push({path:'/dashboard/train'});
        },
    }
}
</script>

<style rel="stylesheet/scss"  scoped>
.page-container{
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #1c77ac;
    padding: 0;
    overflow: hidden;
    min-height: 450px;
    }
 .loginTitle{
        width: 673px;
        height: 60px;
        color: white;
        position: relative;
        left: 50%;
        margin: 0 0 60px -260px;
    }
.login-container{
        position: relative;
        z-index: 10;
        width: 550px;
        height: 379px;
        margin: -180px auto 0 auto;
        top: 45%;
}
.login-form {
        clear: none;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 45px 60px 17px 60px;
        border-radius: 4px;
        }
</style>