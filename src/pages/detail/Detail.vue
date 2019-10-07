<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header';
import DetailBanner from './components/Banner';
import DetailList from'./components/List';
export default {
  name: 'Detail',
  components: {
    DetailHeader: DetailHeader,
    DetailBanner: DetailBanner,
    DetailList: DetailList,
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '日夜场通玩票',
          children: [{
            title: '世界之窗日夜场通玩成人票(10月8日起)'
          }]
          /* 递归数据格式要严格一样，仔细检查 */
        },{
          title: '[当天可订]日夜场通玩票'
        }
        ]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>