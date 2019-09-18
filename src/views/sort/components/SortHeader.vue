<template>
  <div>
    <van-nav-bar title="分类" left-text="返回" left-arrow @click-left="goback">
      <van-icon name="search" slot="right" @click="tosearch" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.back();
    },
    tosearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  .van-nav-bar {
    background-color: rgba(241, 235, 235, 0.397);
  }
  .van-nav-bar__text {
    color: rgb(126, 126, 126);
  }
  .van-nav-bar .van-icon {
    color: rgb(126, 126, 126);
    font-size: 18px;
  }
}
</style>