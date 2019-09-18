<template>
  <div class="searchBody">
    <div class="title">热门搜索</div>
    <div class="searchimg">
      <img src="/images/search/banner.jpg" alt />
    </div>
    <div class="sign">
      <span v-for="(item,index) in signkeywords" :key="index" class="signkey">{{item}}</span>
    </div>
    <div class="classtitle">常用分类</div>
    <div class="classify">
      <span v-for="(item,index) in classify" :key="index" class="classkey">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signkeywords: [
        "Readmi Note 7",
        "小米MIX 3",
        "小米手环4",
        "小爱老师",
        "除臭氧滤芯",
        "行车记录仪1S",
        "小米小爱智能闹钟",
        "小米双单元半入耳式耳机"
      ],
      classify: [
        "手机",
        "电视",
        "笔记本",
        "盒子",
        "路由器",
        "平板",
        "投影",
        "手表",
        "VR",
        "穿戴",
        "影音",
        "空气净化器",
        "空调",
        "耳机"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.searchBody {
  .title {
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .searchimg {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sign {
    margin-left: 12px;
    margin-top: 8px;
    .signkey {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin-right: 6px;
      margin-bottom: 6px;
      border: 1px solid;
      font-size: 14px;
      padding: 0 6px;
      color: #666;
      &:nth-child(1) {
        border-color: #fa6035;
        background-color: #ffbdc5;
      }
      &:nth-child(2) {
        border-color: #97c28a;
        background-color: #e4f5e2;
      }
      &:nth-child(3) {
        border-color: #8cdade;
        background-color: #e8f6f6;
      }
      &:nth-child(4) {
        border-color: #fac288;
        background-color: #f8f2ec;
      }
      &:nth-child(5) {
        border-color: #e3af96;
        background-color: #fae8e8;
      }
      &:nth-child(6) {
        border-color: #bbd090;
        background-color: #f2f6e9;
      }
      &:nth-child(7) {
        border-color: #fac288;
        background-color: #f8f2ec;
      }
      &:nth-child(8) {
        border-color: #fca0a7;
        background-color: #f9eaea;
      }
    }
  }
  .classtitle {
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
  .classify {
    margin-left: 22px;
    .classkey {
      font-size: 10px;
      display: inline-block;
      margin-right: 6px;
      margin-bottom: 4px;
      padding: 4px 6px;
      background-color: #f0f0f0;
      color: #666;
    }
  }
}
</style>