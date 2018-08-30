<template>
  <div class="container">
    <div class="title">
      <span>请选择要反馈的问题</span>
    </div>
    <div class="borderTop">
      <div class="quslist" @click="backChoose">
        <span>地点不存在</span>
        <img class="arrow" src="../../assets/Back.svg">
      </div>
      <div class="quslist">
        <span>门店已关闭</span>
        <img class="arrow" src="../../assets/Back.svg">
      </div>
      <div class="quslist">
        <span>门店信息有误</span>
        <img class="arrow" src="../../assets/Back.svg">
      </div>
      <div class="quslist">
        <span>门店违规</span>
        <img class="arrow" src="../../assets/Back.svg">
      </div>
      <div class="quslist">
        <span>我是该门店店主</span>
        <img class="arrow" src="../../assets/Back.svg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    backChoose() {
      wx.navigateTo({
        url: '/pages/feedbackChoose/main'
      })
    },

  },

  created() {},

  components: {

  },
}

</script>
<style scoped>
.title {
  padding: 10px 10px
}

.title span {
  font-size: 14px;
  color: #8492A6;
}

.quslist {
  display: flex;
  padding: 0px 10px;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EFF2F7;
}

.quslist span {
  font-size: 16px;
  color: #475669;
  line-height: 16px
}

</style>
