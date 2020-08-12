<template>
    <div class="CrudTable">
        <BaseTable :url="`${tableUrl}/list`"
                    method="post"
                    :columns="columns"
                    >
            <!-- 自定义按钮 -->
            <template slot="btnBarPrevBtn">
                <slot name="btnBarPrevBtn"/>
            </template>
            <!-- 操作列 -->
            <template slot="edit" slot-scope="scope">
                <el-button v-if="view.edit"
                            icon="el-icon-edit-outline"
                            type="success"
                            size="small"
                            @click="editHand(scope.row)">
                            {{text.edit}}
                </el-button>
            </template>
            <template slot="del" slot-scope="scope">
                <el-button v-if="view.del"
                            icon="el-icon-delete"
                            type="danger"
                            size="small"
                            @click="delHand(scope.row)">
                            {{text.del}}
                </el-button>
            </template>
            <!-- 添加按钮 -->
            <el-button v-if="view.btnAdd"
                        slot="btnAdd"
                        type="primary"
                        icon="el-icon-plus"
                        size="small"
                        @click="btnAdd(scope.row)">{{text.add}}</el-button>
            <!-- 导出按钮 -->
            <el-button v-if="view.btnExport"
                        slot="btnExport"
                        slot-scope="scope"
                        type="primary"
                        icon="el-icon-download"
                        size="small"
                        @click="btnExport(scope)">{{text.export}}</el-button>
            <h4 slot="tableTitle"
                v-if="view.title">{{tableTitle}}</h4>
        </BaseTable>
        <BaseFormDialog ref="dialog"
                        :tableTitle="tableTitle"/>

    </div>
</template>

<script>
import BaseTable from '../BaseTable/BaseTable.vue';
import BaseFormDialog from '../BaseDialog/BaseFormDialog.vue'
export default {
    name:'CrudTable',
    components:{
        BaseTable,
        BaseFormDialog
    },
    data(){
        return {
           
            gridData:[],
            columns:[]
        }
    },
    props:{
        tableName:{
            type:String,
            default:'',
        },
        tableTitle:{
            type:String,
            default:'',
        }
    },
    mounted(){
        this.columns=[{"prop":"username","label":"用户名","width":"140px",searchable:true},
        {"prop":"password","label":"密码","width":"140px"},
        {"prop":"roleName","label":"角色","width":"140px"},
        {"prop":"bandStatus","label":"状态","width":"140px"}];
    },
    computed:{
         tableUrl() {
            return `${this.tableName.replace(/_/g, '/')}`;
        },
        text(){
            return {
                add:'添加',
                exit:'编辑',
                del:'删除',
                export:'导出',
            }
        },
        view(){
            return{
                title:true,
                btnAdd:true,
                btnExport:true,
                del:true,
                edit:true,
            }
        }
    },
    methods:{
        btnAdd(){
            this.visible=true;
        },
        btnExport(){

        },
        editHand(row){
            this.$refs.dialog.showDialog(row);
        },
        delHand(row){

        },
       
    }
}
</script>