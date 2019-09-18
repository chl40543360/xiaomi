<template>
  <div class="detailSelect">
    <div class="desec">
      <ul>
        <li class="chose" @click="showBase = true">
          <span class="word-size">已选</span>
          <span>{{goods.title}} {{initialSelect.conf}} {{initialSelect.color}} X {{initialSelect.num}}</span>
          <span class="jiantou">></span>
        </li>
        <li class="select" @click="showArea=true">
          <span class="word-size">送至</span>
          <span>{{area}}</span>
          <span class="jiantou">></span>
        </li>
        <li class="word-explan">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
        </li>
      </ul>
    </div>
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :hide-stock="sku.hide_stock"
      :initial-sku="initialSelect"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @sku-selected="skuSelected"
      @stepper-change="changeNum"
    />
    <van-popup v-model="showArea" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="areaList" @confirm="getArea" @cancel="showArea=false" />
    </van-popup>

    <div class="vanimages">
      <van-image src="/images/detail/redmik20pro/detail01.jpg"></van-image>
      <van-image src="/images/detail/redmik20pro/detail02.webp"></van-image>
      <van-image src="/images/detail/redmik20pro/detail03.jpg"></van-image>
      <van-image src="/images/detail/redmik20pro/detail04.jpg"></van-image>
      <van-image src="/images/detail/redmik20pro/detail05.jpg"></van-image>
    </div>

    <div class="more">查看更多参数 ></div>

    <van-goods-action>
      <van-goods-action-icon icon="wap-home" text="首页" @click="tohome" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="num" @click="toCart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showBase=true" />
      <!-- <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" /> -->
    </van-goods-action>
  </div>
</template>

