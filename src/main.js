// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1移动端设置
import './assets/styles/reset.css'
// 2移动端1像素边框问题
import './assets/styles/border.css'
// 3 300ms 点击延迟问题  npm install fastclick --save
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
