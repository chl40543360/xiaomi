<template>
  <div class="container">
    <div class="order">
      <p class="my-order">
        <span class="title-order">我的订单</span>
        <span class="all-order" @click="toOrder">全部订单 ></span>
      </p>

      <van-row>
        <van-col span="8">
          <span class="iconfont icon-daifukuan" @click="toOrder"></span>
          <p>待付款</p>
        </van-col>
        <van-col span="8">
          <span class="iconfont icon-yifahuo" @click="toOrder"></span>
          <p>待收货</p>
        </van-col>
        <van-col span="8">
          <span class="iconfont icon-tuihuanhuo" @click="toOrder"></span>
          <p>退换修</p>
        </van-col>
      </van-row>
    </div>

    <div class="member">
      <div class="item first" @click="toMember">
        <img src="/images/user/huiyuanzhongxin.png" alt />
        <span class="left">会员中心</span>
        <span class="right">></span>
      </div>
      <div class="item" @click="showList = true">
        <img src="/images/user/wodeyouhui.png" alt />

        <span class="left">我的优惠</span>
        <span class="right">></span>
      </div>
    </div>

    <div class="member">
      <div class="item first" @click="toServe">
        <img src="/images/user/fuwuzhongxin.png" alt />
        <span class="left">服务中心</span>
        <span class="right">></span>
      </div>
      <div class="item" @click="toMiHome">
        <img src="/images/user/xiaomizhijia.png" alt />
        <span class="left">大米之家</span>
        <span class="right">></span>
      </div>
    </div>

    <div class="member">
      <div class="item" @click="toFMa">
        <img src="/images/user/fmatongdao.png" alt />
        <span class="left">F码通道</span>
        <span class="right">></span>
      </div>
    </div>

    <div class="member" @click="toSet">
      <div class="item">
        <img src="/images/user/shezhi.png" alt />
        <span class="left">设置</span>
        <span class="right">></span>
      </div>
    </div>

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};

export default {
  name: "user-body",
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    };
  },
  methods: {
    // 前往设置页面
    toSet() {
      this.$router.push("/set");
    },

    // 前往订单列表页面
    toOrder() {
      this.$router.push("/order");
    },

    // 前往会员中心
    toMember() {
      this.$router.push("/user/member");
    },

    // 前往服务中心
    toServe() {
      this.$router.push('/user/serve');
    },

    // 前往大米之家
    toMiHome() {
      this.$router.push("/user/mihome");
    },

    // F码通道
    toFMa() {
      this.$router.push("/user/fma");
    },

    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f2f2f2;
  .order {
    background-color: #fff;
    padding-bottom: 20px;
    .my-order {
      height: 35px;
      line-height: 35px;
      padding: 0 20px;
      color: #333;
      border-bottom: 1px solid #ccc;
      font-size: 13px;

      .title-order {
        float: left;
      }
      .all-order {
        float: right;
        font-size: 12px;
      }
    }

    .van-col {
      text-align: center;
      font-size: 30px;
      color: #999;
      font-weight: bold;
    }
    p {
      color: #333;
      font-size: 10px;
      font-weight: 400;
    }
  }

  .member {
    margin-top: 10px;
    background-color: #fff;
    padding-left: 50px;
    color: #333;
    font-size: 13px;
    .item {
      height: 46px;
      line-height: 46px;
      position: relative;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: -36px;
        top: 13px;
        color: #f76968;
      }

      .right {
        float: right;
        margin-right: 20px;
      }
    }
    .first {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>

