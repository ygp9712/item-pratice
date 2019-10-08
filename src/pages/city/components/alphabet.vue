<template>
  <div>
    <ul class="list">
      <li class="item" 
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchend"
      @click="handleLetterClick">
      <!-- prevent修饰符阻止浏览器默认行为 -->
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters;
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    /* updated再页面重新渲染的时候执行 */
    this.startY = this.$refs['A'][0].offsetTop;
    /* offsetTop是整个页面的高度，即包含了头部栏 */
  },
  methods: {
    handleLetterClick (e) {
      /* e是事件对象 */
      this.$emit('change',e.target.innerText);
      /* emit执行一个动作并附带一个字母给父组件 */
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      /* e是touch事件的参数,用console.log(e)查看整个参数表 */
      if (this.touchStatus) {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          /* 需要减去头部栏的高度即79px */
          const index = Math.floor((touchY - this.startY) / 20);
          /* floor向下取整 */
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          /* 发射和点击一样的事件让父组件侦听 */
          }
        },16)
        /* 将事件放在定时器里是为了节流，防止滚动事件执行的太快 */

      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>