<template>
  <div class="container">
    我是首页
    <button @click="showToast">弹窗测试</button>
    <button @click="post">接口测试</button>
    <button @click="starQuestion">页面跳转</button>
    <mptoast />
  </div>
</template>
<script>
import mptoast from 'mptoast'

export default {
  data() {
    return {}
  },
  methods: {  
    showToast() {
      this.$mptoast('温馨提示', 'success', 2000)
    },

    async post() {
      let res =await this.$post('/design/caseList', { userid: "246cba2c-881e-4b60-a077-b8d57619623a" });
      console.log(res);
    },


    starQuestion() {
      wx.navigateTo({
        url: '/pages/test/main'
      })
    },

  },

  created() {},

  components: {
    mptoast
  },
}

</script>
<style scoped>


</style>
