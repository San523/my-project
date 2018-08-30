<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}

</script>
<style>
/*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/

@import '~@/styles/common.css';

/* this rule will be remove */
/*
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
*/
</style>
