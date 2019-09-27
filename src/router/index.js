import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import List from '@/pages/list/List';
/* import HelloWorld from '@/components/HelloWorld'; */
/* @符号指的是src这个目录 */
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      /* 当用户访问'/'即根路径的时候 */
      name: 'Home',
      component: Home,
      /* 显示名为HelloWorld的HelloWorld组件 */
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
  ],
});
