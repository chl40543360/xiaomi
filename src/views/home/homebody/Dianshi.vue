<template>
  <div class="dianshi">
    <van-image src="/images/home/dianshi/banner.jpg"></van-image>
    <div class="diannav">
      <img :src="img" alt v-for="img in diannavList" :key="img" />
    </div>
    <van-image src="/images/home/dianshi/title.webp"></van-image>
    <div class="dianpros">
      <van-row gutter="5">
        <van-col span="12" v-for="(item,index) in dianprosList" :key="index" class="diancol">
          <img :src="item.img" alt />
          <div>
            <span class="dianprosname">{{item.name}}</span>
            <br />
            <span class="dianprosdes">{{item.des}}</span>
            <br />
            <span class="dianprosnewPrice">￥{{item.newPrice}}</span>
            <span class="dianprosoldPrice">￥{{item.oldPrice}}</span>
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
      diannavList: [
        "/images/home/dianshi/nav01.webp",
        "/images/home/dianshi/nav02.jpg",
        "/images/home/dianshi/nav03.webp",
        "/images/home/dianshi/nav04.webp",
        "/images/home/dianshi/nav05.jpg"
      ],
      dianprosList: [
        {
          name: "小米电视4A 65英寸",
          des: "4k HDR, 人工智能语音系统",
          newPrice: "2999",
          oldPrice: "3699",
          img: "/images/home/dianshi/goods01.webp"
        },
        {
          name: "小米全面屏电视E55A",
          des: "全面屏设计, 人工智能语音",
          newPrice: "2499",
          oldPrice: "1999",
          img: "/images/home/dianshi/goods02.webp"
        },
        {
          name: "小米电视4A 50英寸",
          des: "4k HDR, 人工智能语音系统",
          newPrice: "1899",
          oldPrice: "2099",
          img: "/images/home/dianshi/goods03.png"
        },
        {
          name: "小米全面屏电视E65A",
          des: "全面屏设计, 人工智能语音",
          newPrice: "3499",
          oldPrice: "3999",
          img: "/images/home/dianshi/goods04.webp"
        },
        {
          name: "小米电视4A 32英寸",
          des: "人工智能系统, 高清液晶屏",
          newPrice: "899",
          oldPrice: "1299",
          img: "/images/home/dianshi/goods05.jpg"
        },
        {
          name: "小米电视4X 34英寸",
          des: "FHD全高清屏,人工智能语音",
          newPrice: "1399",
          oldPrice: "1499",
          img: "/images/home/dianshi/goods06.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.dianshi {
  background-color: #f4aa31;
  .diannav {
    width: 100%;
    img {
      width: 20%;
    }
  }
  .dianpros {
    text-align: center;
    .diancol {
      background: #f4aa31;
      margin-bottom: 6px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
      }
      > div {
        background-color: #fff;
      }
      .dianprosname {
        display: inline-block;
        margin-top: 10px;
      }
      .dianprosdes {
        font-size: 10px;
        color: #666;
      }
      .dianprosnewPrice {
        color: $micolor;
        margin-right: 10px;
      }
      .dianprosoldPrice {
        font-size: 10px;
        text-decoration: line-through;
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
</style>