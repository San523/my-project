<!-- 附件好班 -->
<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/headerRight.png">
      <span>附 / 近 / 好 / 班</span>
      <img src="../../assets/headerLeft.png">
    </div>
    <div class="listAll">
      <div class="list" @click="toTrainClassDetails(item,index)" v-for="(item,index) in deTailData">
        <div>
          <img :src="item.titleimg">
        </div>
        <div class="content">
          <div class="name">{{item.classname}} <span>{{item.distance}}米</span></div>
          <div class="adrress">{{item.classadrress}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mptoast from 'mptoast'
import QQMapWX from "../../utils/map";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
export default {
  data() {
    return {
      deTailData: [{
          titleimg: require("../../assets/userImg.png"),
          classname: "鸿途教育",
          classadrress: "湖北省武汉市蔡甸区汉阳大道3545工厂恒大绿洲小区",
          distance: 122,
        },
        {
          titleimg: require("../../assets/userImg.png"),
          classname: "小码王",
          classadrress: "地铁八号线直达新世界百货",
          distance: 122,
        },
        {
          titleimg: require("../../assets/userImg.png"),
          classname: "彩色斑马文化发展有限公司",
          classadrress: "北京市通州区北苑南路16号北苑mini家园A座",
          distance: 122,
        },
        {
          titleimg: require("../../assets/userImg.png"),
          classname: "红蓝色大气培训班",
          classadrress: "上海静安区光复路195A号",
          distance: 122,
        }
      ]
    }
  },

  created() {

  },

  mounted() {
    this.getaroundClass()
  },

  methods: {
    showToast() {
      this.$mptoast('温馨提示', 'success', 2000)
    },

    async post() {
      let res = await this.$post('/design/caseList', { userid: "246cba2c-881e-4b60-a077-b8d57619623a" });
      console.log(res);
    },

    //跳转培训班详情
    toTrainClassDetails(item,index) {
      //console.log(item.classadrress);
      var that = this
      qqmapsdk.geocoder({
        address: item.classadrress,
        success: function(res) {
          //console.log(res);
          //console.log(res.result);
          //item.locationResult = res.result
        },
        fail: function(res) {
          //console.log(res);
          //item.locationResult = res.message
        },
        complete: function(res) {
          var data = JSON.parse(JSON.stringify(item));
          var arr = [];
          var obj = {};
          obj.id = 12;
          arr.push(obj)
          console.log(arr[0])
          wx.navigateTo({
            url: '/pages/trainingClassDetails/main?id=' + JSON.stringify(arr[0])
          })
        }
      });



    },

    //获取总附近好班详情
    getaroundClass() {
      for (var i = this.deTailData.length - 1; i >= 0; i--) {
        // console.log(i);

      }
    },

    //获取地图坐标
    getlocation(v) {
      qqmapsdk.geocoder({
        address: v,
        success: function(res) {
          console.log(res);
          //console.log(res.result);
          return res.result
        },
        fail: function(res) {
          console.log(res);
          return res.message
        },
        complete: function(res) {

        }
      });
    }



  },


  components: {
    mptoast
  },
}

</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: Center;
  margin-top: 10px;
  width: 100%;
}

.listAll {
  border-bottom: 1px solid #EFF2F7;
  margin-top: 10px
}

.header img {
  width: 45px;
  height: 20px;
  display: inline-block;
}

.header span {
  vertical-align: middle;
  line-height: 16px;
  font-size: 16px;
  color: #1F2D3D;
  font-weight: bold;
  margin: 5px 11px;
  font-family: PingFangSC-Medium;
}


.list {
  box-shadow: 0px -1px 0px 0px rgba(239, 242, 247, 1);
  display: flex;
  padding: 10px 10px;
  background: #FFFFFF
}

.list img {
  width: 72px;
  height: 72px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 1);
}

.content {
  padding: 0 10px;
  width: 100%;
}

.name {
  color: #475669;
  font-size: 16px;
  margin-bottom: 10px
}

.name span {
  float: right;
  color: #00C58C;
  font-size: 12px;
}

.adrress {
  color: #5E6D82;
  font-size: 14px
}

</style>
