<!-- 地图 -->
<template>
  <div id="container" ref="container">
    hhhh
  </div>
</template>
<script>
import QQMapWX from "../../utils/map";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
export default {
  data() {
    return {

    }
  },
  // metaInfo: {
  //   script: [{src: "http://map.qq.com/api/js?v=2.exp&key=JMUBZ-QZQCV-QQCPP-UMJO4-UN3US-D3FZK"}]
  // },

  mounted() {
    qqmapsdk.geocoder({
      address: '北京市海淀区彩和坊路海淀西大街74号',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res);
      }
    });
  },
  methods: {
    ccc() {
      var myLatlng = new qq.maps.LatLng(31.584617993869276, 120.29067993164062);
    }

  },

  created() {

  },

  components: {

  },
}

</script>
<style scoped>
#container {
  min-width: 600px;
  min-height: 767px;
}

</style>
