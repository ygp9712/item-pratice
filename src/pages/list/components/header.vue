<template>
  <div>
    <div class="bar">
      <router-link :to="name='/'">
      <i class="iconfont turnback">&#58916;</i>
      </router-link>
      <div class="search-wrapper">
        <input class="search-content" type="text" v-model="searchContent" placeholder="输入城市或景点"/>
        <span class="iconfont search-delete"
        v-show="searchContent"
        @click="handleDelete">&#58899;
        </span>
      </div>
      <span class="search-btn" @click="handleSearch">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
    };
  },
  methods: {
    handleSearch() {
      console.log('开始搜索');
    },
    handleDelete() {
      this.searchContent = '';
    },
  },
};
</script>

<style lang="stylus" scoped>
  html,body
    font-size: 62.5%;
    .bar
      display: flex;
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #f2f2f2;
      .turnback
        font-size: 16px;
        line-height: 44px;
        margin-left: 10px;
      .search-wrapper
        position: relative;
        flex: 1;
        display: flex;
        .search-content
          border-radius: 15px;
          padding: 0 30px 0 15px;
          margin-top: 7px;
          height: 30px;
          width: 100%;
          font-size: 13px;
          background: #F2F2F2;
        .search-delete
          position: absolute;
          line-height: 44px;
          right: 10px;
      .search-content::placeholder
        text-align: center;
      .search-btn
        min-width: 1rem;
        line-height: 44px;
        text-align: center;
</style>
