/*
 * @Author: potstar 
 * @Date: 2020-08-04 16:38:33 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-08-07 17:03:06
 */

<template>
    <div class="base-table">
        <!-- 查询搜索相关 -->
        <SearchForm :columns="columns">
            
        </SearchForm>
        <!-- 表格相关 -->
        <!-- 表格title -->
        <div class="title-bar">
            <slot class="tableTitle"
                name="tableTitle"/>
            <!-- 添加按钮 -->
            <div class="btn-bar">
                <!-- 自定义按钮 -->
                <slot name="btnBarPrevBtn"/>
                <!-- 默认按钮 -->
                <!-- 添加 -->
                <slot name="btnAdd"/>
                <!-- 导出数据 -->
                <slot name="btnExport"/>
            </div>
        </div>
        <!-- 表格主体body -->
        <el-table :data="tableData"
                  style="width: 100%"
                  border
                  :highlight-current-row="highlight"
                  @selection-change="handleSelectionChange"
                  >
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column v-for="(column,columnIndex) in columns"
                                 :key="columnIndex"
                                 :prop="column.prop"
                                 :min-width="column.width"
                                 :label="column.label"
                                 >
                    
                </el-table-column>
                <el-table-column
                    label="操作"
                    min-width="200px">
                    <template slot-scope="scope">
                        <slot name="edit" :row="scope.row"/>
                        <slot name="del" :row="scope.row"/>
                    </template>
                    </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background
                           layout="total,prev, pager, next,sizes"
                           :page-sizes="[10, 20, 30, 40]"
                           :page-size="10"
                           :hide-on-single-page="hideSinglePage"
                           :total="totalPage">
                
            </el-pagination>
        </div>
    </div>
</template>
<script>
import SearchForm from "./SearchForm"
export default {
    name:'BaseTable',
    components:{
        SearchForm
    },
    data(){
        return {
            tableData:[],
            totalPage:100,
            highlight:true,
            hideSinglePage:false,
        }
    },
    props:{
       url: {
                type: String,
            },
        columns:{
            type:Array,
            default:[],
        }
    },
    methods:{
        handleSelectionChange(){
            
        },
        fetchDataList(){
            const {url}=this;
            const param={"username":"a"}
            const requestObject=this.axios({
                url:"/user/list",
                method:'post',
                // data:param,
                params:{page:1,rows:10}
            });
            this.tableData=[{username:"admin",password:"admin",bandStatus:"0",roleName:"vip"}];
             this.totalPage=1
            // requestObject.then((res)=>{
            //     this.tableData=res.data.row;
            //     this.totalPage=res.data.total
            // })
        }
    },
    mounted(){
        this.fetchDataList();
    }


}
</script>
<style lang="scss" scoped>
.title-bar{
    clear: both;
    flex: 1;
    display: flex;
    justify-content: space-between;
    position: relative;
    .btn-bar{
        position: absolute;
        width: 230px;
        text-align: right;
        right: 10px;
    }
}
.pagination{
    position: absolute;
    margin-top: 20px;
    right: 10px;
}
</style>