<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" 
      :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#59004;</span>{{this.galleryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery 
      :imgs="galleryImgs" 
      v-show="showGallery"
      @close="handleGalleryClose"
      >
        <!-- 若一开始v-show为false则轮播图计算宽度会出错 -->
      </common-gallery>
    </fade-animation>
  </div>
   
</template>

<script>
import CommonGallery from 'common/gallery/gallery';
import FadeAnimation from 'common/fade/FadeAnimation';
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  components: {
    CommonGallery: CommonGallery,
    FadeAnimation: FadeAnimation
  },
  data () {
    return {
      showGallery : false,
      
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
         position:relative
         top: -10px
         font-size: .36rem
         flex: 1
         padding: 0 .2rem
       .banner-number
         position: absolute
         bottom: 40px
         left: 10px
         padding: 0 .4rem
         font-size: .24rem
         line-height: .32rem
         height: .32rem
         border-radius: .2rem
         background: rgba(0,0,0,.8)
         .banner-icon
           font-size: .24rem
           padding-right: .06rem
</style>