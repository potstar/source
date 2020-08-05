/*
 * @Author: potstar 
 * @Date: 2019-09-22 13:04:38 
 * @Last Modified by: potstar
 * @Last Modified time: 2020-03-09 15:56:12
 */

const path=require('path');
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

function resolve(dir){
    return path.join(__dirname,'.',dir)
}


module.exports={
    publicPath:'./',
    outputDir:process.env.VUE_APP_OUTPUTDIR,
    assetsDir:'./assets',
    lintOnSave:false,
    devServer:{
        port:8085,
        disableHostCheck:true,
        hotOnly:true,
    //     proxy:
    //     // 'http://127.0.0.1:9101',
    //     {
    //         '/api':{
    //             target:'http://127.0.0.1:9101',
    //             // ws:true,
    //             ChangeOrigin:true,
    //             pathRewrite:{
    //                 '^/api':''
    //             }
    //         }
    //     }
    },
   chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve("src"));
    config.module.rule('svg').exclude.add(resolve('src/icons'));
    config.module.rule('svg-sprite-loader')
    .test(/.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({symbolId:'icon-[name]',
           })
   }

}