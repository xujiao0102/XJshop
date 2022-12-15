import vueRouter from "vue-router";
import Vue from 'vue'
import home from  '@/pages/home.vue'
Vue.use(vueRouter)
export default new vueRouter({
  routes :[
    {
        path: '/',
        name: 'home',
        component: home
      },
]
})