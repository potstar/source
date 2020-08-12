<template>
      <el-dialog v-if="visible"
             ref="dialog"
             :title="dialogTitle"
             :visible.sync="visible">
    <!-- 对话框内动态表单 -->
    <BaseForm ref="BaseForm"
                  :value="formValues"/>
    <el-row type="flex"
            justify="end">
      <el-button type="primary"
                 icon="el-icon-check"
                 @click="btnSave_onClick()">保存</el-button>
      <el-button icon="el-icon-close"
                 @click="btnCancel_onClick()">取消</el-button>
    </el-row>
  </el-dialog>
</template>
<script>
import BaseForm from '@/components/BaseForm/BaseForm.vue'
export default {
    name:'BaseFormDialog',
    components:{
        BaseForm,
    },
    props:{tableTitle:{
        type:String,
        default:'',
    }},
    data(){
        return {
            formValues:{},
            visible:false
        }
    },
    computed:{
        dialogTitle(){
            return this.tableTitle;
        },
    },
    methods:{
         btnSave_onClick(){
            this.visible=false;
        },
        btnCancel_onClick(){
            this.visible=false;
        },
        showDialog(formValues){
            this.visible=true;
            this.formValues=formValues;
        }
    }
}
</script>
