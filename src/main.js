// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './route'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


/* eslint-disable no-new */
fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
	loading:require('common/image/default.png')
})

new Vue({
  el: '#app',
  render: h =>h(App),
  router
})
