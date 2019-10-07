<template>
  <div>
    <router-link 
    tag="div" 
    to="/" 
    class="header-abs"
    v-show='showAbs'
    >
      <div class="iconfont header-abs-back">&#58916;
      </div>
    </router-link>
    <div 
    class="header-fixed" 
    v-show="!showAbs"
    :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#58916;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop;
      if (top > 60 && top < 140)
      {
        const opacity = top / 140;
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false;
      } else if(top < 60) {
        this.showAbs = true;
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll);
  /* !!!全局事件需要及时解绑!!!，不然在别的页面也会触发该事件 */
  /* 给用户窗口绑定一个监听事件（事件，函数），当事件一执行就触发事件 */
  },
  deactivated () {
    /* activated的反事件，在页面即将切换（隐藏）的时候触发 */
    window.removeEventListener('scroll', this.handleScroll);
    /* 解绑全局事件的操作 */
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    z-index: 10
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    background: rgba(0,0,0,.8)
    border-radius: .4rem
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
      z-index: 10
      position: fixed
      top: 0
      left: 0
      right: 0
      height: $headerHeight
      line-height: $headerHeight
      text-align: center
      font-size: .32rem
      background: $bgColor
      color: #fff
      .header-fixed-back
       position:absolute
       top: 0
       left: 0
       width: .64rem
       text-align: center
       font-size :.4rem
       color: #fff
</style>