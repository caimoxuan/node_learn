module.exports= {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.js",//唯一入口文件
  output:{
    path: __dirname + "/public", //打包完成存放的目录
    filename: "bundle.js" //输出文件的名称
  },

  devServer:{
    contentBase: "./public", //本地服务中的加载页面所在的位置
    port: "8888", //缺省默认8080
    historyApiFallback: true, //单页面应用的时候true 所有跳转将指向index.html
    inline: true //开启如果源文件发生改变，自动刷新
  }
}
