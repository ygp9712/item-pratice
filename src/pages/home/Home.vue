<template>
<div>
  <home-header>
</home-header>
<home-swiper :list="swiperList">
</home-swiper>
<home-icons :list="iconList">
</home-icons>
<home-recommend :list="recommendList">
</home-recommend>
<home-weekend :list="weekendList">
</home-weekend>
</div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons  from './components/icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/weekend';
import axios from 'axios';

export default {
  name:'Home',
  components:{
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons:  HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend,
  },data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
       /* 判断意思是成功接收到json并且有数据（json里面存有成功码ret） */
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted () {
    /* 页面一旦挂载就调用函数 */
    this.getHomeInfo()
  }
}
</script>

<style>

</style>