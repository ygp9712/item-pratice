<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrap">
          <img class="item-img"
          :src="item.imgUrl"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.43%
  .item-img
    width: 100%
  .item-info
    padding: 7px 10px 10px
    .item-title
      color: $titleColor
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-text
      line-height: .4rem
      font-size: .24rem
      color: $textColor
      padding-right: .9rem
      ellipsis()
</style>
