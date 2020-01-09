<template>
  <div class="wrapper">
    <list-header></list-header>
    <list-content :sceneList="sceneList"></list-content>
  </div>
</template>

<script>
import axios from 'axios';
import listHeader from './components/header';
import listContent from './components/content';

export default {
  name: 'List',
  components: {
    listHeader,
    listContent,
  },
  data() {
    return {
      sceneList: [],
    };
  },
  methods: {
    getListInfo() {
      axios.get('/api/getList')
        .then(this.getListInfoSucc);
    },
    getListInfoSucc(e) {
      const res = e.data;
      if (res.ret && res.data) {
      /* 判断意思是成功接收到json并且有数据（json里面存有成功码ret） */
        this.sceneList = res.data.sceneList;
        /* console.log(this.sceneList); */
      } else {
        console.log('获取list失败！');
      }
    },
  },
  created() {
    this.getListInfo();
  },
};
</script>

<style lang="stylus" scoped>

</style>
