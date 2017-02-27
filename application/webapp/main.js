import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import policy from './page/policy.vue';
import money from './page/money.vue';
import reduce from './page/reduce.vue';
import qualification from './page/qualification.vue';
import reader from './page/reader.vue';

Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/policy', component: policy },
  { path: '/money', component: money },
  { path: '/reduce', component: reduce },
  { path: '/qualification', component: qualification},
  {path:'/reader',component:reader},
  //{ path: '/artical', component: artical }
]
const router = new VueRouter({
	routes,
	mode:"history",
})

new Vue({
	store,
	router,
  render: h => h(App)
}).$mount('#app')
