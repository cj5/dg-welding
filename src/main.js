import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import HomeRoute from './components/routes/HomeRoute'
import AboutRoute from './components/routes/AboutRoute'
import GalleryRoute from './components/routes/GalleryRoute'
import ContactRoute from './components/routes/ContactRoute'
import HistoryRoute from './components/routes/HistoryRoute'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeRoute },
  { path: '/about', component: AboutRoute },
  { path: '/gallery', component: GalleryRoute },
  { path: '/contact', component: ContactRoute },
  { path: '/history', component: HistoryRoute }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history'
});

Vue.prototype.$link_facebook = 'https://www.facebook.com/dgwelding'
Vue.prototype.$link_email = 'info@dg-welding.com'
Vue.prototype.$link_phone = '651-688-2358'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
