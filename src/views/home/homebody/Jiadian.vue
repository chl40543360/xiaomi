<template>
  <div class="jiadian">
    <div class="jdswipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image src="/images/home/jiadian/swiper01.jpg"></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="/images/home/jiadian/swiper02.webp"></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="/images/home/jiadian/swiper03.webp"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="jdnav">
      <van-image class="jdnavimg" :src="img" v-for="img in navimgs" :key="img"></van-image>
    </div>
    <div class="jdtitleimg">
      <van-image src="/images/home/jiadian/title.webp"></van-image>
    </div>
    <div class="jdpros">
      <van-row gutter="5">
        <van-col span="12" v-for="(item,index) in goodsList" :key="index">
          <div class="jdgood">
            <img :src="item.img" alt />
            <span class="jdname">{{item.name}}</span>
            <br />
            <span class="jddes">{{item.des}}</span>
            <br />
            <span class="jdnewprice">￥{{item.newPrice}}</span>
            <span class="jdoldprice">￥{{item.oldPrice}}</span>
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
      navimgs: [
        "/images/home/jiadian/nav01.webp",
        "/images/home/jiadian/nav02.webp",
        "/images/home/jiadian/nav03.webp",
        "/images/home/jiadian/nav04.webp",
        "/images/home/jiadian/nav05.jpg"
      ],
      goodsList: [
        {
          name: "米家互联网空调(一级能效)",
          des: "1.5匹, 全直流变频",
          newPrice: "2299",
          oldPrice: "2699",
          img: "/images/home/jiadian/goods01.webp"
        },
        {
          name: "Redmi波轮洗衣机1A",
          des: "大容量一次洗净全家衣物",
          newPrice: "899",
          oldPrice: "1299",
          img: "/images/home/jiadian/goods02.webp"
        },
        {
          name: "米家空调",
          des: "大1匹, 静音, 快速制冷热",
          newPrice: "1699",
          oldPrice: "1799",
          img: "/images/home/jiadian/goods03.webp"
        },
        {
          name: "米家洗烘一体机",
          des: "洗得净、烘得干",
          newPrice: "2299",
          oldPrice: "2399",
          img: "/images/home/jiadian/goods04.webp"
        },
        {
          name: "米家互联网空调",
          des: "1.5匹, 高效制冷热",
          newPrice: "2099",
          oldPrice: "2299",
          img: "/images/home/jiadian/goods05.webp"
        },
        {
          name: "米家滚筒洗烘一体机1A",
          des: "洗烘大容量",
          newPrice: "1999",
          oldPrice: "2199",
          img: "/images/home/jiadian/goods06.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.jiadian {
    background: #f0f0f0;
  .jdswipe {
  }
  .jdnav {
    width: 100%;
    margin-bottom: 6px;
    .jdnavimg {
      width: 20%;
    }
  }
  .jdpros {
    text-align: center;
    .jdgood {
      height: 270px;
      background: #fff;
      margin-bottom: 5px;
      img {
        width: 100%;
        height: 63%;
      }
      .jdname {
        display: inline-block;
        margin-top: 6px;
        color: #666;
        font-size: 14px;
      }
      .jddes {
        font-size: 10px;
        color: #666;
        display: inline-block;
        margin: 5px 0;
      }
      .jdnewprice {
        color: $micolor;
        margin-right: 10px;
      }
      .jdoldprice {
        font-size: 10px;
        text-decoration: line-through;
        color: #666;
      }
    }
  }
}
</style>