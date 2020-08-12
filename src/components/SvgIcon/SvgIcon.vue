<!--
/*
 * @Author: potstar 
 * @Date: 2020-02-15 16:17:22 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-02-15 18:17:48
   @file svg图标组件，在src\icons\autoImprotSvg.js中加载
 */
 -->
 <template>
    <svg :class="svgclass" aria-hidden="ture">
        <use :xlink:href="iconName" />
    </svg>
 </template>
 
 <script>
    export default{
        name:'SvgIcon',
        props:{
            iconClass:{
                type:String,
                required:true,
            },
            className:{
                type:String,
                default:'',
            },
        },
        computed:{
            iconName(){
                return `#icon-${this.iconClass}`;
            },
            svgclass(){
                if(this.className){
                    return `SvgIcon ${this.className}`
                }
                return 'SvgIcon';
            },
        },
    };
</script>
<style scoped>
.SvgIcon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>