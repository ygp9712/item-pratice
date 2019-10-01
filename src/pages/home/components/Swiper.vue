<template>
 <div class="wrapper">
 <swiper :options="swiperOption" v-if="showSwiper">
   <!-- v-if设置只有数据发送后才渲染轮播图，防止轮播图默认在最后一页 -->
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return{
       swiperOption: {
         pagination: '.swiper-pagination',
         loop: true
         /* 设置是否循环 */
       }
    }
  },computed: {
      showSwiper () {
        return this.list.length
      }
  }
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