<script>
import area from "../../../assets/js/area";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      show: false,
      areaList: area,
      goodsId: "10010",
      goods: {
        title: "Redmi K20 Pro"
      },
      showBase: false,
      sku: {
        tree: [
          // 规格
          {
            // 第一个分类
            k: "颜色",
            v: [
              {
                id: "101",
                name: "火焰红",
                imgUrl: "/images/detail/red.jpg"
              },
              {
                id: "102",
                name: "碳纤黑",
                imgUrl: "/images/detail/black.webp"
              },
              {
                id: "103",
                name: "冰川蓝",
                imgUrl: "/images/detail/blue.jpg"
              }
            ],
            k_s: "s1"
          },
          {
            // 第二个分类
            k: "版本",
            v: [
              {
                id: "201",
                name: "6GB+64GB"
              },
              {
                id: "202",
                name: "6GB+128GB"
              },
              {
                id: "203",
                name: "8GB+128GB"
              },
              {
                id: "204",
                name: "8GB+256GB"
              }
            ],
            k_s: "s2"
          }
        ],

        list: [
          // 所有的分类组合
          {
            id: "010100", // skuId，下单时后端需要
            price: 249900, // 价格（单位分）
            s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "201", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            conf: "6GB+64GB",
            color: "火焰红",
            img: "/images/detail/red.jpg",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "010200",
            price: 259900,
            s1: "101",
            s2: "202",
            s3: "0",
            conf: "6GB+128GB",
            color: "火焰红",
            img: "/images/detail/red.jpg",
            stock_num: 110
          },
          {
            id: "010300",
            price: 279900,
            s1: "101",
            s2: "203",
            s3: "0",
            conf: "8GB+128GB",
            color: "火焰红",
            img: "/images/detail/red.jpg",
            stock_num: 110
          },
          {
            id: "010400",
            price: 299900,
            s1: "101",
            s2: "204",
            s3: "0",
            conf: "8GB+256GB",
            color: "火焰红",
            img: "/images/detail/red.jpg",
            stock_num: 110
          },
          {
            id: "020100",
            price: 249900,
            s1: "102",
            s2: "201",
            s3: "0",
            conf: "6GB+64GB",
            color: "碳纤黑",
            img: "/images/detail/black.webp",
            stock_num: 110
          },
          {
            id: "020200",
            price: 259900,
            s1: "102",
            s2: "202",
            s3: "0",
            conf: "6GB+128GB",
            color: "碳纤黑",
            img: "/images/detail/black.webp",
            stock_num: 110
          },
          {
            id: "020300",
            price: 279900,
            s1: "102",
            s2: "203",
            s3: "0",
            conf: "8GB+128GB",
            color: "碳纤黑",
            img: "/images/detail/black.webp",
            stock_num: 110
          },
          {
            id: "020400",
            price: 299900,
            s1: "102",
            s2: "204",
            s3: "0",
            conf: "8GB+256GB",
            color: "碳纤黑",
            img: "/images/detail/black.webp",
            stock_num: 110
          },
          {
            id: "030100",
            price: 249900,
            s1: "103",
            s2: "201",
            s3: "0",
            conf: "6GB+64GB",
            color: "冰川蓝",
            img: "/images/detail/blue.jpg",
            stock_num: 110
          },
          {
            id: "030200",
            price: 259900,
            s1: "103",
            s2: "202",
            s3: "0",
            conf: "6GB+128GB",
            color: "冰川蓝",
            img: "/images/detail/blue.jpg",
            stock_num: 110
          },
          {
            id: "030300",
            price: 279900,
            s1: "103",
            s2: "203",
            s3: "0",
            conf: "8GB+128GB",
            color: "冰川蓝",
            img: "/images/detail/blue.jpg",
            stock_num: 110
          },
          {
            id: "030400",
            price: 299900,
            s1: "103",
            s2: "204",
            s3: "0",
            conf: "8GB+256GB",
            color: "冰川蓝",
            img: "/images/detail/blue.jpg",
            stock_num: 110
          }
        ],

        stock_num: 2272 // 总库存
      },
      // 初始选择配置组合
      initialSelect: {
        s1: "101",
        s2: "201",
        color: "火焰红",
        conf: "6GB+64GB",
        num: 1,
        goodsId: "10010010100",
        goodsName: "Redmi K20 Pro",
        price: "249900",
        img: "/images/detail/red.jpg"
      },
      showArea: false,
      area: "北京市 东城区"
    };
  },

  computed: {
    ...mapState(["cartGoods"]),

    //自动计算购物车商品数量
    num(){
      let num=0;
      this.cartGoods.forEach(item => {
        num+=item.num;
      });
      return num;
    }
  },

  methods: {
    ...mapMutations(["addGoods"]),

    showPopup() {
      this.show = true;
    },
    tohome() {
      this.$router.push("/");
    },
    // onClickIcon() {
    //   // Toast("点击图标");
    // },
    // onClickButton() {
    //   // Toast("点击按钮");
    // },
    onBuyClicked(data) {
      let obj = {};
      obj.goodsId = data.goodsId + data.selectedSkuComb.id;
      obj.goodsName = this.goods.title;
      obj.price = data.selectedSkuComb.price;
      obj.img = data.selectedSkuComb.img;
      obj.color = data.selectedSkuComb.color;
      obj.conf = data.selectedSkuComb.conf;
      obj.num = data.selectedSkuComb.num;

      this.addGoods(obj);
      this.showBase = false;
      this.toCart();
    },
    toCart() {
      this.$router.push("/cart");
    },
    //加入购物车
    onAddCartClicked(data) {
      let obj = {};
      obj.goodsId = data.goodsId + data.selectedSkuComb.id;
      obj.goodsName = this.goods.title;
      obj.price = data.selectedSkuComb.price;
      obj.img = data.selectedSkuComb.img;
      obj.color = data.selectedSkuComb.color;
      obj.conf = data.selectedSkuComb.conf;
      obj.num = data.selectedSkuComb.num;

      this.addGoods(obj);
      this.showBase = false;
      this.$toast.success("成功加入购物车！");
    },
    getArea(data) {
      this.area = "";
      if (data[0].name === data[1].name) {
        this.area += data[0].name + " ";
        this.area += data[2].name;
      } else {
        for (let i = 0; i < data.length; i++) {
          this.area += data[i].name + " ";
        }
      }
      this.showArea = false;
    },
    skuSelected(data) {
      this.initialSelect.goodsId = this.goodsId + data.selectedSkuComb.id;
      this.initialSelect.goodsName = this.goods.title;
      this.initialSelect.img = data.selectedSkuComb.img;
      this.initialSelect.price = data.selectedSkuComb.price;
      this.initialSelect.color = data.selectedSkuComb.color;
      this.initialSelect.conf = data.selectedSkuComb.conf;
    },
    changeNum(data) {
      this.initialSelect.num = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.detailSelect {
  .desec {
    ul {
      list-style: none;
      background-color: #fff;
      border-radius: 10px;
      margin: 10px;
      li {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        position: relative;
        span {
          // display: inline-block;
          font-size: 12px;
          .vanbtn {
            background-color: #fff;
            color: #666;
            border: 0;
            text-align: center;
          }
          &.word-size {
            font-size: 10px;
            color: #ccc;
            margin-right: 12px;
          }
          &.jiantou {
            position: absolute;
            right: 10px;
          }
        }
      }
      li.word-explan {
        span {
          margin-right: 10px;
          font-size: 12px;
        }
      }
    }
  }

  .vanimages {
    .van-image {
      vertical-align: bottom;
    }
  }

  .more {
    color: #fff;
    background-color: #000;
    padding: 20px 13px;
    font-size: 18px;
    text-align: center;
  }
}
</style>

