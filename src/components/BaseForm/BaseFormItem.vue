<!--/*
 * @Author: potstar 
 * @Date: 2020-08-08 15:04:51 
 * @Last Modified by:   potstar 
 * @Last Modified time: 2020-08-08 15:04:51 
普通表单相加载组件


 */-->
<template>
    <div class="formItem">
        <el-form-item :label="widget.name">
            <template v-if="widget.type=='input'">
                <el-input v-if="widget.options.dataType == 'number'
                                || widget.options.dataType == 'integer'
                                || widget.options.dataType == 'float'"
                                :type="widget.options.dataType"
                                v-model.number="dataModel"
                                ></el-input>
                <el-input   v-else
                            :type="widget.options.dataType"
                            v-model="dataModel"
                            :placeholder="widget.options.placeholder"></el-input>
            </template>
            <template v-if="widget.type == 'textarea'">
                <el-input type="textarea"
                            :rows="1"
                            v-model="dataModel"
                            :placeholder="widget.options.placeholder"></el-input>
            </template>
        </el-form-item>
    </div>
</template>
<script>
export default {
    name:'BaseFormItem',
    //widget表单布局json,models表单数据体
    props:['widget','models',],
    data(){
        return {
            dataModel:this.models[this.widget.options.placeholder]
        }
    },
    
    created(){
        console.log(this.widget.options.placeholder)
    }
}
</script>