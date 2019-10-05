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
import { mapState } from 'vuex';
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
        lastCity: '',
        /* 用于记录最后一次首页上城市的名称 */
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
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
    this.lastCity = this.city;
    this.getHomeInfo();
    /* 问题：一旦页面通过路由跳转回来就会重新渲染页面，
    造成重新请求json文件的问题，会影响效率 */
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  }
  /* 使用keepalive后页面第一次渲染会触发mounted和activated，之后都只会触发activated */
}
</script>

<style>

</style>