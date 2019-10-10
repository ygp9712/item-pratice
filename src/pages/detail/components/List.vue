<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-ul">
        <div class="item-li border-bottom" 
        v-for="(thing, index) of item.children" 
        :key="index">
          <div class="ticket-name">
            {{thing.title}}
          </div>
          <div class="ticket-fee">
            ¥<em class="num-price">{{thing.fee}}</em>
            <span class="num-word">起</span>
            <div class="iconfont down-icon">&#58881;</div>
          </div>
        </div>
      </div>
      <div class="item-more" v-if="hasMore" @click="showMore">
        查看剩余产品<span class="iconfont more-down-icon">&#58883;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      hasMore: true
    }
  },
  computed: {
    showedList: function () {
      return this.list
    }
  },
  methods: {
    showMore () {
      console.log(this.showedList);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .item
    background: #ffffff
    margin-bottom: 10px
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-li
    position: relative
    font-size: 14px
    line-height: 24px
    padding: 12px 10px
    .ticket-name
      width: 80%
      ellipsis()
    .ticket-fee
      position: absolute
      height: 20px
      top: 15px
      line-height: 20px
      right: 20px
      color: $feeColor
      .num-price
        margin-left: 2px
        margin-right: -3px
        font-size: 18px
      .num-word
        font-size: 10px
        color: $greyColor
      .down-icon
        position: absolute
        right: -15px
        top: 0
        color: $greyColor
        font-size: 10px
  .item-more
    text-align: center
    height: 40px
    line-height: 40px
    .more-down-icon
      font-size: 10px
      margin-left: 6px
</style>
