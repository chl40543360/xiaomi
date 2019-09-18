<template>
  <div class="swipe">
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item>
        <img src="/images/home/swipe1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/images/home/swipe2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/images/home/swipe3.webp" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "swipe",
  components: {}
};
</script>

<style lang="scss" scoped>
.swipe {
  .van-swipe {
    width: 100%;
    height: 180px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
