<template>
  <div class="detailMessage">
    <div class="titleMessage">
      <div class="title">Redmi K20 Pro</div>
      <div class="titlemsg">
        <span class="highcolor">「购机享分期6期免息，可选加20元得27W快充」</span>
        骁龙855旗舰处理器 / 索尼4800万超广角三摄 / 前置2000万升降式相机 /
        6.39"AMOLED全面屏 / 4000mAh超长续航 / 8层石墨立体散热 /
        第七代屏下指纹解锁 / 多功能NFC
      </div>
    </div>
    <div class="price">
      ￥2499
      <span class="wordqi">起</span>
    </div>
    <div class="infor">
      <div class="items" v-for="(item,index) in inforList" :key="index">
        <img :src="item.img" alt />
        <p>{{item.des}}</p>
        <p>{{item.size}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inforList: [
        {
          img: "/images/detail/cpu.png",
          des: "cpu",
          size: "小龙855八核"
        },
        {
          img: "/images/detail/shexiangtou.png",
          des: "三摄像头",
          size: "4800万+800万+1300万像素"
        },
        {
          img: "/images/detail/pingmu.png",
          des: "超大屏",
          size: "6.29英寸"
        },
        {
          img: "/images/detail/fenbianlv.png",
          des: "屏幕分辨率",
          size: "2340X1080"
        },
        {
          img: "/images/detail/jisu.png",
          des: "极速畅玩",
          size: "小龙855八核"
        },
        {
          img: "/images/detail/cunchu.png",
          des: "存储容量",
          size: "64GB"
        },
        {
          img: "/images/detail/daiji.png",
          des: "超长待机",
          size: "4000mAh"
        },
        {
          img: "/images/detail/wangluo.png",
          des: "运营商网络",
          size: "4G全网通"
        },
        {
          img: "/images/detail/shuangka.png",
          des: "网络模式",
          size: "双卡双待"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.detailMessage {
  // background-color: #f6f6f6;
  .titleMessage {
    .title {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
    }
    .titlemsg {
      padding: 0 20px;
      font-size: 12px;
      color: rgb(163, 163, 163);
      .highcolor {
        color: $micolor;
      }
    }
  }

  .price {
    font-size: 18px;
    color: $micolor;
    margin: 10px;
    .wordqi {
      font-size: 12px;
    }
  }

  .infor {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    text-align: center;
    color: rgb(163, 163, 163);
    font-size: 10px;
    .items {
      flex: 0 0 60px;
      overflow: hidden;
      margin: 10px 0 10px 10px;
      img {
        width: 16px;
        height: 16px;
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>