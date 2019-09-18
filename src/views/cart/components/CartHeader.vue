<template>
  <div>
    <van-nav-bar title="购物车" left-arrow style="background: #f2f2f2" @click-left="onClickLeft">
      <van-icon name="search" slot="right" @click="tosearch" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "cart-header",
  methods: {
    onClickLeft() {
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push({ path: "/" });
      }
    },

    tosearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  color: #999;
}
.van-icon {
  color: #999;
  font-size: 20px;
}
</style>