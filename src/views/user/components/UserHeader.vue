<template>
  <div class="box">
    <div class="icon">
      <span class="iconfont icon-wode-"></span>
    </div>
    <router-link to="/login" v-if="!user">
      <span class="btn">登录/注册</span>
    </router-link>
    <span class="btn" v-else>欢迎您,{{ user }}</span>
  </div>
</template>

<script>
export default {
  name: "user-header",
  data() {
    return {
      userId: ""
    };
  },
  created() {
    this.user = sessionStorage.getItem("userId");
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #f76968;

  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    margin: 20px 10px;
    color: #fff;
  }
  .btn {
    color: #fff;
    font-size: 12px;
  }
}
</style>
