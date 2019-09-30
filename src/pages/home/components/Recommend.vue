<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <!-- <div class="item-img-wrap">
           图片的包裹，用来撑开图片，防止抖动
           </div>  -->
        <img class="item-img" 
          :src="item.imgUrl"
          />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-text">{{item.text}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  data () {
     return{
     recommendList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1909/7c/7c6a137effe1d34ea3.water.jpg_200x200_b4936d7d.jpg',
      title: '东部华侨城大侠谷',
      text: '峡谷中的刺激游乐园~玩的就是心跳！'
     },
     {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
      title: '锦绣中华',
      text: '一步迈进历史，一天游遍中华'
     },
     {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/79/79e4ff041bd3d2a3a3.water.jpg_200x200_95356ed7.jpg',
      title: '深圳欢乐谷',
      text: '玛雅水公园，夏日玩水好去处'
     },
     {
      id: '0004',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/201303/04/3dc3e87356026a63c8d65eac.jpg_200x200_1de448b6.jpg',
      title: '阿尔卑斯山滑雪谷',
      text: '体会滑雪快感，嬉雪、观雪的绝佳去处'
     },
     {
      id: '0005',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/6f/5d803c45af314b68f4652362fca42d11.water.jpg_200x200_42a7956b.jpg',
      title: '青青世界',
      text: '融入大自然、体会田园之乐'
     }]
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-text
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>