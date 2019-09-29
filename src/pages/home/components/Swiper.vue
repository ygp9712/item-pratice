<template>
 <div class="wrapper">
 <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--  这里是轮播图分页的点 -->
    <!-- 分页点和轮播图属于不同的区域，scoped会使他们的样式不能互通 -->
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return{
       swiperOption: {
         pagination: '.swiper-pagination',
         loop: true
         /* 设置是否循环 */
       },
       swiperList: [{
         id: '0001',
         imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg'
       },{
         id: '0002',
         imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/47f7d9e9fb7c5cb88a1245180c9ca5b4.jpg_750x200_de4858e1.jpg'
       }],
    }
  },
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>