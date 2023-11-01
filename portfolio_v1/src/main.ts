import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import { FontAwesomeIcon } from './plugins/fontawesome'

const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
