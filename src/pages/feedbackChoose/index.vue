<template>
  <div class="container">
    <div class="title">
      <span>反馈问题：</span>
      <span>我是该门店店主</span>
    </div>
    <!-- 单选框 -->
    <div class="selectB">
      <div class="selectBox" @click="changLan('select1')">
        <div class="flex">
          <span class="selectBtn" :class="select1">
          </span><span class="selectCot">门店信息不全，我要补全</span>
        </div>
      </div>
      <div class="selectBox2" @click="changLan('select2')">
        <div class="flex">
          <span class="selectBtn" :class="select2">
          </span><span class="selectCot">我不愿意门店信息出现在该平台上</span>
        </div>
      </div>
      <div class="selectBox2" @click="changLan('select3')">
        <div class="flex">
          <span class="selectBtn" :class="select3">
          </span><span class="selectCot">我想合作，提供更多功能和信息</span>
        </div>
      </div>
    </div>
    <!-- 单选框 -->
    <!-- 备注 -->
    <div class="remark">
      <textarea v-model="remark" fixed="true" placeholder="请描述你的想法和提供您的联系方式，提交后，站长会尽快与您联系"> </textarea>
      <span>0/50</span>
    </div>
    <!-- 备注 -->
    <div class="submit">
      提交
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select1: "select",
      select2: "",
      select3: "",
      remark: "", //备注
    }
  },
  methods: {
    //语言切换
    changLan(v) {
      if (v == "select1") {
        this.select1 = "select";
        this.select2 = ""
        this.select3 = ""
      } else if (v == "select2") {
        this.select2 = "select"
        this.select1 = ""
        this.select3 = ""
      } else if (v == "select3") {
        this.select3 = "select"
        this.select1 = ""
        this.select2 = ""
      }
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

.title span:nth-child(1) {
  font-size: 14px;
  color: #8492A6;
}

.title span:nth-child(2) {
  font-size: 14px;
  color: #00C58C;
}

.selectB {
  background: #ffffff
}

.selectBox {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #E0E6ED;
  border-bottom: 1px solid #E0E6ED;
  margin-top: 10px
}

.selectBox2 {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E0E6ED;
}


.selectBtn {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 0 10px;
}

.select {
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 6px solid #20A0FF;
  border-radius: 12px;
  margin: 0 10px;
}

.remark {
  height: 171px;
  border: 1px solid #E0E6ED;
  padding: 10px 10px;
  margin-top: 10px;
  background: #ffffff;
}

.remark textarea {
  /*border: none;*/
  width: 100%;
  resize:none;
  height: 85%;
  font-size: 16px;
}

.remark span {
  float: right;
  font-size: 16px;
  color: rgba(192, 204, 218, 1);
}

.selectCot {
  font-size: 16px;
  color: #475669;
  line-height: 16px
}

.submit {
  margin:40px 10px;
  text-align: center;
  line-height: 44px;
  width: 355px;
  height: 44px;
  background: rgba(0, 197, 140, 1);
  box-shadow: 0px 8px 25px 0px rgba(0, 197, 140, 0.2);
  border-radius: 100px;
  color: #ffffff;
  font-size:18px;
}

</style>
