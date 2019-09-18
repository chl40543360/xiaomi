<template>
  <div class="liferound">
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image src="/images/home/zhoubian/swiper01.jpg"></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="/images/home/zhoubian/swiper02.jpg"></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="/images/home/zhoubian/swiper03.webp"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="lifenav">
      <van-image :src="img" v-for="img in lifenavimgs" :key="img"></van-image>
    </div>
    <div class="lifetitleimg">
      <van-image src="/images/home/zhoubian/title.webp"></van-image>
    </div>
    <div class="lifepros">
      <van-row gutter="5">
        <van-col span="12" v-for="(good,index) in goodsList" :key="index">
          <div class="lifegood">
            <van-image class="lifeproimg" :src="good.img"></van-image>
            <span class="lifeproname">{{good.name}}</span>
            <br />
            <span class="lifeprodes">{{good.des}}</span>
            <br />
            <span class="lifePrice">￥{{good.price}}</span>
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
      lifenavimgs: [
        "/images/home/zhoubian/nav01.jpg",
        "/images/home/zhoubian/nav02.jpg",
        "/images/home/zhoubian/nav03.jpg",
        "/images/home/zhoubian/nav04.jpg",
        "/images/home/zhoubian/nav05.jpg"
      ],
      goodsList: [
        {
          name: "8H护颈乳胶枕 Z2",
          des: "多重新科技 升级好睡眠",
          price: "239",
          img: "/images/home/zhoubian/goods01.webp"
        },
        {
          name: "米家飞行员太阳镜 Pro",
          des: "尼龙偏光, 轻巧佩戴",
          price: "199",
          img: "/images/home/zhoubian/goods02.webp"
        },
        {
          name: "8H乳胶床垫 青春版",
          des: "真心品质帮助睡眠",
          price: "599",
          img: "/images/home/zhoubian/goods03.webp"
        },
        {
          name: "米兔儿童保温杯",
          des: "看得见的软萌, 喝的到的温暖",
          price: "129",
          img: "/images/home/zhoubian/goods04.webp"
        },
        {
          name: "米家黄麻抗菌护脊床垫",
          des: "黄麻偏硬护脊 抗菌防腐无异味",
          price: "999",
          img: "/images/home/zhoubian/goods05.jpg"
        },
        {
          name: "小米小背包",
          des: "小身材大容量, 更精彩",
          price: "29",
          img: "/images/home/zhoubian/goods06.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.liferound {
  background-color: #f0f0f0;
  .lifenav {
    width: 100%;
    .van-image {
      width: 20%;
    }
  }
  .lifepros {
    text-align: center;
    .lifegood {
      background-color: #fff;
      margin-bottom: 5px;
      height: 280px;
      .lifeproimg {
        width: 100%;
      }
      .lifeproname {
        display: inline-block;
        margin-top: 8px;
        color: #666;
      }
      .lifeprodes {
        font-size: 10px;
        color: #666;
        display: inline-block;
        margin: 6px 0;
      }
      .lifePrice {
        color: $micolor;
      }
    }
  }
}
</style>