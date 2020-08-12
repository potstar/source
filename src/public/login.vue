/*
 * @Author: potstar 
 * @Date: 2019-09-22 12:38:03 
 * @Last Modified by: potstar
 * @Last Modified time: 2019-10-08 21:54:51
 */
<template>
    <div class="loginmanage">
        <div id="canvascontainer" ref='can'></div>
           <div class="manage-title">品优购运营商运营管理后台</div>
           <div class="loginform">
                <div class="content">
                     <div class="login_header" style="margin-top:20px">
                    <span @click="cur=0" :class="{active:cur==0}">账号登录</span>
                    <span @click="cur=1" :class="{active:cur==1}">快捷登录</span>
                    <span @click="cur=2" :class="{active:cur==2}">扫码登录</span>
                </div>
               <div v-show="cur==0" class="Cbody_item" >   
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
                                  placeholder="邮箱/用户名/手机号">
                                  <template slot="prepend">
                                      <Icon class="icon" name="user"></Icon>
                                  </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                  v-model="loginForm.password"
                                  auto-complete="on"
                                  placeholder="请输入密码"
                                  @keyup.enter.native="handleLogin">
                            <template slot="prepend">
                                <Icon class="icon"
                                      name="lock"></Icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                        <div class="slider">
                            <el-slider v-model="value4" 
                                       :format-tooltip="formatTooltip">滑动验证
                            </el-slider>
                        </div>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button :loading="btnLoginIsLoding"
                                   type="primary"
                                   size="medium" 
                                   @click.native.prevent="handleLogin">
                        登录
                        </el-button>
                    </el-form-item>
                 </el-form>
               </div>
               <div v-show="cur==1" class="Cbody_item">
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
                                  placeholder="手机号">
                                  <template slot="prepend">
                                      <Icon class="icon" name="user"></Icon>
                                  </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                  v-model="loginForm.password"
                                  auto-complete="on"
                                  placeholder="验证码"
                                  @keyup.enter.native="handleLogin">
                            <template slot="prepend">
                                <Icon class="icon"
                                      name="lock"></Icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="btnLoginIsLoding"
                                   type="primary"
                                   size="medium" 
                                   @click.native.prevent="handeLogin">
                        登录
                        </el-button>
                    </el-form-item>
                   </el-form>
               </div>
               <div v-show="cur==2" class="Cbody_item">
                   	<div class="qcode"><img src="../assets/img/wx_cz.jpg" width="160" height="160" alt="二维码"/></div>
					<div class="beizhu">打开手机客户端扫码登录</div>
               </div> 
                </div>
                  
           </div> 
        </div>   
</template>
<script>
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/user";
import "vue-awesome/icons/lock";
import THREE from "@/assets/js/three.min.js";
export default {
    name:"login",
    components:{
        Icon,
    },
    data(){
        return {
            loginForm:{
                username:'',
                password:''
            },
            rules:{
                username:[{
                    required:true,message:'用户名',trigger:'blur'
                }],
                password:[{ required:true,message:'密码',trigger:'blur'}]
            },
            btnLoginIsLoding :false,
            bg:null,
            cur:0,
        }
    },
    computed:{
        isPublic(){
            return true;
        }
    },
    created(){

    },
    mounted(){
        if(!!window.ActiveXObject||'ActiveXObject' in window){
            this.notify(
                {
                    title:'您当前的浏览器版本过低，可能存在安全风险！',
                    message:'建议您使用谷歌浏览器',
                    duration:60000,
                }
            );
        }
        container = document.createElement( 'div' );
        this.$refs.can.appendChild( container );  
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        particles = new Array();
        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial( {
            color: 0x0078de,
            program: function ( context ) {
            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();
            }
        } );
        var i = 0;
        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
            particle = particles[ i ++ ] = new THREE.Particle( material );
            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
            scene.add( particle );
            }
        }
        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'resize', onWindowResize, false );
        animate();
        },
    methods:{
        handleLogin(){
             this.$router.push({ path: '/dashboard' });
        }
    }
}

var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
var container;
var camera, scene, renderer;
var particles, particle, count = 0;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
// animate();
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
//
function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
function onDocumentTouchStart( event ) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
  }
}
function onDocumentTouchMove( event ) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
  }
}
function animate() {
  requestAnimationFrame( animate );
  render();
}
function render() {
  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY - camera.position.y ) * .05;
  camera.lookAt( scene.position );
  var i = 0;
  for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
    for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
      particle = particles[ i++ ];
      particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
      particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
    }
  }
  renderer.render( scene, camera );
  count += 0.1;
}
</script>
<style scoped>
/* .loginmanage{
    background: url("../assets/manage-bg.png")
} */
.loginmanage>>>.el-form-item__error{
    position:absolute;
    right: 0;
    left: inherit;
}
.loginmanage>>>.el-form-item{
    margin-bottom: 20px;
}
.loginmanage{
    background-color: #141a48;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position:absolute
    }

.manage-title{
    width: 550px;
    margin:0 auto;
    font-size: 35px;
    color: #ffff;
    letter-spacing: 10px;
    text-shadow: 3px 3px 0px #646464;
    top: 22%;
    position: relative;
}
.content{
    margin: 0 auto;
}
.loginform{
    width: 420px;
    margin: 0 auto;
    position: relative;
    top:25%
}

#canvascontainer{
  position: absolute;
  top: 0px;
  overflow: hidden;
}
.active{
    color: #3f7dff;
    padding-bottom: 10px;
    border-bottom: 3px solid #3f7dff;
}
.login_header span{
	margin-right: 40px;
	cursor: pointer;
    font-size: 20px;
}
.Cbody_item{
    margin-top: 40px;
    margin-left: 0;
    width: 420px;
    text-align: center;
}
.form_item input[type="submit"]{
	display: block;
	width: calc(100% - 0px);
	height: 40px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #1c65ff;
	transition: ease all 0.5s;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: #1c65ff;
	color: #fff;
	cursor: pointer;
}
/* .form_item input[type="text" ]{
    margin-bottom: 20px;
} */
.el-button--medium{
    width: 100%;
    font-size: 20px;
}
.form_item input[type="submit"]:hover{
	background-color: #3f7dff;
	border: 1px solid #3f7dff;
}
.beizhu{
    margin-top:20px;
    font-size: 30px;
    color: #fff;

}
/* .qcode{
    text-align: center;
} */
</style>