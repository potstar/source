<template>
    <div class="page-contaainer">
        <CrudTable :table-name="table.name"
                   :tableTitle="table.title"/>
    </div>
</template>
<script>
import CrudTable from '@/components/CrudTable/CrudTable.vue';
export default {
    name:'UserCrud',
    components:{
        CrudTable,
    },
    data(){
        return{
            table:{
                name:'user',
                title:'用户详细信息表'
            }
        }
    }
}
</script>