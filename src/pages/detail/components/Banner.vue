<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" 
      src="http://img1.qunarzz.com/sight/p0/1909/7c/7c6a137effe1d34ea3.water.jpg_600x330_35b97520.jpg"/>
      <div class="banner-info">
        <div class="banner-title">东部华侨城大侠谷
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#59004;</span>39
        </div>
      </div>
    </div>
    <common-gallery 
    :imgs="imgs" 
    v-show="showGallery"
    @close="handleGalleryClose"
    >
      <!-- 若一开始v-show为false则轮播图计算宽度会出错 -->
    </common-gallery>
  </div>
   
</template>

<script>
import CommonGallery from 'common/gallery/gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery: CommonGallery
  },
  data () {
    return {
      showGallery : false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201301/16/4593d3d5a27f445b93835fbb.jpg_r_800x800_8c52fe48.jpg'
             ,'http://img1.qunarzz.com/sight/p0/1502/91/91b45435e2150822.water.jpg_r_800x800_aaa13bbf.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true;
    },
    handleGalleryClose () {
      this.showGallery = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
   .banner
     z-index: 5
     position: relative
     overflow: hidden
     height: 0
     padding-bottom: 55%
     .banner-img
       width:100%
     .banner-info
       display: flex
       position: absolute 
       left: 0
       right: 0
       bottom: 0
       line-height: .6rem
       color: #fff
       background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
       /* 这条样式给info框添加了渐变阴影,防止字体颜色影响图片效果 */
       .banner-title
         font-size: .36rem
         flex: 1
         padding: 0 .2rem
       .banner-number
         padding: 0 .4rem
         font-size: .24rem
         line-height: .32rem
         margin-top .14rem
         height: .32rem
         border-radius: .2rem
         background: rgba(0,0,0,.8)
         .banner-icon
           font-size: .24rem
           padding-right: .06rem
</style>