<template>
   
    <div class="page-container">
        train
         <!-- 声明式渲染 -->
        <!-- 1、文本插值 -->
        {{message}}
         <!-- 2、元素绑定 -->
        <span class="title" v-bind:title="message1">
            动态绑定
        </span>
        <!-- 条件与循环 -->
        <div class="app3">
            <p v-if="seen">现在看得见</p>
            <ol>
                <li v-for="value in datas" :key=value.index>
                    {{value.content}}
                </li>
            </ol>
             <!-- <Icon type="compose" size="30" color="#2d8cf0"></Icon> -->
        </div>
        <div class="button">
            <button @click="reverseMessage">反转</button>
        </div>
        <!-- 双向绑定 -->
        <div class="app6">
            <input v-model="message" placeholder="请输入">
        </div>
    </div>
   

</template>
<script>
export default {
    name:'train',
    data(){
        const text=[{content:'hello'},
        {content:'浔阳江头夜送客，枫叶获花秋瑟瑟。'},
        {content:'主人下马客在船，举杯欲饮无管弦。'},
        {content:'醉不成欢参将别，别时茫茫江浸月。'},
        {content:'忽闻水上琵琶声，主人忘归客不发。'},
        {content:'寻声暗问弹着谁，琵琶声停歇语迟。'},
        {content:'移船相近邀相见，添酒回灯重开宴。'},
        {content:'千呼万唤始出来，犹抱琵琶半遮面。'},
        {content:'转轴拨弦三两声，未成曲调先有情。'},
        {content:'弦弦掩抑声声思，似诉平生不得志。'},
        {content:'低眉信手续续弹，说尽心中无限事。'}]
        return {
            message:'hello world ! ! !',
            message1:'页面加载于'+new Date().toLocaleString(),
            seen:true,
            datas:text
        }
    },
    methods:{
        reverseMessage(){
            this.message=this.message.split(' ').reverse().join(' ')
        },
    }
}
</script>