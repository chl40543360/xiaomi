<template>
  <div class="detailSwipe">
    <van-swipe style="height:400px" :autoplay="2000" vertical>
      <van-swipe-item>
        <van-image src="/images/detail/xiaomi801.webp"></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="/images/detail/xiaomi802.webp"></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="/images/detail/xiaomi803.webp"></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="/images/detail/xiaomi804.webp"></van-image>
      </van-swipe-item>
    </van-swipe>

    <div class="btn" @click="goback">
      <van-icon name="arrow-left"></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      if (window.history.length > 1) {
        this.$router.back();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detailSwipe {
  width: 100%;
  height: 400%;
  position: relative;
  .van-image {
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: #fff;
  }
}
</style>

