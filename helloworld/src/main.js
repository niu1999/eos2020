import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import store from './store/store'
import Hello from './components/Hello.vue'
import world from './components/world.vue'
import child from './components/child.vue'
import parent from './components/parent.vue'

const routes = [
  { path: '/Hello', component: Hello },
  { path: '/world', component: world },
  { path: '/child', component: child },
  { path: '/parent', component: parent },
]
//最后
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false
//3`实例化vuerouter
const router = new VueRouter({
  routes
 })
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
