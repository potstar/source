<!--
搜索中填写form表单组件，在SearchForm中引用。
根据不同的输入类型渲染
-->
<template>
    <span v-if="options.type=='input'">
        <el-input :type="options.dataType"
                  :placeholder="options.placeholder"></el-input>
    </span>
</template>

<script>
export default {
    props:{
        options:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>
<style lang="scss" scoped>
span > *{
    width:230px !important;
}
</style>