<template>
  <div class="search">
    <van-row>
      <van-col span="3">
        <img src="/images/home/xiaomilogo.png" @click="tohome" />
      </van-col>
      <van-col span="18">
        <span class="sousuoicon iconfont icon-sousuo" @click="tosearch"></span>
        <input type="text" placeholder="搜索商品名称" />
      </van-col>
      <van-col span="3">
        <van-icon name="manager-o" @click="touser" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import "../../../assets/iconfont/iconfont.css";

export default {
  name: "search",
  components: {},
  methods: {
    tohome() {
      this.$router.push("/");
    },
    touser() {
      this.$router.push("/user");
    },
    tosearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  .van-row {
    padding: 5px 0;
    line-height: 30px;
    text-align: center;
    background-color: $bgcolor;

    img {
      height: 18px;
      margin-top: 10px;
    }

    .sousuoicon {
      display: block;
      width: 30px;
      height: 30px;
      z-index: 66;
      position: absolute;
      right: 40px;
      top: 6px;
      color: #ccc;
    }

    input {
      width: 100%;
      display: inline-block;
      background-color: #fff;
      border: 1px solid #ccc;
      text-align: left;
      color: #666;
      font-size: 12px;
      padding-left: 10px;
      position: relative;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
    input:-ms-input-placeholder {
      color: #ccc;
    }
    input::-moz-placeholder {
      color: #ccc;
    }
    input:-moz-placeholder {
      color: #ccc;
    }

    .van-icon {
        font-size: 21px;
        color: rgb(119, 119, 119);
        margin-top: 5px;
        margin-left: 10px;
    }
  }
}
</style>
