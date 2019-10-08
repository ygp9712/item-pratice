<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header';
import DetailBanner from './components/Banner';
import DetailList from'./components/List';
import axios from 'axios';
export default {
  name: 'Detail',
  components: {
    DetailHeader: DetailHeader,
    DetailBanner: DetailBanner,
    DetailList: DetailList,
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: [],
      lastDetail: '',
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then (this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.galleryImgs = data.galleryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted () {
     this.getDetailInfo() 
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>