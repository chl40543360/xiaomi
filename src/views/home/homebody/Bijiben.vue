<template>
  <div class="bijiben">
    <div class="banner">
      <van-image src="/images/home/bijiben/banner.webp"></van-image>
    </div>
    <div class="bennav">
      <van-image :src="img" v-for="img in bennavimgs" :key="img"></van-image>
    </div>
    <div class="bentitleimg">
      <van-image src="/images/home/bijiben/title.webp"></van-image>
    </div>
    <div class="benpros">
      <van-row gutter="5">
        <van-col span="12" v-for="(good,index) in goodsList" :key="index">
          <div class="bengood">
            <van-image class="benproimg" :src="good.img"></van-image>
            <span class="benproname">{{good.name}}</span>
            <br />
            <span class="benprodes">{{good.des}}</span>
            <br />
            <span class="bennewPrice">￥{{good.newPrice}}</span>
            <span class="benoldPrice">￥{{good.oldPrice}}</span>
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
      bennavimgs: [
        "/images/home/bijiben/nav01.jpg",
        "/images/home/bijiben/nav02.webp",
        "/images/home/bijiben/nav03.jpg",
        "/images/home/bijiben/nav04.jpg",
        "/images/home/bijiben/nav05.jpg"
      ],
      goodsList: [
        {
          name: "Air 12.5 2019款",
          des: "像杂志一样随身携带",
          newPrice: "3499",
          oldPrice: "3599",
          img: "/images/home/bijiben/goods01.webp"
        },
        {
          name: "笔记本15.6 独显版",
          des: "全面均衡的国民轻薄本",
          newPrice: "3999",
          oldPrice: "4199",
          img: "/images/home/bijiben/goods02.webp"
        },
        {
          name: "Pro 15.6 GTX版",
          des: "更强悍的专业笔记本",
          newPrice: "6299",
          oldPrice: "6599",
          img: "/images/home/bijiben/goods03.webp"
        },
        {
          name: "Pro 15.6 2019款",
          des: "强悍的专业笔记本",
          newPrice: "5399",
          oldPrice: "5599",
          img: "/images/home/bijiben/goods04.webp"
        },
        {
          name: "笔记本15.6 集显版",
          des: "全面均衡的国民轻薄本",
          newPrice: "2999",
          oldPrice: "3399",
          img: "/images/home/bijiben/goods05.webp"
        },
        {
          name: "小米游戏本",
          des: "冷酷的性能怪兽",
          newPrice: "6499",
          oldPrice: "6699",
          img: "/images/home/bijiben/goods06.webp"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bijiben {
  background-color: #118adb;
  .bennav {
    width: 100%;
    .van-image {
      width: 20%;
    }
  }
  .benpros {
    text-align: center;
    .bengood {
      background-color: #fff;
      margin-bottom: 5px;
      height: 240px;
      .benproimg {
        width: 100%;
      }
      .benproname {
        display: inline-block;
        margin-top: 8px;
        color: #666;
      }
      .benprodes {
        font-size: 10px;
        color: #666;
      }
      .bennewPrice {
        color: $micolor;
        margin-right: 10px;
      }
      .benoldPrice {
        font-size: 10px;
        text-decoration: line-through;
        color: #666;
      }
    }
  }
}
</style>