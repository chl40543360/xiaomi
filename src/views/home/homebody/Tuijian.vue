<template>
  <div class="tuijian">
    <Swipe />
    <div class="navIcons">
      <img v-for="(img,index) in icons" :key="index" :src="img" alt @click="todetail" />
    </div>
    <div class="poster">
      <van-row gutter="5">
        <van-col span="12">
          <span class="banner1">
            <img src="/images/home/banner01.jpg" alt />
          </span>
        </van-col>
        <van-col span="12">
          <span class="banner2">
            <img src="/images/home/banner02.webp" alt />
            <img src="/images/home/banner03.jpg" alt />
          </span>
        </van-col>
      </van-row>
    </div>
    <div class="vanimg">
      <van-image src="/images/home/banner04.jpg"></van-image>
      <van-image src="/images/home/banner05.webp"></van-image>
    </div>
    <div class="product">
      <van-row gutter="5">
        <van-col span="12" v-for="(item,index) in goodsList" :key="index">
          <div class="tjgood">
            <img :src="item.img" alt @click="todetail" />
            <span class="goodname">{{item.name}}</span>
            <br />
            <span class="gooddes">{{item.des}}</span>
            <br />
            <span class="goodnewPrice">{{item.newPrice}}</span>
            <span class="goodoldPrice">￥{{item.oldPrice}}</span>
          </div>
        </van-col>
        <van-col span="24" class="goodsmore">更多小米产品>>>>>></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Swipe from "./Swipe";

export default {
  name: "tuijian",
  data() {
    return {
      icons: [
        "/images/home/icon1.webp",
        "/images/home/icon2.webp",
        "/images/home/icon3.webp",
        "/images/home/icon4.png",
        "/images/home/icon5.webp",
        "/images/home/icon6.png",
        "/images/home/icon7.webp",
        "/images/home/icon8.png",
        "/images/home/icon9.webp",
        "/images/home/icon10.png"
      ],
      goodsList: [
        {
          name: "小米8 青春版",
          des: "索尼2400万自拍, 超级夜景",
          newPrice: "1049起",
          oldPrice: "1699",
          img: "/images/home/tuijian/shouji01.jpg"
        },
        {
          name: "小米8 屏幕指纹版",
          des: "全新升级十大功能, 骁龙845",
          newPrice: "1999起",
          oldPrice: "2999",
          img: "/images/home/tuijian/shouji02.jpg"
        },
        {
          name: "黑鲨游戏手机 Helo",
          des: "双液冷, 更能打",
          newPrice: "3199",
          oldPrice: "3499",
          img: "/images/home/tuijian/shouji03.jpg"
        },
        {
          name: "红米6",
          des: "小屏高性能的双摄手机",
          newPrice: "729",
          oldPrice: "799",
          img: "/images/home/tuijian/shouji04.webp"
        },
        {
          name: "红米6A",
          des: "好看耐用/轻巧省心",
          newPrice: "549起",
          oldPrice: "599",
          img: "/images/home/tuijian/shouji05.webp"
        },
        {
          name: "红米6X",
          des: "前置2000万, 后置2000万",
          newPrice: "999起",
          oldPrice: "1799",
          img: "/images/home/tuijian/shouji06.webp"
        },
        {
          name: "小米Play(附带流量卡)",
          des: "自带高速流量",
          newPrice: "1099",
          oldPrice: "1299",
          img: "/images/home/tuijian/shouji07.png"
        },
        {
          name: "小米平板4",
          des: "大屏、长续航、超薄电脑",
          newPrice: "1099起",
          oldPrice: "1299",
          img: "/images/home/tuijian/shouji08.jpg"
        }
      ]
    };
  },
  components: {
    Swipe
  },
  methods: {
    todetail() {
      this.$router.push("/detail");
    }
  }
};
</script>

<style lang="scss" scoped>
.tuijian {
  background-color: $bgcolor;
  .navIcons {
    width: 100%;
    img {
      width: 20%;
      vertical-align: bottom;
    }
  }

  .poster {
    width: 100%;
    .van-row {
      width: 100%;
    }
    .banner1 {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner2 {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .product {
    text-align: center;
    .tjgood {
      height: 270px;
      background: #fff;
      margin-bottom: 6px;
      img {
        width: 100%;
        height: 63%;
      }
      .goodname {
        display: inline-block;
        margin-top: 10px;
      }
      .gooddes {
        font-size: 11px;
        color: #666;
        margin: 4px 0;
        display: inline-block;
      }
      .goodnewPrice {
        font-size: 16px;
        color: $micolor;
        margin-right: 6px;
      }
      .goodoldPrice {
        font-size: 10px;
        text-decoration: line-through;
        color: #666;
      }
    }
    .goodsmore {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      text-align: center;
      color: rgba(102, 102, 102, 0.74);
      // margin: 6px 0;
      margin-bottom: 6px;
      background-color: #fff;
    }
  }
}
</style>
