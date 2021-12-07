module.exports = {
  devServer: {
    port: 8087,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({ 
            unitToConvert: "px", //需要转换的单位，默认为"px"
            viewportWidth: 750, //设计稿的视口宽度   (250px属性值/750)*100  => 33.33vw
            unitPrecision: 3, //单位转换后保留的精度
            propList: ["*"], //能转化为vw的属性列表
            viewportUnit: "vw", //希望使用的视口单位
            fontViewportUnit: "vw", //字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器列表
            minPixelValue: 0, //设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, //媒体查询里的单位是否需要转换单位
            replace: true, //是否直接更换属性值，删除旧属性
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          }),
        ],
      },
    },
  },
};
