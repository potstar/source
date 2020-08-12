
<!--
/*
 * @Author: potstar 
 * @Date: 2020-08-08 15:51:09 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-08-08 17:53:00
 */
 基础表单组件
-->
<template>
    <div class="baseForm">
        <el-form size="small">
            <template v-for="item in data.list">
                <template v-if="item.type=='grid'">
                    <el-row :key="item.key"
                            type="flex">
                        <el-col v-for="(col,colIndex) in item.columns"
                                :key="colIndex"
                                :span="col.span">
                            <template v-for="(citem,ckey) in col.listc">
                                <BaseFormItem :key="ckey"
                                              :widget="citem"
                                              :models.sync="models"></BaseFormItem>
                            </template>
                        </el-col>
                    </el-row>
                </template>
            </template>
        </el-form>
    </div>
</template>
<script>
import BaseFormItem from './BaseFormItem.vue';
export default {
    name:'BaseForm',
    components:{
        BaseFormItem,
    },
    props:['value','columns'],
    data(){
        return {
            models:{},
            data:{}
        }
    },
   created(){
       this.getModels();
   },
    methods:{
        getModels(){
        this.models[this.value.username]=this.value.username;
        this.models[this.value.roleName]=this.value.roleName;
        this.data={
            list:
        [
        {type:'grid',columns:[{span:200,
        listc:[
            {type:'textarea',name:'用户名',options:{dataType:'string',placeholder:this.value.username}},
            {type:'input',name:'角色',options:{dataType:'string',placeholder:this.value.roleName}},]
        }]}]
        }
        },
    }

}
</script>