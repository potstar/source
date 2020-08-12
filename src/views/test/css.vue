<template>
    <div class="css">
        <ul class="css">
            <li v-for="item in data" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'css',
    data(){
        return {
            data:[1,2,2,3,4,5],
        }
    }
}
</script>