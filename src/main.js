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
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
