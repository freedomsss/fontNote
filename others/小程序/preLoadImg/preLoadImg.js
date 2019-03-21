/**
 * 图片预加载组件
 */
Component({
  properties: {
    //默认图片
    defaultImage: String,
    //原始图片
    originalImage: String,
  },
  data: {
    finishLoadImg: false
  },
  methods: {
    finishLoad: function (e) {
      this.setData({
        finishLoadImg:true
      })
    },
    loadErr(e){
      if (e.type === 'error') {
        this.setData({
          finishLoadImg:false
        })
      }
    },
  }
});
