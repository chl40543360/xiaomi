<template>
  <div class="container">
    <div class="logo">
      <van-image src="/images/home/xiaomilogo.png" />
    </div>
    <p class="title">手机号码登录</p>

    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="phone" placeholder="请输入手机号" :error-message="phoneError" />
      <van-field v-model="code" placeholder="请输入短信验证码" :error-message="codeError">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <!-- 按钮 -->
    <van-row>
      <van-col span="24">
        <van-button type="default" class="btn" round block @click="login">登 录</van-button>
      </van-col>
      <van-col span="24">
        <van-button type="default" class="btn" round block>注 册</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      code: "",
      phoneError: "",
      codeError: ""
    };
  },
  methods: {
    login() {
      // 判断手机号码是是否符合规则
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.phoneError = "请输入正确的手机号码";
        return;
      } else {
        this.phoneError = "";
      }

      // 判断验证码是否符合规则
      if (this.code === "") {
        this.codeError = "验证码不能为空";
        return;
      } else {
        this.codeError = "";
      }

      // 将登录信息添加到 localStorage
      sessionStorage.setItem("userId", this.phone);

      // 跳转到首页
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  .logo {
    text-align: center;
    margin: 40px 0 20px;
  }

  .title {
    font-size: 20px;
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }

  .btn {
    background-color: #f76968;
    color: #fff;
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>

