<template>
  <div class="container">
    <van-nav-bar left-text="设置" left-arrow @click-left="onClickLeft" />

    <div class="member">
      <div class="title">账号管理</div>
      <div class="item">
        <span class="left">个人资料</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">收货地址</span>
        <span class="right">></span>
      </div>
    </div>

    <div class="member">
      <div class="title">关于</div>
      <div class="item">
        <span class="left">关于商城</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">协议规则</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">资质证照</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">小米商城用户协议</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">小米账号使用协议</span>
        <span class="right">></span>
      </div>
      <div class="item">
        <span class="left">隐私政策</span>
        <span class="right">></span>
      </div>
    </div>

    <div class="btn">
      <van-button type="default" round @click="logout">退出账号</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  methods: {
    onClickLeft() {
      if (window.history.length > 1) {
        this.$router.back();
        return;
      } else {
        this.$router.push("/user");
      }
    },
    logout() {
      sessionStorage.removeItem("userId");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;

  .btn {
    padding: 0 20px;
    margin: 20px;
    .van-button {
      width: 100%;
      color: #666;
    }
  }
}

.van-icon,
.van-nav-bar__text {
  color: #333;
}

.member {
  margin-top: 10px;
  background-color: #fff;
  padding: 0 20px;
  color: #666;
  font-size: 13px;
  position: relative;
  margin-top: 46px;

  .title {
    position: absolute;
    top: -26px;
  }

  .item {
    height: 46px;
    line-height: 46px;
    position: relative;
    border-bottom: 1px solid #eee;
    .right {
      float: right;
    }
  }
  .first {
    border-bottom: 1px solid #ccc;
  }
}
</style>
