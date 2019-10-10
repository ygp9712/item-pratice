<template>
  <div class= "introduce">
    <div class="card-container">
      <div class="intro-card left-card border-right">
        <div>
          <span class="comment-score">{{evalute}}</span>
          <span class="comment-text">分</span>
          <span class="comment-desc">很棒</span>
        </div>
        <div>
          <span class="comment-total">{{commentNum}}条评论</span>
          <span class="comment-total" v-show="Number(strategyNum)">{{strategyNum}}条攻略</span>
          <span class="iconfont right-icon">&#58880;</span>
        </div>
      </div>
      <div class="intro-card right-card">
        <div>
          <span class="sight-title">景点简介</span>
        </div>
        <div>
        <span>
          <span class="sight-help">开放时间、贴士</span>
          <span class="iconfont right-icon">&#58880;</span>
        </span>
        </div>
      </div>
    </div>
    <div class="intro-posi border-top">
      <span class="iconfont posi-icon">&#58895;</span>
      <p class="posi-text">{{position}}</p>
      <span class="iconfont right-icon">&#58880;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailIntroduce',
  props: {
    evalute: String,
    commentNum: String,
    strategyNum: String,
    position: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .introduce
    position: relative
    z-index: 6
    top: -5px
    box-sizing: border-box
    /* 若要width100%下padding运作则需要使用border-box？ */
    border-radius: 5px 5px 0 0
    width: 100%
    margin: 0 0 5px
    padding: 5px 10px 0
    background: #fff
    .card-container
      display: flex
      padding: 5px 0 10px
      .intro-card
        width: 50%
        height: 41.6px
      .left-card
        color: $commentColor
        .comment-score
          font-size: 22px
          line-height: 22px
        .comment-text
          font-size: 14px
          line-height: 24px
        .comment-desc
          font-size: 14px
          line-height: 24px
          margin-left: 10px
        .comment-total
          font-size: .24rem
          color: $greyColor
          line-height: .32rem
          margin-right: .2rem
        .right-icon
          position: absolute
          top: 15px
          right: 10px
          font-size: 18px
          color: $greyColor
      .right-card
        .sight-title
          font-size: 14px
          line-height: 24px
          padding-left: 15px
        .sight-help
          font-size: 12px
          line-height:16px
          color: $greyColor
          padding-left: 15px
        .right-icon
          position: absolute
          top: 23px
          right: 10px
          font-size: 18px
          color: $greyColor
    .intro-posi
      overflow hidden
      padding: 10px 0
      font-size: 14px
      .posi-icon
        position: absolute
        color: $greyColor
        font-size: 16px
        margin: 0 10px 0 0
      .posi-text
        padding: 0 28px
      .right-icon
        position: absolute
        top: 25%
        right: 0px
        font-size: 18px
        color: $greyColor
</style>