import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';
import List from '@/pages/list/List';

/* import HelloWorld from '@/components/HelloWorld'; */
/* @符号指的是src这个目录 */
/* vue有两种方式跳转，一种是直接使用route-link超链接跳转，一种是通过编程使用$router.push方法 */
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
    {
      path: '/city',
      name: 'City',
      component: City,
    },
    {
      path: '/detail/:id',
      /* 动态路由,":id"是变化的部分,由router-link设置 */
      name: 'Detail',
      component: Detail,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    /* savedPosition保存滚动位置，暂时无需求 */
    return { x: 0, y: 0 };
    /* 设置全部页面默认滚动到头部 */
  },
});
