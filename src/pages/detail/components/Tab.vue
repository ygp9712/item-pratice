<template>
  <div class="box " ref="box">
    <div class="container">
      <span class="itemtab" @click="handleClickLeft">门票</span>
      <span class="itemtab" @click="handleClickRight">一日游</span>
      <span class="slide-tab iconfont" ref="slide">&#59021;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTab',
  data() {
    return {
      classVal: '',
    };
  },
  computed: {
    boxDom() {
      return this.$refs.box;
    },
    slideDom() {
      return this.$refs.slide;
    },
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top < 220) {
        this.classVal = 'box';
        this.boxDom.setAttribute('class', this.classVal);
      } else {
        this.classVal = 'box beFixed';
        this.boxDom.setAttribute('class', this.classVal);
      }
    },
    handleClickLeft() {
      this.slideDom.style.left = `${59}px`;
      window.scrollTo(0, 220.1);
    },
    handleClickRight() {
      this.slideDom.style.left = `${247}px`;
      window.scrollTo(0, 600);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
  .beFixed
    position: fixed
    top: 40px
    z-index: 20
  .box
    display: block
    width: 100%
    height: 46px
    .container
      position: relative
      width: 100%
      height: 46px
      .itemtab
        float: left
        display: inline-block
        background: #ffffff
        width: 50%
        height: 46px
        line-height: 48px
        font-size: 16px
        text-align: center
      .slide-tab
        position: absolute
        overflow: hidden
        bottom: 0
        left: 59px
        display: inline-block
        height: 2px
        width: 70px
        font-size: 2px
        line-height: 2px
        color: #00bcd4
</style>
