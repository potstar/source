<template>
    <el-dialog v-if="visble"
               ref="dialog"
               :title="dialogTitle"
               :visible.sync="visible"
               width="95%">
        <BaseForm :values="formValues"/>      
    </el-dialog>
</template>
<script>
import BaseForm from '../BaseForm/BaseForm.vue'
export default {
    name:'DesigneTableDialog',
    components:{
        BaseForm,
    },
    data(){
        return {
            //对话框文本框预填写的值（用于编辑时使用）
            formValues:{}
        }
    }
}
</script>