<template>
  <div class="box" v-if="!user">
    <span class="left">登录后享受更多优惠</span>
    <span class="right" @click="toLogin">去登录 ></span>
  </div>
</template>

<script>
export default {
  name: "cart-login",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  },
  created() {
    this.user = sessionStorage.getItem("userId");
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 60px;
  background-color: #fff;
  line-height: 60px;

  .left {
    float: left;
    margin-left: 20px;
  }

  .right {
    float: right;
    margin-right: 20px;
    font-size: 14px;
    color: #999;
  }
}
</style>