<template>
  <div class="zhineng">
    <div class="swipe">
      <van-swipe @change="onChange">
        <van-swipe-item>
          <img src="/images/home/zhineng/swiper01.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/images/home/zhineng/swiper02.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/images/home/zhineng/swiper03.webp" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="navicon">
      <img v-for="(item,index) in navlist" :key="index" :src="item" alt />
    </div>
    <van-image src="/images/home/zhineng/title.webp" class="titleimg"></van-image>
    <div class="hotsellpros">
      <van-row gutter="1">
        <van-col span="8" v-for="(item,index) in hotprosList" :key="index" class="hotpros">
          <img :src="item.img" alt @click="toDetail"/>
          <div>
            <span class="hotprosname">{{item.name}}</span>
            <br />
            <span class="hotprosdes">{{item.des}}</span>
            <br />
            <span class="hotprosprice">￥{{item.price}}</span>
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
      navlist: [
        "/images/home/zhineng/navicon01.png",
        "/images/home/zhineng/navicon02.webp",
        "/images/home/zhineng/navicon03.webp",
        "/images/home/zhineng/navicon04.webp",
        "/images/home/zhineng/navicon05.webp",
        "/images/home/zhineng/navicon06.png",
        "/images/home/zhineng/navicon07.png",
        "/images/home/zhineng/navicon08.png",
        "/images/home/zhineng/navicon09.png",
        "/images/home/zhineng/navicon10.png"
      ],
      hotprosList: [
        {
          name: "米家智能门锁",
          des: "一体化活体指纹识别",
          price: "1299",
          img: "/images/home/zhineng/goods01.webp"
        },
        {
          name: "净水器",
          des: "600加仑通量",
          price: "2499",
          img: "/images/home/zhineng/goods02.webp"
        },
        {
          name: "扫地机器人1S",
          des: "看的明白扫的彻底",
          price: "1999",
          img: "/images/home/zhineng/goods03.webp"
        },
        {
          name: "小爱触屏音箱",
          des: "好听, 更好看",
          price: "299",
          img: "/images/home/zhineng/goods04.webp"
        },
        {
          name: "小米无线车充",
          des: "电动变形, 自动缩进充电",
          price: "169",
          img: "/images/home/zhineng/goods05.webp"
        },
        {
          name: "手持无线吸尘器",
          des: "除尘除螨黑科技",
          price: "1299",
          img: "/images/home/zhineng/goods06.webp"
        },
        {
          name: "真无线蓝牙耳机",
          des: "自动秒连, 拿起就能用",
          price: "99.9",
          img: "/images/home/zhineng/goods07.webp"
        },
        {
          name: "空气净化器",
          des: "大空间, 快循环",
          price: "1499",
          img: "/images/home/zhineng/goods08.webp"
        },
        {
          name: "米家新风机",
          des: "全效解决全屋空气问题",
          price: "2699",
          img: "/images/home/zhineng/goods09.webp"
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      console.log("当前 Swipe 索引：" + index);
      // Toast("当前 Swipe 索引：" + index);
    },
    toDetail(){
      this.$router.push('/detail')
    }
  }
};
</script>

<style lang="scss" scoped>
.zhineng {
  .swipe {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navicon {
    width: 100%;
    img {
      width: 20%;
    }
  }
  .titleimg {
    vertical-align: bottom;
  }
  .hotsellpros {
    width: 100%;
    .hotpros {
      height: 200px;
      text-align: center;
      img {
        height: 120px;
      }
      > div {
        height: 80px;
      }
      .hotprosname {
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
      }
      .hotprosdes {
        display: inline-block;
        font-size: 10px;
      }
      .hotprosprice {
        color: $micolor;
        display: inline-block;
      }
    }
  }
}
</style>