<template>
  <div>
    <div class="search">
      <input
        v-model= "keyword"
        class="search-input"
        type="text" 
        placeholder="请输入城市名或拼音" 
      />
    </div>
    <div class="search-content" 
         ref="content"
         v-show="keyword">
         <!-- 加一个v-show是因为默认情况下也存在没有找到的提示，需要隐藏 -->
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list" 
            :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" 
            v-show="noData">
            <!-- html模板尽量不要放运算符，可以用计算属性代替 -->
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    noData () {
      return !this.list.length;
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      /* 当输入栏为空时清空list的操作 */
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1
             || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result;
      },100)    
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      padding: 0 .1rem
      height: .62rem
      text-align: center
      border-radius: .06rem
      color: #888

  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      
</style>