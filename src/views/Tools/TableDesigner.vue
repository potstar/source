<template>
    <div class="pageContianer">
        <CrudTable :tableTitle='table.title'
                   :tableName='table.name'/>
        <DesigneTableDialog ref="dialog"
                            tableName='table.name'/>
    </div>
</template>
<script>
import CrudTable from "@/components/CurdTable/CrudTable.vue";
import DesigneTableDialog from "@/components/DesigneTable/DesigneTableDialog.vue"
export default {
    name: 'TableDesigner',
    components:{
        CrudTable,
        DesigneTableDialog,
    },
    data(){
        return {
            table:{
                title:'所有表格设计一览',
                name:'designed_tables'
            }
        }
    }
    
}
</script>