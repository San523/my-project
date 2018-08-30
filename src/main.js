import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/registry'
import { post } from '@/utils/requestMethod.js'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

mpvueToastRegistry(Vue)

Vue.prototype.$post = post

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载一个全局的图片路径,方便后期修改图片地址的时候,做统一修改
Vue.prototype.$imagePath = '../../assets/'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/index/main',
      'pages/test/main',
      '^pages/nearbyFind/main', /*首页,附件好班*/
      'pages/trainingClassDetails/main', /*培训班详情*/
      'pages/map/main', /*地图*/
      'pages/feedback/main', /*问题反馈*/
      'pages/feedbackChoose/main' /*问题反馈*/
    ], 
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#00C58C',
      navigationBarTitleText: '有爱培优班精选',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false, //是否开启下拉刷新
    }
  }
}
