<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
  <div class="icon"
       v-for="item of page"
       :key="item.id"
  >
    <div class="icon-img">
    <img 
    class="icon-img-content"
    :src='item.imgUrl'
    />
    </div>
    <p class="icon-text">{{item.text}}</p>
  </div>
  </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default{
  name:'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
        /* 禁止自动滚动 */
      }
    }
  },
  computed:{
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        /* forEach对每个数据项都进行操作 */
        const page = Math.floor(index / 8)
        /* 大于8的存放到第2页去 */
        if (!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
        /* 若为空，则插入数据 */
      })
      return pages
    }
    /* 这个方法将接收到的iconlist拆分到两个page里面去，以达到分页的目的 */
  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>>.swiper-container
    height: 0
    padding-bottom: 50%
   /*  overflow: hidden
    height: 0
    padding-bottom: 50% */
    /* 底部填充50%的宽度比，即宽：高=2:1 */
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position:absolute
        top: 0
        left: 0
        right: 0 
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-text
        text-align: center
        position:absolute
        left: 0
        right: 0 
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        ellipsis()
      
</style>

