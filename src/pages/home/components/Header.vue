<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#58916;</div>
      </div>
    <div class="header-input">
      <span class="iconfont">&#58930;</span>  输入城市/景点/游玩主题
      </div>
    <router-link to='/city'>
      <div class="header-right">
          {{this.city}}
          <!-- 这里的city是使用mapState映射的值 -->
          <span class="iconfont arrow-icon">&#58954;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
/* 优化从$store.state中取值 */
export default {
  name:'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
    /* 将state中的city属性映射到该组件中 */
    /* vuex中的Getter要通过mapGetter使用 */
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header 
     display: flex
     line-height: $headerHeight
     background: $bgColor
     color: #fff

     .header-left
       width: .64rem
       float: left
       .back-icon
         text-align: center
         font-size: .4rem
         
     .header-input
       flex:1
       height: .64rem
       line-height: .64rem
       margin-left: .2rem
       margin-top: .12rem
       background: #fff
       border-radius: .1rem
       color: #ccc
       padding-left: .2rem

     .header-right
       min-width: 1.04rem
       padding: 0 .1rem
       float: right
       color: #fff
       text-align: center
       .arrow-icon
         margin-left: .05rem
         font-size: .2rem

         
</style>