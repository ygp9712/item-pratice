<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
      <!-- v-if设置只有数据发送后才渲染轮播图，防止轮播图默认在最后一页 -->
        <!-- slides -->
        <swiper-slide  v-for="(item,index) of imgs" :key="index">
          <img class="gallery-img" :src=item />
        </swiper-slide>
        <!-- Optional controls -->
         <div class="swiper-pagination"  slot="pagination"></div>
        <!--  这里是轮播图分页的点 -->
        <!-- 分页点和轮播图属于不同的区域，scoped会使他们的样式不能互通 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        /* 配置分页器 */
        observeParents: true,
        observer: true,
        /* 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。 */
        /* 大致作用：监听自己和父级组件的dom变化，一旦改变就会实时更新 */
      },
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close');
      /* 向调用自己的父组件Banner发射事件 */
    },
  },
};
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
    /* 从父元素继承overflow关系 */
  .container
    display: flex
    flex-direction: column
    justify-content: center
    /* 将内容居中 */
    z-index: 101
    position: fixed
    /* 固定的定位，即使滚动也不会改变位置 */
    left: 0
    right: 0
    top: 0
    bottom: 0
    /* 这四项将组件布满整个页面 */
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      /* 撑出一个*正方形*图片位置*/
      .swiper-pagination
        font-size: .24rem
        bottom: -1rem
        color: #fff
      .gallery-img
        width: 100%
</style>
