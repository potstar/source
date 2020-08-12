<!--
 * @Author: potstar 
 * @Date: 2020-08-07 15:22:02 
 * @Last Modified by:   potstar 
 * @Last Modified time: 2020-08-07 15:22:02 
 */
查询组件，由BaseTable组件引用
-->


<template>
    <!-- 查询容器 -->
    <div class="search-form-container">
        <!-- 查询表单容器 -->
        <div style="width: 720px" class="form">
            <!-- 表单 添加引用form-->
            <el-form ref="form">
                <!-- 遍历所有可检索字段 -->
                <el-form-item v-for="(condition,paramsIndex) in params"
                              :key="condition.key">
                    <el-select v-model="condition.key"
                               placeholder="请选择查询项"
                               @change="change(paramsIndex)">
                         <!-- 遍历所有可检索字段 -->
                        <el-option v-for="(column,columnIndex) in columns.filter(item=>item.searchable)"
                                   :label="column.label"
                                   :key="columnIndex"
                                   :value="column.prop"></el-option>
                    </el-select>
                    <el-select v-model="condition.operator"
                               placeholder="选择查询条件"
                               style="width:160px">
                        <!-- 遍历操作类型列表 -->
                        <el-option v-for="(item,index) in operatorList"
                                   :key="index"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                     <!--输入input条件值 -->
                    <SearchFormItem :options="options"/>
                    <!-- 条件删除 -->
                    <el-tooltip class="item"
                                effect="dark"
                                content="删除该条件"
                                placement="left">
                        <el-button style="margin-left:20px"
                                    icon="el-icon-delete"
                                    @click="btnRemove(paramsIndex)"></el-button>
                    </el-tooltip>
                </el-form-item>
            </el-form>
        </div>
        <!--查询添加数量控制-->
        <div style="margin-bottom: 20px;">
            <el-tooltip class="item"
                        effect="dark"
                        content="添加查询条件"
                        placement="top">
                <el-button icon="el-icon-plus"
                        @click="btnAdd()"></el-button>
            </el-tooltip>
            <el-button type="primary"
                        icon="el-icon-search"
                        @click="btnSearch()"
                        >查询</el-button>
        </div>
    </div>
</template>
<script>
import SearchFormItem from "./SearchFormItem"
export default {
    name:'SearchFrom',
    components:{
        SearchFormItem,
    },
    props:{
        columns:{
            type:Array,
            required:true,
        }
    },
    data(){
        return {
            params:[],
            operatorList:[
                {label:'包含',
                 value:'like'},
                {label:'等于',
                 value:'eq'},
                {label:'大于',
                 value:'gt'}
            ],
            options: {
                type: 'input',
                dataType: 'string',
                placeholder: '',
            }
        }
    },
    methods:{
        btnAdd(condition={key:null,operator:null,value:null}){
            this.params.push(condition);
        },
        btnSearch(){

        },
        btnRemove(index){
            this.params.splice(index,1);
            if(this.params.length===0){
                this.btnAdd();
            }
        }
    },
    created(){
        this.btnAdd();
    }
}
</script>
<style lang="scss" scoped>
.search-form-container{
    &>div{
        float: left;
    }
}
</style>