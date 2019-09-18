<template>
  <div class="shouji">
    <div class="swiper">
      <van-swipe style="height: 200px;" :autoplay="2000" vertical>
        <van-swipe-item>
          <img src="/images/home/shouji/swiper01.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/images/home/shouji/swiper02.webp" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/images/home/shouji/swiper03.webp" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-image src="/images/home/shouji/title01.webp"></van-image>
    <div class="pro">
      <van-image src="/images/home/shouji/banner01.jpg"></van-image>
      <van-row>
        <van-col span="16">
          <span class="proname">Redmi K20 Pro</span>
          <br />
          <span class="prodes">骁龙855处理器,弹出式极界全面屏</span>
        </van-col>
        <van-col span="8">
          <span class="proprice">￥2499起</span>
          <button class="btn">立即购买</button>
        </van-col>
      </van-row>
    </div>
    <div class="pros">
      <van-row gutter="5">
        <van-col span="12" v-for="(good,index) in goodsList" :key="index" class="good">
          <img :src="good.img" alt @click="toDetail"/>
          <div>
            <span class="prosname">{{good.name}}</span>
            <span class="prosdes">{{good.des}}</span>
            <br />
            <span class="prosprice">￥{{good.price}}起</span>
            <br />
            <button class="btn">立即购买</button>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          name: "Redmi K20",
          des: "弹出全面屏, 4800万三摄",
          price: "1999",
          img: "/images/home/shouji/shouji01.webp"
        },
        {
          name: "Redmi 7A",
          des: "骁龙8核处理器",
          price: "549",
          img: "/images/home/shouji/shouji02.webp"
        },
        {
          name: "Redmi Note 7 Pro",
          des: "索尼4800万超清拍照",
          price: "1599",
          img: "/images/home/shouji/shouji03.webp"
        },
        {
          name: "Redmi Note 7",
          des: "4800万拍照 长续航",
          price: "999",
          img: "/images/home/shouji/shouji04.webp"
        },
        {
          name: "小米9",
          des: "全息幻彩机身, 骁龙855",
          price: "2999",
          img: "/images/home/shouji/shouji05.webp"
        },
        {
          name: "Redmi 7",
          des: "4000mAh超长续航",
          price: "699",
          img: "/images/home/shouji/shouji06.jpg"
        }
      ]
    };
  },
  methods: {
    toDetail(){
      this.$router.push('/detail')
    }
  },
};
</script>

<style lang="scss" scoped>
.shouji {
  width: 100%;
  background: #e7e6fd;
  .swiper {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pro {
    text-align: center;
    .proname {
      display: inline-block;
      margin-top: 15px;
    }
    .prodes {
      display: inline-block;
      font-size: 12px;
      color: #666;
      margin: 8px 0;
    }
    .proprice {
      color: $micolor;
      font-size: 18px;
      display: inline-block;
      margin: 6px 0;
    }
    .btn {
      width: 80px;
      height: 30px;
      border-radius: 15px;
      background: $micolor;
      font-size: 12px;
      color: #fff;
      border: 0;
      margin-bottom: 10px;
    }
  }
  .pros {
    width: 100%;
    padding-bottom: 5px;
    .van-row {
      width: 100%;
      padding-left: 2.5px;
      .good {
        height: 320px;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
          height: 200px;
          vertical-align: bottom;
        }
        > div {
          background: #fff;
          height: 120px;
        }
        .prosname {
          display: inline-block;
          margin-top: 10px;
        }
        .prosdes {
          font-size: 11px;
          color: #666;
          margin: 4px 0;
          display: inline-block;
        }
        .prosprice {
          font-size: 16px;
          color: $micolor;
          display: inline-block;
        }
        .btn {
          width: 80px;
          height: 30px;
          border-radius: 15px;
          background: $micolor;
          font-size: 12px;
          color: #fff;
          border: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>