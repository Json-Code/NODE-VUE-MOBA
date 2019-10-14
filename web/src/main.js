import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import router from './router'

// 引入字体图标
import './assets/iconfont/iconfont.css'

// 引入自己写的components组件
import Card from './components/Card.vue'
Vue.component('m-card', Card)

// 引入并使用vue-awesome-swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
 // require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
