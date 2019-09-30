<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  name:'HomeWeekend',
  data () {
     return{
     recommendList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
      title: '深圳周边游',
      text: '远离城市拥堵，去周边开启清新假期吧。'
     },
     {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
      title: '清远周边逛',
      text: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
     },
     {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
      title: '深圳欢乐谷',
      text: '玛雅水公园，夏日玩水好去处'
     },]
   }
 }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    padding: 7px 10px 10px
    .item-title
      color: #212121
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-text
      line-height: .4rem
      color: #616161
      ellipsis()
</style>