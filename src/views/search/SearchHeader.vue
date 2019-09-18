<template>
  <div class="searchHeader">
    <div class="sheader">
      <van-row>
        <van-col span="2">
          <van-icon name="arrow-left" class="arrow-left" @click="goback"></van-icon>
        </van-col>
        <van-col span="22">
          <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
            <!-- @search="onSearch" -->
            <div slot="action">搜索</div>
            <!-- @click="onSearch" -->
          </van-search>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {},
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.searchHeader {
  .sheader {
    line-height: 54px;
    .arrow-left {
      font-size: 26px;
      font-weight: bold;
      margin-left: 10px;
      display: inline-block;
      color: rgb(199, 198, 198);
      line-height: 54px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>