const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
  // 1、入口
  entry:'./src/main.js',
  // 2、出口
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'staic/js/index.js',
    clean:true
  },
  // 3、加载器
  module:{
    rules:[
          {test: /\.css$/i,use:['style-loader', 'css-loader']},
           {test:'/\.less$/i',use:[ "style-loader","css-loader", "less-loader"]},
           {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
           {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
           {
            // 加载图片资料模板
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource',
            parser:{
              dataUrlCodition:{
                MaxSize:4*1024
            }
          }
           },
          {
          // 加载字体文件
            test: /\.(eot|ttf|otf|woff2)$/,
            type: 'asset'
         },
         {
          test: /\.styl(us)?$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'stylus-loader'
          ]
          }

      ]},
    
  // 4、插件
  plugins:[
       new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'index.html')
       }),
       new VueLoaderPlugin()
  ],
  // 5、模式
  mode:'development',
  devServer: {
   // contentBase: path.resolve(__dirname, 'dist'), // html所在路径
   // compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true, // 打包完成后自动打开网页
  },
 //解析路径
 resolve: {
  //别名
  alias: {
      //resolve 获取绝对路径的API，join也可以获取; @ 也可以用 $,就是个 别名
    '@': path.resolve(__dirname, './src')    // 设置 src的绝对路径 
  }
},
}