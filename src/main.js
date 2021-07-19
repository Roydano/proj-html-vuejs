import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  render: h => h(App),
}).$mount('#app')
