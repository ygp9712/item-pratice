<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link 
      class="item border-bottom" 
      tag= "li"
      v-for="item of list" 
      :key="item.id"
      :to="{ name: 'Detail',params: { id: item.id }  }" >
        <!-- <div class="item-img-wrap">
           图片的包裹，用来撑开图片，防止抖动
           </div>  -->
        <img class="item-img" 
          :src="item.imgUrl"
          />
        <div 
        class="img-tag"
        :class="{ tagA: item.tag == '可订明日', tagB: item.tag == '随买随用' }" 
        v-if= "item.tag" 
        >{{item.tag}}</div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <span class="iconfont icon-star">&#58882;&#58882;&#58882;&#58882;&#58882;</span>
          <span class="item-comment">{{item.commentNum}}条评论</span>
          <div class="item-fee">
            ￥
            <em class="fee-num">{{item.fee}}</em>
            <span class="fee-word">起</span>
            <span class="fee-position">{{item.position}}</span>
          </div>
          <div class="item-text">{{item.text}}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    padding: .2rem .2rem
    .item-img
      width: 2rem
      height: 2rem
    .tagA
      background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)
    .tagB
      background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
    .img-tag
      background-size: 100%
      position: absolute
      top: 10
      left: 10
      width: 1.02rem
      height: .38rem
      text-indent: 3px
      color: #fff
      line-height: .38rem
      font-size: .2rem

    .item-info
      flex: 1
      padding: 0 0 0 .2rem
      min-width: 0
      .item-title
        margin-top: .26rem
        color: #000
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .icon-star
        font-size: 12px
        color: #ffb436
      .item-comment
        margin-left: 10px
        font-size: 12px
        color: $textColor
      .item-fee
        margin-top: 11px
        font-size: 12px
        color: $commentColor
        .fee-num
          margin-left: -4px
          font-size: 20px
        .fee-word
          color: $textColor
        .fee-position
          position: absolute
          right: 10px
          top: 80px
          color: $textColor
      .item-text
        display: inline-block
        margin-top: 24px
        font-size: 12px
        max-width: 250px
        line-height: .32rem
        background: #fff9f9
        color: #f55
</style>