<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <!-- better-scroll需要外部两层div包裹 -->
      <div class="area">
        <div class="title border-topbottom">当前城市
        </div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}
              </div>
            </div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市
        </div>
          <div class="button-list">
            <div class="button-wrapper"
              v-for="item of hotCities"
              :key="item.id"
              @click="handleCityClick(item.name)">
              <div class="button">{{item.name}}
              </div>
            </div>
          </div>
      </div>
      <div class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
      <!-- 通过ref寻找到该栏并函数跳转 -->
        <div class="title border-topbottom">{{key}}
        </div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },
  methods: {
    handleCityClick(city) {
      /* this.$store.dispatch('changeCity',city);
      使用mapMutations后等同下面这条代码 */
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
    /* 用法和mapState相似 */
  },
  computed: {
    ...mapState({
      currentCity: 'city',
    }),
  },
  watch: {
    /* 监听器，一旦letter发生改变便处理函数 */
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
        /* scrollToElement需要的是dom元素，而refs取到的是集合，因此要再加一个[0] */
      }
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  /* 一但页面挂载就使用better-scroll */
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
      /* "&:"设置伪元素的样式 */
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    /* 使用Better-scoll插件前的准备：不能让页面自主拖动，即超出页面的长度隐藏 */
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .6rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
