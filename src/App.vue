<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 设置Detail页面不会缓存到内存中去 -->
      <router-view/>
    </keep-alive>
    <!-- routerview显示当前路由地址所对应的内容 -->
    <!-- keepalive的作用是页面一旦渲染就保存在内存当中，就算页面跳转也不会重新请求数据 -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
