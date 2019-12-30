<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <div class="content">
      <detail-introduce
        :evalute="evaluate"
        :commentNum="commentNum"
        :strategyNum="strategyNum"
        :position="position"></detail-introduce>
      <detail-tab></detail-tab>
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DetailHeader from './components/Header';
import DetailBanner from './components/Banner';
import DetailList from './components/List';
import DetailIntroduce from './components/introduce';
import DetailTab from './components/Tab';

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList,
    DetailIntroduce,
    DetailTab,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      evaluate: '',
      commentNum: '',
      strategyNum: '',
      position: '',
      list: [],
      lastDetail: '',
    };
  },
  methods: {
    getDetailInfo() {
      axios.get(`/api/getDetail?id=${this.$route.params.id}`,
        {}).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      if (res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.galleryImgs = data.galleryImgs;
        this.list = data.categoryList;
        this.evaluate = data.evaluate;
        this.commentNum = data.commentNum;
        this.strategyNum = data.strategyNum;
        this.position = data.position;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
  .content
    height: 35rem;
    background: #eeeeee;
</style>
