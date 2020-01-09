<template>
  <div class="container">
    <div class="select-wrapper" ref="select">
      <div class="selecter border-right" @click="clickLeft">
        <span class="select-caption" ref="spanLeft">全部分类</span>
      </div>
      <div class="selecter" @click="clickRight">
        <span class="select-caption" ref="spanRight">推荐排序</span>
      </div>
      <div class="menu-class" v-if="showLeft">
        左边
      </div>
      <div class="menu-class" v-if="showRight">
        右边
      </div>
    </div>
    <div class="list-content">
      <div class="list-item" v-for="(item, index) of pages[nowPage - 1]" :key="index">
        <div class="sight-info">
           <img class="sight-img" :src="item.imgUrl" alt="图片">
           <div class="sight-detail">
             <p class="sight-name">{{item.title}}</p>
             <div class="sight-rating">
               <span class="iconfont icon-star">&#58882;&#58882;&#58882;&#58882;&#58882;</span>
               <span class="comment">{{item.commentNum}}评论</span>
             </div>
             <div class="sight-fee">￥
               <span class="fee-num">{{item.fee}}</span>
               <span class="fee-word">起</span>
             </div>
             <span class="sight-position">{{item.position}}</span>
           </div>
        </div>
        <div class="sight-ticket" v-for="(tItem, _index) of item.ticket" :key="_index">
          <span class="ticket-name">{{tItem.title}}</span>
          <span class="ticket-fee">￥<em class="num">{{tItem.fee}}</em></span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="page-btn disable" @click="handleBack" ref="btnLeft">上一页</div>
      <span class="page-num">{{nowPage}}  /  {{pagesNum}}</span>
      <div class="page-btn" @click="handleNext" ref="btnRight">下一页</div>
    </div>
    <div class="bottom-text">
      哪儿都去门票
    </div>
  </div>
</template>

<script>
export default {
  name: 'listContent',
  props: {
    sceneList: Array,
  },
  data() {
    return {
      showLeft: 0,
      showRight: 0,
      nowPage: 1,
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.sceneList.forEach((item, index) => {
        /* forEach对每个数据项都进行操作 */
        const page = Math.floor(index / 3);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
        /* 若为空，则插入数据 */
      });
      return pages;
    },
    pagesNum() {
      return this.pages.length;
    },
    selectDom() {
      return this.$refs.select;
    },
    leftDom() {
      return this.$refs.spanLeft;
    },
    rightDom() {
      return this.$refs.spanRight;
    },
    btnLeftDom() {
      return this.$refs.btnLeft;
    },
    btnRightDom() {
      return this.$refs.btnRight;
    },
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top < 44) {
        this.classVal = 'select-wrapper';
        this.selectDom.setAttribute('class', this.classVal);
      } else {
        this.classVal = 'select-wrapper beFixed';
        this.selectDom.setAttribute('class', this.classVal);
      }
    },
    clickLeft() {
      this.showRight = 0;
      if (this.showLeft === 0) {
        this.leftDom.setAttribute('class', 'select-caption active');
        this.rightDom.setAttribute('class', 'select-caption');
      } else {
        this.leftDom.setAttribute('class', 'select-caption');
      }
      this.showLeft = this.showLeft === 1 ? 0 : 1;
    },
    clickRight() {
      this.showLeft = 0;
      if (this.showRight === 0) {
        this.rightDom.setAttribute('class', 'select-caption active');
        this.leftDom.setAttribute('class', 'select-caption');
      } else {
        this.rightDom.setAttribute('class', 'select-caption');
      }
      this.showRight = this.showRight === 1 ? 0 : 1;
    },
    handleBack() {
      if (this.nowPage !== 1) {
        if (this.nowPage === this.pagesNum) {
          this.btnRightDom.setAttribute('class', 'page-btn');
        }
        this.nowPage -= 1;
        if (this.nowPage === 1) {
          this.btnLeftDom.setAttribute('class', 'page-btn disable');
        }
      }
    },
    handleNext() {
      if (this.nowPage !== this.pagesNum) {
        if (this.nowPage === 1) {
          this.btnLeftDom.setAttribute('class', 'page-btn');
        }
        this.nowPage += 1;
        if (this.nowPage === this.pagesNum) {
          this.btnRightDom.setAttribute('class', 'page-btn disable');
        }
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus">
  .container
    font-size: 62.5%;
    background: #f2f2f2;
    .select-wrapper
      display: block;
      width: 100%;
      z-index: 10;
      .selecter
        float: left;
        display: inline-block;
        background: #ffffff;
        width: 50%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #f2f2f2;
        .select-caption
          position: relative;
        .active
          color: aqua;
        .select-caption::after
          content: "";
          width: 8px;
          height: 8px;
          border:  solid #888888;
          border-width: 1px 0 0 1px;
          transform: translate(-50%, -50%) rotate(-135deg);
          position: absolute;
          right: -20px;
          top: 50% - 6px;
        .select-caption.active::after
          content: "";
          width: 8px;
          height: 8px;
          border:  solid #888888;
          border-width: 1px 0 0 1px;
          transform: translate(-50%, -50%) rotate(45deg);
          position: absolute;
          right: -20px;
          top: 50% + 6px;
      .menu-class
        z-index: 10;
        position: absolute
        top: 80px;
        display: block;
        width: 100%;
        height: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        background: grey;
    .beFixed
      position: fixed;
      top: 0;
      .menu-class
        top: 40px;

    .list-content
      .list-item
        background: #ffffff;
        margin-bottom: 15px;
        .sight-info
          position: relative;
          display: flex;
          padding: 10px;
          border-bottom: 1px solid #f2f2f2;
          .sight-img
            width: 100px;
            height: 100px;
          .sight-detail
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            .sight-name
              font-size: 16px;
            .sight-rating
              margin-top: 10px;
              font-size: 12px;
              .icon-star
                color: #ffb436;
                font-size: 13px;
            .sight-fee
              margin-top: 10px;
              color: #ff8300;
              .fee-num
                margin-left: -4px;
                font-size: 20px;
              .fee-word
                color: #000000
                font-size: 12px;
            .sight-position
              position: absolute;
              bottom: 45px;
              right: 10px;
              font-size: 12px;
        .sight-ticket
          position: relative;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #f2f2f2;
          padding: 0 10px 0 10px;
          .ticket-name
            font-size: 14px;
          .ticket-fee
            position: absolute;
            word-wrap: none;
            right: 10px;
            color:#ff8300
            font-size: 10px;
            .num
              font-size: 16px
    .pagination
      text-align: center;
      .page-btn
        display: inline-block;
        background: #ffffff;
        width: 70px;
        height: 30px;
        border: 1px solid #00afc7;
        color: #00afc7;
        border-radius: 3px;
        line-height: 30px;
        text-align: center;
        font-size: 13px;
      .disable
        background: #bdbdbd;
        border: 0;
        color: #ffffff;
      .page-num
        font-size: 12px;
        margin: 0 10px 0 10px;
    .bottom-text
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #00afc7;
      font-size: 13px;
</style>
